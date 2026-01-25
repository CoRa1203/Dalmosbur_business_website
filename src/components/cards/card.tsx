import Link from "next/link";

export default function Card({ title, bg }: { title: string, bg: string }) {
    return <article className="w-full max-w-[708px] aspect-video relative transition transform hover:scale-[1.02] group" style={{
        backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <Link href='/'>
        <div className='absolute left-0  top-0 w-full h-full bg-[var(--primary-black-50)] group-hover:bg-[var(--primary-black-80)] transition'></div>
        <p className="absolute inset-0 flex items-center text-center justify-center text-[var(--primary-white)] z-20">{title}</p>
        </Link>
    </article>
}