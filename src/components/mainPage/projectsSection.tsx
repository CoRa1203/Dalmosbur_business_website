import SectionContainer from "../layout/sectionContainer";
import Card from "../cards/card";
import Cards from "../cards/projectsCards";
import Header2 from "../UI/header2";


export default function ProjectsSection() {
    return <SectionContainer>
        <Header2 title="Проекты" header="Наши работы на крупнейших объектах" btnText="Все проекты" />
        <Cards />
    </SectionContainer>
}