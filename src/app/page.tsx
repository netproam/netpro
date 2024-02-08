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
    <main className="flex min-h-screen lg:bg-white  flex-col items-center justify-between  overflow-hidden w-screen  ">
   
    <WelcomeSection/>
    <NewServicesSection/>


    <div className="flex flex-col  gap-8  pt-4">
    <ThirdSection/>

    <FifthSection/>



    </div>
    <FourthSection/>

    <div 
       style={{ scrollbarWidth: "none" }}

    className=" bg-white  lg:px-48
    w-full h-full
    flex flex-col justify-center items-center ">

    <TestimonialSection/>
    </div>
    <ThirdSection/>

    <ContactSection/>

    </main>
  );
}
