import AutoSlider from "@/components/autoSlider";
import AboutSection from "@/components/mainPage/aboutSection";
import Advantages from "@/components/mainPage/advantages";
import FeedbackSection from "@/components/mainPage/feedbackSection";
import ProjectsSection from "@/components/mainPage/projectsSection";
import ServicesSection from "@/components/mainPage/servicesSection";
import { SLIDER_IMAGES } from "@/data/data"

export default function Main() {
    return <div className="flex flex-col items-center justify-center gap-fluid-5xlarge ">
        <AutoSlider images={SLIDER_IMAGES}></AutoSlider>
        <Advantages />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <FeedbackSection />
    </div>
}