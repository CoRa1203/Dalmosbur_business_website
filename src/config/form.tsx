import { Field } from "@/components/UI/form/form";

/**
 * URL для отправки форм на PHP.
 * Указать NEXT_PUBLIC_FORM_ENDPOINT в .env ( https://домен.ru/api/send.php).
 * Загрузить php/send.php на хостинг с поддержкой PHP.
 */
export const formActionUrl =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FORM_ENDPOINT
    ? process.env.NEXT_PUBLIC_FORM_ENDPOINT
    : "";

export const contactFormFields: Field[] = [
  {
    name: "name",
    label: "Имя",
    type: "text",
    required: true,
    placeholder: "Ваше имя",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
    required: true,
    placeholder: "+7 999 000 00 00",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@mail.ru",
  },
  {
    name: "document",
    label: "Прикрепить документ",
    type: "file",
    accept: ".pdf,.doc,.docx",
    required: true,
    helperText: "PDF, DOC, DOCX до 10MB",
  },
  {
    name: "message",
    label: "Напишите ваше сообщение",
    type: "textarea",
    rows: 4,
    placeholder: "Ваше сообщение или вопрос",
  },
  {
    name: "checkbox",
    label: "Я подтверждаю ознакомление и даю Согласие на обработку персональных данных",
    type: "checkbox",
    required: true,
    helperText: (
      <>
        в порядке и на условиях, указанных в{" "}
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-accent)] hover:underline"
        >
          Политике обработки персональных данных
        </a>
      </>
    ),
  }
];

export const orderFormFields: Field[] = [
  {
    name: "name",
    label: "Имя",
    type: "text",
    required: true,
    placeholder: "Ваше имя",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
    required: true,
    placeholder: "+7 999 000 00 00",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "example@mail.ru",
  },
  {
    name: "service",
    label: "Услуга",
    type: "select",
    required: true,
    options: [
      { value: "consult", label: "Консультация" },
      { value: "support", label: "Поддержка" },
    ],
  },
  {
    name: "message",
    label: "Комментарий",
    type: "textarea",
    rows: 3,
    placeholder: "Детали заказа",
  },
  {
    name: "checkbox",
    label: "Я подтверждаю ознакомление и даю Согласие на обработку персональных данных",
    type: "checkbox",
    required: true,
    helperText: (
      <>
        в порядке и на условиях, указанных в{" "}
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-accent)] hover:underline"
        >
          Политике обработки персональных данных
        </a>
      </>
    ),
  }
];

