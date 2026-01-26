import SectionContainer from "../layout/sectionContainer";
import Articles from "../articles/articles";
import Header2 from "../UI/header2";


export default function ServicesSection() {
    return <SectionContainer>
        {/*TODO gap больше чем надо. Нужно унифицировать компонент <div className="flex flex-col gap-fluid-large"></div> */}
        <Header2 title="Услуги" header="Комплексный подход к решению задач горнодобывающей отрасли" btnText="Все услуги" href="/services"/>
        <p>ООО «Дальмосбур» предлагает комплексный подход к решению задач горнодобывающей отрасли — от геологоразведочного бурения до полного цикла буро-взрывных работ на промышленных объектах.</p>
        <Articles />
    </SectionContainer>
}