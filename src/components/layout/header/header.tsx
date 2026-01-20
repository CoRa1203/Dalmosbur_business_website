import AutoSlider from "@/components/autoSlider";
import HeaderUpperLayer from "./header-upper-layer";

const images = [
  '/images/mainBlock/abidour.jpg',
  '/images/mainBlock/truck.jpg',
  '/images/mainBlock/wim-van.png',
];

export default function Header (){
    return <header className="relative w-vw h-dvh overflow-hidden">
        <HeaderUpperLayer/>
        <AutoSlider images={images}></AutoSlider>
    </header>
}