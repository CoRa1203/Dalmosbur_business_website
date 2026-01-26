import clsx from "clsx";
import BlockContent from "./blockContent";
//TODO останавливается адаптацию от 500px

export default function SectionContainer({ children, className, style }: { children: React.ReactNode, className?: string, style?:React.CSSProperties  }) {
    return <section className={clsx("max-w-[1400px] px-fluid-medium flex w-full ", className)}><div className="flex flex-col w-full "><BlockContent>{children}</BlockContent></div></section>
}