import Link from "next/link";
import { ArrowRight } from "../UI/icons";

type ArticleProp = {
    title: string,
    image: string,
    description: string,
    reverse: boolean,
}

export default function Article({ title, description, image, reverse = false }: ArticleProp) {
    return (
        <article className={`flex flex-col md:flex-row gap-fluid-large w-full  ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <img
                src={image}
                className="w-full md:w-1/2 h-full object-cover max-h-[304px]"
            />
            <Link
                href='/'
                className="flex flex-col w-full md:w-1/2 p-fluid-medium rounded-fluid-xsm drop-shadow-md border border-transparent hover:border-[var(--secondary-lightGrey)] hover:shadow-lg transition-all duration-300"
            >
                <div className="flex flex-col gap-fluid-small grow w-full">
                    <h3 className="text-title-xlarge">{title}</h3>
                    <p className="text-[var(--primary-grey)]">{description}</p>
                </div>
                <button className="flex items-center min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--secondary-accent-hover)] text-[var(--secondary-accent)] whitespace-nowrap">
                    Подробнее<ArrowRight />
                </button>
            </Link>
        </article>
    )
}

// export default function Article({ title, description, image, reverse = false}: ArticleProp) {
//     return <article className={`flex gap-fluid-large sm:flex-col w-full h-full max-h-[304px] ${reverse ? 'flex-row-reverse' : ''}`}>
//         <img src={image} className="w-full h-full object-cover"/>
//         <Link href='/' className="flex flex-col w-full">
//             <div className="flex flex-col gap-fluid-small grow w-full">
//                 <h3>{title}</h3>
//                 <p className="text-[var(--primary-grey)]">{description}</p>
//             </div>
//             <button className="flex items-center min-h-11 h-12 text-body-small gap-fluid-large py-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--secondary-accent-hover)] text-[var(--secondary-accent)] whitespace-nowrap">Подробнее<ArrowRight /></button>
//         </Link>
//     </article>
// }