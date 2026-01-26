import AboutSection from "@/components/mainPage/aboutSection";
import FeedbackSection from "@/components/mainPage/feedbackSection";
import ProjectsSection from "@/components/mainPage/projectsSection";
import ServicesSection from "@/components/mainPage/servicesSection";
import AutoSlider from "@/components/UI/autoSlider";
import { SLIDER_IMAGES } from "@/data/data"
import Advantages from "@/components/mainPage/advantages";

export default function MainPage() {
    // поменять на секшн контейнер с падингом топ
    return <div className="flex flex-col items-center justify-center gap-fluid-5xlarge ">
        <AutoSlider images={SLIDER_IMAGES}></AutoSlider>
       <Advantages/>
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <FeedbackSection />
    </div>
}