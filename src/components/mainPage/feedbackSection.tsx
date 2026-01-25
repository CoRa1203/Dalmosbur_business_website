'use client'

import SectionContainer from "../layout/sectionContainer";
import Link from "next/link";
import Header2 from "../UI/header2";
import { useState } from "react";
import Button from "../UI/button";


export default function FeedbackSection() {
  //Разбить форму на компоненты
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    agree: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log('Form submitted:', formData);
  };

  return <SectionContainer>
    <Header2 title="Обратная связь" header="Остались вопросы? Напишите нам!" hideBtn/>
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ФИО */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            ФИО
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--primary-blue)] rounded-lg   focus:border-blue-600 outline-none transition"
            placeholder="Иванов Иван Иванович"
            required
          />
        </div>

        {/* Телефон */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--primary-blue)] rounded-lg   focus:border-blue-600 outline-none transition"
            placeholder="+7 (XXX) XXX-XX-XX"
            required
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--primary-blue)] rounded-lg   focus:border-blue-600 outline-none transition"
            placeholder="example@mail.com"
            required
          />
        </div>

        {/* Сообщение */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Ваше сообщение или вопрос
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-[var(--primary-blue)] rounded-lg   focus:border-blue-600 outline-none transition resize-none"
            placeholder="Напишите ваше сообщение..."
          />
        </div>

        {/* Чекбокс согласия */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-[var(--primary-blue)] rounded focus:ring-blue-500"
              required
            />
          </div>
          <label htmlFor="agree" className="ml-3 text-sm text-gray-700">
            Я подтверждаю ознакомление и даю Согласие на обработку моих персональных данных в порядке и на условиях, указанных в {' '}
            <Link
              href="/privacy-policy"
              className="text-[var(--primary-blue)] hover:text-[var(--primary-blue-hover)] underline "
            >
              Политике обработки персональных данных
            </Link>.
          </label>
        </div>

        {/* Кнопка отправки */}
        <Button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-blue-hover)] transition disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!formData.agree}>Отправить</Button>
        {/* <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!formData.agree}
        >
          Отправить
        </button> */}
      </form>
    </div>
  </SectionContainer>
}
