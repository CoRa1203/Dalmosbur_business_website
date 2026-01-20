import IconText from "@/components/common/iconText";
import { Insta, Phone, Telegram, YouTube } from "@/components/UI/icons";
import BlockContainer from "../blockContainer";
import Link from "next/link";
import { TEXTS } from "@/data/text-data"

export default function HeaderUpperLayer() {
    return (
        <div className="absolute z-100 w-dvw bg-[var(--primary-white)]">
            <div className="flex gap-fluid-2xlarge justify-between items-center border-b-[1px] py-fluid-xsmall px-fluid-large border-b-[var(--secondary-lightGrey)]">
                <IconText text="Нужна помощь?" info="+7 982 154 25 45"><Phone /></IconText>
                <h1 className="text-title-xlarge-semiBold text-[var(--primary-blue)]">Дальмосбур</h1>
                <div className="flex gap-fluid-medium ease-in-out">
                    <a href="#" className="element-hover duration-500 ease-in-out"><YouTube /></a>
                    <a href="#" className="element-hover duration-500 ease-in-out"><Insta /></a>
                    <a href="#" className="element-hover duration-500 ease-in-out"><Telegram /></a>
                </div>
            </div>
            <BlockContainer>
                <nav className="flex items-center justify-center py-fluid-small">
                    <ul className="flex gap-fluid-xlarge">
                        {TEXTS.navigation.map(navItem => <li key={navItem.title} className="element-hover duration-500 ease-in-out">
                            <Link href={navItem.link}>{navItem.title}</Link>
                        </li>)}
                    </ul>
                </nav>
            </BlockContainer>
        </div>
    )
}