'use client'

import { contactFormFields } from "@/config/form"
import Form from "./form"


export default function ResumeForm() {
    return (

        <Form
            fields={contactFormFields}
            onSubmit={async (data) => {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })
                if (!response.ok) throw new Error()
            }}
            buttonText="Отправить"
        />
    )
}