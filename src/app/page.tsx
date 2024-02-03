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
    <main className="flex min-h-screen flex-col items-center justify-between  overflow-hidden w-screen  ">
   
    <WelcomeSection/>
    <div className="w-full">
    <ServicesSection/>
    </div>
    <div className="flex flex-col py-16 gap-8 bg-slate-50">
    <ThirdSection/>
    <FifthSection/>
    </div>
    <FourthSection/>
    <div className=" bg-[#F0F9F9] flex flex-col justify-center items-center ">
    <p className="font-semibold text-3xl leading-relaxed  text-center lg:w-fit 
lg:text-5xl tracking-tighter">Ils nous ont fait confiance</p>
    <TestimonialSection/>
    </div>
    <ContactSection/>
    </main>
  );
}
