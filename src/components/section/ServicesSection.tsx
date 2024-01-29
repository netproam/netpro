"use client"
import {v4} from "uuid"
import { Button } from "../ui/button"
import { FaArrowRight } from "react-icons/fa";
import {motion } from "framer-motion"
import YourSvg from '../../../public/cleaning-mop.svg'
import MovinSvg from "../../../public/SVG/moving.svg"
import DesinfectSVG from "../../../public/SVG/sanitaze.svg"
import GlovesSVG from "../../../public/SVG/cleaning-gloves.svg"
import OfficeSVG from "../../../public/SVG/office.svg"
import CoproprieteSVG from "../../../public/SVG/copropriete.svg"
import HouseMoveSVG from "../../../public/SVG/housemoving.svg"
import ParkingSVG from "../../../public/SVG/parking.svg"
import StoreSVG from "../../../public/SVG/commerce.svg"
import DecapSVG from "../../../public/SVG/decapage.svg"
import CommunSVG from "../../../public/SVG/partiecommune.svg"

import ServiceComponent from "../services/ServiceComponent";

const ServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Ce que nous offrons',
    description:`Nous sommes connus pour nos services de qualité car nous allons dans chaque recoin et sommes dans la précision.
    `}]

    const allServices=[{
       titre:`Parties communes`,svg:<CommunSVG style={{width:"100%",heigth:"100%"}}  />
    },{
        titre:`Copropriétés`,description:"Désinfection",svg:<CoproprieteSVG style={{width:"100%",heigth:"100%"}}/>
    },{
        titre:`⁠⁠Bureaux`,description:"the best thing over",svg:<OfficeSVG style={{width:"100%",heigth:"100%"}}/>
    },{
        titre:`Commerce`,description:"the best thing over",svg:<StoreSVG style={{width:"100%",heigth:"100%"}}/>
    },{
        titre:`Parking`,description:"the best thing over",svg:<ParkingSVG style={{width:"100%",heigth:"100%"}}/>
    },
    {
        titre:`Déménagement `,description:"the best thing over",svg:<HouseMoveSVG style={{width:"100%",heigth:"100%"}}/>
    },

    {
        titre:`⁠⁠Décapage des sols`,description:"the best thing over",svg:<DecapSVG style={{width:"100%",heigth:"100%"}}/>
    },
    {
        titre:`Débarras`,description:"the best thing over",svg:<MovinSvg style={{width:"100%",heigth:"100%"}}/>
    }


]
    const allDataDisplay=allServices.map((e)=>{
       return <div 
       className="flex  flex-col w-full justify-start"
       key={v4()}>
        
        <ServiceComponent title={e.titre}>
          <div className="text-current">
        {e.svg}
        </div>
        </ServiceComponent>
      
      
        </div>
    })
  return (
   <section className="w-screen h-fit bg-[#F0F9F9] py-10 lg:py-20
    flex flex-col justify-center items-center  gap-10 lg:gap-20  lg:px-10">

<div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
    <div className="flex text-sm flex-col w-full gap-4">
    <h4 className="font-semibold text-center lg:text-start">{allData[0].soustitre}</h4>
    <h2 className="text-center text-4xl  lg:text-start lg:text-6xl font-semibold  tracking-tighter">{allData[0].titre}</h2>
    </div>
    <div className="flex flex-col w-full justify-center items-center">
       <p className="leading-relaxed w-4/5   text-center lg:text-start"> {allData[0].description}</p>
    </div>
</div>
<div>

</div>
<h2 className=" font-semibold text-5xl">{`Nettoyages`}</h2>

<div className=" grid grid-cols-3 lg:gap-10    w-screen lg:justify-center
gap-2  divided-none lg:grid-cols-3 lg:divide-x-[1px] divide-slate-300 ">
{allDataDisplay.slice(0,6)}
</div>
<h2 className=" relative  font-semibold text-5xl">{`Débarras`}</h2>
<div className=" grid grid-cols-2       w-screen lg:justify-center
gap-2  lg:gap-0 divided-none lg:grid-cols-2 place-items-center lg:divide-x-[1px] divide-slate-300 ">
{allDataDisplay.slice(6)}
</div>
   </section>
  )
}
export default ServicesSection