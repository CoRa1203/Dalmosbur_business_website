
'use client';

import { usePathname } from 'next/navigation';
import HeaderUpperLayer from './header-upper-layer';

import { SLIDER_IMAGES } from '@/data/data';
import AutoSlider from '@/components/autoSlider';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <header className="relative w-full">
      <HeaderUpperLayer />
      
      {/* Слайдер только на главной */}
      {isHomePage && (
        <div className="absolute top-0 left-0 w-full h-dvh -z-10">
          <AutoSlider images={SLIDER_IMAGES} />
        </div>
      )}
    </header>
  );
}