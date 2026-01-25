// components/layout/header/header-upper-layer.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Insta, Phone, Telegram, YouTube } from "@/components/UI/icons";
import SectionContainer from "../sectionContainer";
import { TEXTS } from '@/data/data';
import IconText from '@/components/UI/iconText';

export default function HeaderUpperLayer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <div className={`flex flex-col items-center relative z-50 w-full bg-[var(--primary-white)] ${isHomePage ? '' : ''}`}>
      {/* Верхняя полоса с контактами */}
      <div className="flex w-full gap-fluid-2xlarge justify-between items-center border-b-[1px] py-fluid-xsmall px-fluid-large border-b-[var(--secondary-lightGrey)]">
        <IconText text="Нужна помощь?" info="+7 982 154 25 45">
          <Phone />
        </IconText>
        
        <h1 className="text-title-2xlarge-semiBold text-[var(--primary-blue)]">
          Дальмосбур
        </h1>
        
        <div className="flex gap-fluid-medium">
          <a href="#" className="transition hover:text-[var(--primary-blue-hover)]">
            <YouTube />
          </a>
          <a href="#" className="transition hover:text-[var(--primary-blue-hover)]">
            <Insta />
          </a>
          <a href="#" className="transition hover:text-[var(--primary-blue-hover)]">
            <Telegram />
          </a>
        </div>
      </div>
      
      {/* Навигация */}
      <SectionContainer>
        <nav className="flex items-center justify-center py-fluid-small">
          <ul className="flex gap-fluid-xlarge">
            {TEXTS.map((navItem) => (
              <li
                key={navItem.title}
                className="transition hover:text-[var(--primary-blue-hover)]"
              >
                <Link href={navItem.link}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </SectionContainer>
    </div>
  );
}

// import IconText from "@/components/UI/iconText";
// import { Insta, Phone, Telegram, YouTube } from "@/components/UI/icons";
// import SectionContainer from "../sectionContainer";
// import Link from "next/link";
// import { TEXTS } from "@/data/data"

// export default function HeaderUpperLayer() {
//     return (
//         <div className="absolute z-100 w-dvw bg-[var(--primary-white)]">
//             <div className="flex gap-fluid-2xlarge justify-between items-center  border-b-[1px] py-fluid-xsmall px-fluid-large border-b-[var(--secondary-lightGrey)]">
//                 <IconText text="Нужна помощь?" info="+7 982 154 25 45"><Phone /></IconText>
//                 <h1 className="text-title-2xlarge-semiBold text-[var(--primary-blue)]">Дальмосбур</h1>
//                 <div className="flex gap-fluid-medium">
//                     <a href="#" className="transition hover:text-[var(--primary-blue-hover)]"><YouTube /></a>
//                     <a href="#" className="transition hover:text-[var(--primary-blue-hover)]"><Insta /></a>
//                     <a href="#" className="transition hover:text-[var(--primary-blue-hover)]"><Telegram /></a>
//                 </div>
//             </div>
//             <SectionContainer>
//                 <nav className="flex items-center justify-center py-fluid-small">
//                     <ul className="flex gap-fluid-xlarge">
//                         {TEXTS.map(navItem => <li key={navItem.title} className="transition hover:text-[var(--primary-blue-hover)]">
//                             <Link href={navItem.link}>{navItem.title}</Link>
//                         </li>)}
//                     </ul>
//                 </nav>
//             </SectionContainer>
//         </div>
//     )
// }