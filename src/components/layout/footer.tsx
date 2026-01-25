import Link from "next/link";
import SectionContainer from "./sectionContainer";
import { TEXTS } from "@/data/data";
import IconText from "@/components/UI/iconText";
import { Location, Mail, Phone } from "@/components/UI/icons";

export default function Footer() {
    return <footer className="flex flex-col justify-center items-center mt-fluid-4xlarge overflow-hidden" style={{
        backgroundImage: 'url(/images/footerBg.svg)', backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <SectionContainer>
            <div className="py-fluid-2xlarge">
                <h1 className="text-title-2xlarge-semiBold pb-fluid-2xlarge text-[var(--primary-blue)]">Дальмосбур</h1>
                <div className="flex justify-between">
                    <nav>
                        <ul className="flex flex-col gap-fluid-large">
                            {TEXTS.map(item => <li key={item.title}><Link href={item.link}>{item.title}</Link></li>)}
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-fluid-large">
                        <IconText info="+7 982 154 25 45"><Phone/></IconText>
                        <IconText info="info@dalmosbur.ru"><Mail/></IconText>
                        <IconText info="г. Москва, ул. Новый Арбат, 145"><Location/></IconText>
                    </div>
                    <div className="flex flex-col gap-fluid-large">
                        <Link href="/" className="hover:text-[var(--primary-blue)] text-[var(--primary-blue-hover)] underline">Приглашаем на работу</Link>
                        <Link href="/" className="hover:text-[var(--primary-blue)] text-[var(--primary-blue-hover)] underline">Оставить заявку</Link>
                    </div>
                </div>
            </div>
        </SectionContainer>
<div className="flex flex-wrap gap-fluid-large justify-between items-center px-fluid-medium text-[var(--primary-grey)] w-full border-[1px] border-[var(--secondary-lightGrey)] py-fluid-medium max-lg:flex-col max-lg:text-center">
    <p className="max-lg:w-full">Политика обработки персональных данных | Согласие на обработку персональных данных</p>
    <p className="max-lg:w-full">© 2026 ООО «Дальмосбур»</p>
</div>
    </footer>
}