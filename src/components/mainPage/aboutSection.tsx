import SectionContainer from "../layout/sectionContainer";
import Header2 from "../UI/header2";

export default function AboutSection() {
    return <SectionContainer>
        <Header2 title="о нас" header="Дальмосбур" btnText="Подробнее" href="/aboutUs"/>
        <div className="flex flex-col gap-fluid-large">
            <div>
                <p>ООО «Дальмосбур» основано в 2018 году как предприятие, ориентированное на оказание высокотехнологичных услуг в сфере горных работ. За годы деятельности мы выросли из небольшой бригады в компанию с собственным парком техники и штатом сертифицированных специалистов.
                </p>
                <br />
                <p>
                    В основе нашей деятельности — команда сертифицированных специалистов с многолетним опытом в горном деле: бурильщики, взрывники, инженеры-технологи и геодезисты. Все сотрудники проходят регулярное обучение и аттестацию в соответствии с требованиями Ростехнадзора и внутренних стандартов безопасности.
                </p>
            </div>
            <img
                src='/images/about.jpeg'
                alt='about us'
                className="w-full max-h-[712px] h-full"
                style={{ objectPosition: '50% 0' }}
            />
        </div>
    </SectionContainer>

}