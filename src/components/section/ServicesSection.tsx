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
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Des services qui correspondent à vos besoins',
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
        titre:`Déménagement`,description:"the best thing over",svg:<HouseMoveSVG style={{width:"100%",heigth:"100%"}}/>
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
       className="flex  flex-col w-full items-center justify-center"
       key={v4()}>
        
        <ServiceComponent title={e.titre}>
          <div className="text-current">
        {e.svg}
        </div>
        </ServiceComponent>
      
      
        </div>
    })
  return (
   <section className="w-full h-full py-10 lg:py-10 bg-slate-50
    flex flex-col justify-center items-center px-4 lg:px-10  gap-4 lg:gap-10  ">

<div className="flex flex-col lg:flex-row  w-full  justify-center items-center gap-10 lg:gap-0">
    <div className="flex text-sm flex-col w-full gap-4 justify-center ">
    <h2 className="text-center lg:text-start text-2xl lg:w-[700px]
     lg:text-5xl font-semibold  tracking-tighter">{allData[0].soustitre}</h2>

    <h2 className="text-center lg:text-start text-lg lg:w-3/5 
     lg:text-2xl  ">{allData[0].description}</h2>
    </div>
   
</div>


<div className="flex flex-col lg:flex-row  gap-8  h-full w-full lg:gap-2 ">


    <div className="flex flex-col h-full  w-full text-center gap-8 ">
<h2 className=" font-semibold text-left self-center lg:self-center text-xl lg:text-3xl">{`Nettoyages`}</h2>

<div className=" grid grid-cols-3 lg:gap-2  h-full w-full  place-items-center   lg:justify-center
gap-2  divided-none lg:grid-cols-3  ">
{allDataDisplay.slice(0,6)}
</div>
</div>
<div className="flex flex-col w-full h-full   lg:w-1/3 gap-4 ">
<h2 className=" relative  font-semibold text-xl lg:text-3xl self-center lg:self-center">{`Débarras`}</h2>
<div className=" grid grid-cols-2  pt-4 lg:pt-0  lg:justify-center w-full 
gap-2  divided-none lg:flex lg:flex-col lg:items-center h-full place-items-center ">
{allDataDisplay.slice(6)}
</div>
</div>
</div>
   </section>
  )
}
export default ServicesSection