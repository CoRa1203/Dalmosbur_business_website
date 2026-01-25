import Link from "next/link";
import { SERVICES } from "@/data/data";
import Article from "./article";

export default function Articles() {
    return <div className="flex flex-col gap-fluid-large">{SERVICES.map((item, index) => <Article key={item.title} title={item.title} description={item.description} image={item.image} reverse={index % 2 === 1}/>)}</div>
}