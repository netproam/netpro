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

const NewServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Des prestations adaptées',
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
   <section className="  flex flex-col justify-center items-center
   w-full 
    py-4 lg:py-10 bg-slate-white
    px-0    lg:gap-10  ">


 {/**Ceci c'est pour le texte qui s'affiche */}
<div className="flex flex-col h-fit   w-full  justify-center items-center  lg:gap-0 lg:px-10">
    <div className="flex text-sm px-4 text-center lg:px-0 flex-col
     w-full gap-2 justify-center items-center lg:items-start ">
    <h2 className="text-center lg:text-start text-3xl  pt-4 
     lg:text-5xl font-semibold  tracking-tight ">{allData[0].soustitre}</h2>

    <h2 className="text-center lg:text-start  w-4/5 lg:w-3/5 
     lg:text-2xl  ">{allData[0].description}</h2>
    </div>
   
</div>

 {/**Ceci c'est pour les icones */}


<div className="flex flex-col   lg:flex-row h-fit w-full justify-start items-start  lg:gap-2  ">


    <div className="flex flex-col h-full  w-full text-center  gap-2 pt-10 ">


<div className=" grid grid-cols-4 lg:grid-cols-8 gap-y-4 w-full place-items-center lg:place-items-start relative   ">
{allDataDisplay}
</div>

{/* <div className="flex flex-col">
    <h2>Copropriéter</h2>

</div> */}
</div>


</div>



   </section>
  )
}
export default NewServicesSection