import { PROJECTS } from "@/data/projects"
import Card from "./card"

const bestProjects = PROJECTS.slice(0, 4)


export default function Cards({ showAll, slug }: { showAll: boolean, slug: string }) {
    return <>
        {showAll ?
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">{PROJECTS.map(item => <Card key={item.id} slug={item.slug} title={item.title} bg={item.image} />)}</div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">{bestProjects.map(item => <Card key={item.id} slug={item.slug} title={item.title} bg={item.image} />)}</div>}
    </>
}