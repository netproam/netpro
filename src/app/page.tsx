import Navbar from "@/components/Navigation/Navbar";
import ServicesSection from "@/components/section/ServicesSection";
import WelcomeSection from "@/components/section/WelcomeSection";
import ThirdSection from "@/components/section/ThirdSection";
import Image from "next/image";
import FourthSection from "@/components/section/FourthSection";
import ContactSection from "@/components/section/ContactSection";
import FifthSection from "@/components/section/FithSection";
import TestimonialSection from "@/components/section/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  overflow-hidden  ">
   
    <WelcomeSection/>
    <div>
    <ServicesSection/>
    </div>
    <div className="flex flex-col py-16 gap-8 bg-slate-50">
    <ThirdSection/>
    <FifthSection/>
    <ThirdSection/>
    </div>
    <FourthSection/>
    <div className="overflow-scroll w-screen">
    <TestimonialSection/>
    </div>
    <ContactSection/>
    </main>
  );
}
