'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Button from '../button'

export type FieldType = 'text' | 'email' | 'tel' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file'

export interface Field {
  name: string
  label?: string | React.ReactNode
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  rows?: number
  accept?: string
  multiple?: boolean
  helperText?: React.ReactNode
}

interface SimpleFormProps {
  fields: Field[]
  onSubmit: (data: Record<string, any> | FormData) => Promise<void>
  buttonText?: string
  className?: string
}

export default function Form({
  fields,
  onSubmit,
  buttonText = 'Отправить',
  className = ''
}: SimpleFormProps) {
  const [values, setValues] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, File | File[]>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'file') {
      const target = e.target as HTMLInputElement
      const selectedFiles = target.files
      if (selectedFiles && selectedFiles.length > 0) {
        const isMultiple = target.multiple === true
        setFiles(prev => ({
          ...prev,
          [name]: isMultiple ? Array.from(selectedFiles) : selectedFiles[0]
        }))
      }
    } else {
      setValues(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // ✅ Проверка обязательных чекбоксов
    const requiredCheckbox = fields.find(f => f.type === 'checkbox' && f.required)
    if (requiredCheckbox && !values[requiredCheckbox.name]) {
      setStatus('error')
      return
    }
    
    setStatus('loading')
    
    try {
      const hasFiles = Object.keys(files).length > 0
      
      if (hasFiles) {
        const formData = new FormData()
        
        Object.entries(values).forEach(([key, value]) => {
          if (value !== undefined && value !== '') {
            formData.append(key, String(value))
          }
        })
        
        Object.entries(files).forEach(([key, file]) => {
          if (Array.isArray(file)) {
            file.forEach(f => formData.append(key, f))
          } else if (file) {
            formData.append(key, file)
          }
        })
        
        await onSubmit(formData)
      } else {
        await onSubmit(values)
      }
      
      setStatus('success')
      setValues({})
      setFiles({})
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
    }
  }

  const isFormValid = () => {
    const hasEmptyRequired = fields.some(field => {
      if (!field.required) return false
      if (field.type === 'checkbox') return !values[field.name]
      if (field.type === 'file') return !files[field.name]
      return !values[field.name] || values[field.name] === ''
    })
    
    if (hasEmptyRequired) return false
    
    const consentCheckbox = fields.find(f => f.type === 'checkbox' && f.required)
    if (consentCheckbox && !values[consentCheckbox.name]) return false
    
    return true
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full space-y-4 ${className}`} encType="multipart/form-data">
      {fields.map(field => (
        <div key={field.name}>
          {field.label && field.type !== 'checkbox' && (
            <label className="block text-sm font-medium mb-1 ">
              {field.label}{field.required && <span className="text-[var(--secondary-red)]"> *</span>}
            </label>
          )}

          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={values[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              rows={field.rows || 4}
              className="w-full px-3 py-2 border border-[var(--secondary-lightGrey)]  bg-[var(--primary-white)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={values[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full px-3 py-2 border bg-[var(--primary-white)] border-[var(--secondary-lightGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-[var(--primary-black)]"
            >
              <option value="">Выберите</option>
              {field.options?.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : field.type === 'checkbox' ? (
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name={field.name}
                checked={values[field.name] || false}
                onChange={handleChange}
                required={field.required}
                className="w-4 h-4 mt-1 accent-accent flex-shrink-0"
              />
              <span className="text-sm leading-tight">
                {field.label}
              </span>
            </label>
          ) : field.type === 'file' ? (
            <div>
              <input
                type="file"
                name={field.name}
                onChange={handleChange}
                required={field.required}
                accept={field.accept}
                multiple={field.multiple === true ? true : undefined}
                className="w-full px-3 py-2 border border-[var(--secondary-lightGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[var(--primary-accent)] file:text-white file:cursor-pointer hover:file:bg-[var(--primary-accent-hover)]"
              />
              {field.helperText && (
                <p className="mt-1 text-sm text-[var(--primary-grey)]">{field.helperText}</p>
              )}
              {files[field.name] && (
                <p className="mt-2 text-sm text-[var(--secondary-green)]">
                  ✓ {Array.isArray(files[field.name]) 
                    ? `Выбрано файлов: ${files[field.name].length}` 
                    : `Файл: ${(files[field.name] as File).name}`}
                </p>
              )}
            </div>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={values[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-3 py-2 border text-[var(--primary-black)] bg-[var(--primary-white)] border-[var(--secondary-lightGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          )}
        </div>
      ))}
      {fields.some(f => f.type === 'checkbox' && f.required && !values[f.name]) && (
  <p className="text-sm text-[var(--secondary-red)] text-center">
    Для отправки формы необходимо подтвердить согласие
  </p>
)}
      <Button
        className={`${status === 'success' ? 'bg-[var(--secondary-green)]' : status === 'error' ? 'bg-[var(--secondary-red)]' : ''}`}
        type="submit"
        disabled={status === 'loading' || !isFormValid()}
      >
        {status === 'loading' ? 'Отправка...' : status === 'success' ? 'Отправлено' : status === 'error' ? 'Ошибка' : buttonText}
      </Button>
    </form>
  )
}