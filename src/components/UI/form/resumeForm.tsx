'use client'

import { contactFormFields, formActionUrl } from "@/config/form"
import Form from "./form"

export default function ResumeForm() {
    return (
        <Form
            fields={contactFormFields}
            formAction={formActionUrl}
            buttonText="Отправить"
        />
    )
}