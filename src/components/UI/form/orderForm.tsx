'use client'

import { orderFormFields } from "@/config/form"
import Form from "./form"


export default function OrderForm() {
    return (

        <Form className="w-full"
            fields={orderFormFields}
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