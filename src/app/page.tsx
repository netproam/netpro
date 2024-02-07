import Navbar from "@/components/Navigation/Navbar";
import WelcomeSection from "@/components/section/WelcomeSection";
import ThirdSection from "@/components/section/ThirdSection";
import Image from "next/image";
import FourthSection from "@/components/section/FourthSection";
import ContactSection from "../components/section/ContactSection";
import FifthSection from "@/components/section/FithSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import NewServicesSection from "@/components/section/NewServiceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:bg-slate-50  flex-col items-center justify-between  overflow-hidden w-screen  ">
   
    <WelcomeSection/>
    <NewServicesSection/>

    <div className="flex flex-col  gap-8 bg-slate-50 pt-4">
    <ThirdSection/>
    <FifthSection/>


    </div>
    <FourthSection/>

    <div className=" bg-white  flex flex-col justify-center items-center ">
    <p className="font-semibold text-3xl leading-relaxed  text-center pt-8 lg:pt-16 lg:w-fit 
lg:text-5xl tracking-tighter ">Ils nous ont fait confiance</p>
    <TestimonialSection/>
    </div>

    <ContactSection/>
    </main>
  );
}
