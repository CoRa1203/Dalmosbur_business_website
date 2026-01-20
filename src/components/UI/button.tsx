import clsx from "clsx"

export default function Button({ children, accent }: { children: React.ReactElement, accent?: boolean }) {
    return <button className={clsx(
        accent ? "bg-[var(--secondary-accent)] hover:bg-[var(--secondary-accent-hover)]" : "bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)]",

        "min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer element-hover-primary duration-500 ease-in-out"
    )}>{children}</button>
} 