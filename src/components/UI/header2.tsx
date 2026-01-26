import Link from "next/link";
import Button from "./button";
import { ArrowRight } from "./icons";

type Header2Prop = {
    title: string,
    header: string,
    btnText?: string,
    hideBtn?: boolean,
    href?:string
    
}

export default function Header2({title, header, btnText,hideBtn, href = "/"}: Header2Prop){
    return <div className="flex justify-between items-center">
        <div>
        <p className="capitalize text-[var(--secondary-accent)] text-title-xlarge-semiBold">{title}</p>
        <h2 className="text-title-2xlarge">{header}</h2>
        </div>
        {hideBtn ? null : <Link href={href} className="flex items-center min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--secondary-accent-hover)] text-[var(--secondary-accent)] whitespace-nowrap">{btnText} {hideBtn ? null : <ArrowRight/>}</Link>}
       
    </div>
}