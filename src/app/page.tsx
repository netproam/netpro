import Navbar from "@/components/Navigation/Navbar";
import ServicesSection from "@/components/section/ServicesSection";
import WelcomeSection from "@/components/section/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
   
    <WelcomeSection/>
    <div>
    <ServicesSection/>
    </div>
    </main>
  );
}
