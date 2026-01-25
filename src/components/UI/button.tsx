import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

// Экспортируем тип для использования в других компонентах
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  accent?: boolean;
  className?: string; // явно указываем, чтобы TypeScript не ругался
}

export default function Button({
  children,
  accent = false,
  className,
  ...restProps // ← все остальные пропсы: onClick, disabled, type и т.д.
}: ButtonProps) {
  return (
    <button
      className={clsx(
        // Базовые стили
        "min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer transition",
        
        // Цвета
        accent
          ? "bg-[var(--secondary-accent)] hover:bg-[var(--secondary-accent-hover)]"
          : "text-[var(--primary-white)] bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)]",
        
        // Кастомный className извне
        className
      )}
      {...restProps} // ← пробрасываем все HTML-атрибуты
    >
      {children}
    </button>
  );
}

// import clsx from "clsx"

// export default function Button({ children, accent }: { children: React.ReactNode, accent?: boolean }) {
//     return <button className={clsx(
//         accent ? "bg-[var(--secondary-accent)] hover:bg-[var(--secondary-accent-hover)] " : "bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] ",

//         "min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out"
//     )}>{children}</button>
// } 