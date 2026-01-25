
'use client';

import { useState, useEffect } from 'react';
import Button from './UI/button';


interface AutoSliderProps {
  images: string[],
  interval?: number,
  showIndications?: boolean,
}

export default function AutoSlider({
  images,
  interval = 5000,
  showIndications
}: AutoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* Контент поверх слайдера */}
      <div className="absolute bottom-[20%] left-[5%] sm:bottom-[15%] sm:left-[8%] md:bottom-[20%] md:left-[12%] lg:bottom-[25%] lg:left-[15%] z-20 text-[var(--primary-white)]">
        <h1 className="text-title-2xlarge pb-fluid-large">
          Профессиональные буровые
          <br />
          и буро-взрывные работы
        </h1>
        <p className="pb-fluid-4xlarge">
          ООО «Дальмосбур» — надёжный подрядчик для горнодобывающей отрасли
        </p>
        <Button accent>
          <p>Наши услуги</p>
        </Button>
      </div>
      
      {/* Темный оверлей на весь слайдер */}
      <div className="absolute inset-0 bg-[var(--primary-black-50)] z-10" />
      
      {/* Слайды */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 0' }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import Button from './UI/button';

// interface AutoSliderProps {
//     images: string[];
//     interval?: number;
// }

// export default function AutoSlider({
//     images,
//     interval = 5000,
// }: AutoSliderProps) {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % images.length);
//         }, interval);

//         return () => clearInterval(timer);
//     }, [images.length, interval]);

//     if (!images || images.length === 0) return null;

//     return (
// //убрать прокрутку по ширине. Полупрозрачный оверлей короче, чем слайдер
//         <div className="w-full h-dvh mx-auto overflow-hidden ">
//             <div className='absolute bottom-[20%] left-[5%] sm:bottom-[15%] sm:left-[8%] md:bottom-[20%] md:left-[12%]lg:bottom-[25%] lg:left-[15%] z-20 text-[var(--primary-white)] '>
//                 <h1 className='text-title-2xlarge pb-fluid-large'>Профессиональные буровые
//                     <br />
//                     и буро-взрывные работы</h1>
//                 <p className='pb-fluid-4xlarge '>ООО «Дальмосбур» — надёжный подрядчик для горнодобывающей отрасли</p>
//                 <Button accent><p>Наши услуги</p></Button>
//             </div>
//             <div className='absolute w-full h-full bg-[var(--primary-black-50)] z-10'></div>

//             <div
//                 className="flex transition-transform w-full h-full duration-500 ease-in-out"
//                 style={{
//                     transform: `translateX(-${currentIndex * 100}%)`,

//                 }}
//             >
//                 {images.map((src, index) => (
//                     <div key={index} className="w-full flex-shrink-0">
//                         <img
//                             src={src}
//                             alt={`Slide ${index + 1}`}
//                             className="w-full h-full object-cover rotate-y-180 "
//                             style={{ objectPosition: '50% 0' }}
//                             loading={index === 0 ? 'eager' : 'lazy'}
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Индикаторы (точки) */}
//             {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//         {images.map((_, index) => (
//             <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//                 index === currentIndex ? 'bg-white' : 'bg-white/50'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//             />
//         ))}
//       </div> */}
//         </div>
//     );
// }