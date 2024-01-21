import Navbar from "@/components/Navigation/Navbar";
import ServicesSection from "@/components/section/ServicesSection";
import WelcomeSection from "@/components/section/WelcomeSection";
import ThirdSection from "@/components/section/ThirdSection";
import Image from "next/image";
import FourthSection from "@/components/section/FourthSection";
import ContactSection from "@/components/section/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between   ">
   
    <WelcomeSection/>
    <div>
    <ServicesSection/>
    </div>
    <ThirdSection/>
    <FourthSection/>
    <ContactSection/>
    </main>
  );
}
