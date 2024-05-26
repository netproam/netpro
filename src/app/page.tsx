import Navbar from "@/components/Navigation/Navbar";
import WelcomeSection from "@/components/section/WelcomeSection";
import ThirdSection from "@/components/section/ThirdSection";
import Image from "next/image";
import FourthSection from "@/components/section/FourthSection";
import ContactSection from "../components/section/ContactSection";
import FifthSection from "@/components/section/FithSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import NewServicesSection from "@/components/section/NewServiceSection";
import SpecificitySection from "@/components/section/SpecificitySection";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-50 
    lg:gap-10
    flex-col items-center justify-between  overflow-hidden w-screen  ">
   <Toaster/>
    <WelcomeSection/>



    <NewServicesSection/>
 
  

    <ThirdSection/>

 



  
  


    <SpecificitySection/>
    <FourthSection/>


    <div 
       style={{ scrollbarWidth: "none" }}

    className="  lg:px-10
    w-full h-full
    flex flex-col justify-center items-center ">

    <TestimonialSection/>
    </div>

    <ContactSection/>

    </main>
  );
}
