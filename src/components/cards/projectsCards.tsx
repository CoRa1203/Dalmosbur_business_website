import { CARDS_PROJECTS } from "@/data/data"
import Card from "./card"

export default function Cards() {
    return <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">{CARDS_PROJECTS.map(item => <Card key={item.title} title={item.title} bg={item.image}/>)}</div>
}