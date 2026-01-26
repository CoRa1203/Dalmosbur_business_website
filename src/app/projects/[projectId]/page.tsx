'use client'

import SectionContainer from "@/components/layout/sectionContainer"
import ShortInfo from "@/components/UI/shortInfo"

import { PROJECTS } from "@/data/projects"
import { useParams } from "next/navigation"


export default function Project() {

    const params = useParams()
    const projectId = params?.projectId

    const project = PROJECTS.find(
        (project) => project.slug.toString() === projectId
    );
    ;

    if (!project) {
        return <div>Загрузка...</div>;
    }

    console.log(project)
    return (
        <div className="w-full">
            <div className=" h-[calc(100vh-112px)]" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply'
            }}>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-fluid-small items-center py-fluid-small px-fluid-large border-r-[1px] last:border-r-0' key={project.year}><img style={{
                        width: 'clamp(40px, 8vw, 100px)',
                        height: 'auto'
                    }} src={project.image} /><p className='text-center'>{project.year}</p></div>
                    <div className='flex flex-col gap-fluid-small items-center py-fluid-small px-fluid-large border-r-[1px] last:border-r-0' key={project.duration}><img style={{
                        width: 'clamp(40px, 8vw, 100px)',
                        height: 'auto'
                    }}  src={project.image} /><p className='text-center'>{project.duration}</p></div>
                    <div className='flex flex-col gap-fluid-small items-center py-fluid-small px-fluid-large border-r-[1px] last:border-r-0' key={project.volume}><img style={{
                        width: 'clamp(40px, 8vw, 100px)',
                        height: 'auto'
                    }} src={project.image} /><p className='text-center'>{project.volume}</p></div>
                </div>
            </div>
            <SectionContainer>
                <p>{project?.title}</p>
                <p>{project?.id}</p>
            </SectionContainer>
        </div>
    )
}

{/* <div className='flex flex-col gap-fluid-small items-center py-fluid-small px-fluid-large border-r-[1px] last:border-r-0' key={item.text}><img style={{ 
    width: 'clamp(40px, 8vw, 100px)',
    height: 'auto'
  }}  className='max-w-[100px]' src={item.image} /><p className='text-center'>{item.text}</p></div> */}