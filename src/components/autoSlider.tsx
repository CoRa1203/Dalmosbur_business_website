'use client';

import { useState, useEffect } from 'react';
import Button from './UI/button';

interface AutoSliderProps {
    images: string[]; // массив URL изображений
    interval?: number; // интервал в мс (по умолчанию 5000 = 5 сек)
}

export default function AutoSlider({
    images,
    interval = 5000,
}: AutoSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Автоматическая смена слайда
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        // Очистка таймера при размонтировании
        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className="absolute w-full h-full mx-auto overflow-hidden ">
            <div className='absolute bottom-[28%] left-[13%] z-20 text-[var(--primary-white)] '>
                <h1 className='text-title-2xlarge pb-fluid-large'>Профессиональные буровые
                    <br />
                    и буро-взрывные работы</h1>
                <p className='pb-fluid-4xlarge '>ООО «Дальмосбур» — надёжный подрядчик для горнодобывающей отрасли</p>
                <Button accent><p>Наши услуги</p></Button>
            </div>
            <div className='absolute w-full h-full bg-[var(--primary-black-50)] z-10'></div>
            {/* Слайдер */}
            <div
                className="flex transition-transform w-full h-full duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,

                }}
            >
                {images.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rotate-y-180"
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
            </div>

            {/* Индикаторы (точки) */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div> */}
        </div>
    );
}