"use client"
import {v4} from "uuid"
import { Button } from "../ui/button"
import { FaArrowRight } from "react-icons/fa";
import {motion } from "framer-motion"
import YourSvg from '../../../public/cleaning-mop.svg'
import ServiceComponent from "../services/ServiceComponent";

const ServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Ce que nous offrons',
    description:`Notre équipe dédiée met en œuvre des solutions personnalisées pour répondre aux besoins uniques de votre entreprise, assurant un environnement impeccable. Grâce à l'utilisation d'équipements de pointe et de produits de nettoyage de qualité, nous garantissons des résultats exceptionnels. Choisissez la tranquillité d'esprit
    et la propreté professionnelle avec nos services de nettoyage commercial.`}]

    const allServices=[{
        titre:"Debarras",description:"the best thing over"
    },{
        titre:"Debarras",description:"the best thing over"
    },{
        titre:"Debarras",description:"the best thing over"
    },{
        titre:"Debarras",description:"the best thing over"
    }]
    const allDataDisplay=allServices.map((e)=>{
       return <div 
       className="  "
       key={v4()}>
        
        <ServiceComponent title={e.titre}>
        <YourSvg  style={{fill:"currentColor"}}  />
        </ServiceComponent>
      
      
        </div>
    })
  return (
   <section className="w-full h-screen bg-[#F0F9F9]
    flex flex-col justify-center items-center  gap-10  px-10">

<div className="flex justify-between">
    <div className="flex text-sm flex-col w-full gap-4">
    <h4 className="font-semibold">{allData[0].soustitre}</h4>
    <h2 className="text-6xl font-semibold  tracking-tighter">{allData[0].titre}</h2>
    </div>
    <div className="flex flex-col w-full justify-center">
       <p className="leading-relaxed "> {allData[0].description}</p>
    </div>
</div>
<div>

</div>
<div className=" grid grid-cols-2 lg:flex divide-x-[1px] divide-slate-300 ">
{allDataDisplay}
</div>
   </section>
  )
}
export default ServicesSection