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
import { MdKeyboardArrowRight } from "react-icons/md";

import ServiceComponent from "../services/ServiceComponent";
import { useState } from "react";
import MovingSvgComponent from "../SVG/MovingSvgComponent";
import CommunSvgComponent from "../SVG/CommunSvgComponent";

const NewServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Découvrez nos services',
    description:`Nous sommes connus pour nos services de qualité car nous allons dans chaque recoin et sommes dans la précision.
    `}]

    const allServices=[{id:v4(),
       titre:`Espace`,svg:<CommunSVG style={{width:"100%",heigth:"100%"}}  />
    },{id:v4(),
        titre:`Copropriétés`,description:"Désinfection",svg:<CoproprieteSVG style={{width:"100%",heigth:"100%"}}/>
    },{id:v4(),
        titre:`⁠⁠Bureaux`,description:"the best thing over",svg:<OfficeSVG style={{width:"100%",heigth:"100%"}}/>
    },{id:v4(),
        titre:`Commerce`,description:"the best thing over",svg:<StoreSVG style={{width:"100%",heigth:"100%"}}/>
    },{id:v4(),
        titre:`Parking`,description:"the best thing over",svg:<ParkingSVG style={{width:"100%",heigth:"100%"}}/>
    },
    {id:v4(),
        titre:`Déménagement`,description:"the best thing over",svg:<HouseMoveSVG style={{width:"100%",heigth:"100%"}}/>
    },

    {id:v4(),
        titre:`⁠⁠Décapage`,description:"the best thing over"
    },
    {id:v4(),
        titre:`Débarras`,description:"the best thing over",
    }


]
const [isTextSelected,setIsTextSelected]=useState(0)
const selectionnedText=allServices[isTextSelected]
    const allDataDisplay=allServices.map((e,i)=>{

        switch(e.titre)
        {
            case "Débarras" :
       return(
        <div 

       onClick={()=>setIsTextSelected(i)}
       className="flex  flex-col w-full items-center justify-center"
       key={v4()}>
        
        <ServiceComponent
        isSelected={i===isTextSelected}
        title={e.titre}>
          <div className="text-current">
        <MovingSvgComponent isSelected={i===isTextSelected}/>
        </div>
        </ServiceComponent>
      
      
        </div>)
        break;
        default:
            return(
                <div 
        
               onClick={()=>setIsTextSelected(i)}
               className="flex  flex-col w-full items-center justify-center"
               key={v4()}>
                
                <ServiceComponent
                isSelected={i===isTextSelected}
                title={e.titre}>
                  <div className="text-current">
                  <MovingSvgComponent isSelected={i===isTextSelected}/>
                </div>
                </ServiceComponent>
              
              
                </div>)
        }
    })
  return (
   <section className="  flex flex-col justify-center items-center
   w-full  h-full  relative
    py-4 lg:py-10 
    px-0   ">


 {/**Ceci c'est pour le texte qui s'affiche */}
<div className="flex flex-col h-fit   w-full  justify-center items-center  lg:gap-0 lg:px-10">
    <div className="flex text-sm px-4  text-start lg:px-0 flex-col
     w-full gap-2 justify-center items-center lg:items-start ">
    <h2 className="text-start  w-full text-xl  pt-2  text-slate-400
     lg:text-2xl font-semibold  tracking-tight ">{allData[0].soustitre}</h2>

    </div>
   
</div>

 {/**Ceci c'est pour les icones */}


<div className="flex flex-col   
 lg:flex-row  w-full justify-start items-start  lg:gap-2  ">


    <div className="flex flex-col h-full  w-full text-center  gap-2 pt-4 lg:pt-10 ">


<div className=" grid grid-cols-4 lg:grid-cols-8 gap-y-4 w-full place-items-center lg:place-items-start relative   ">
{allDataDisplay}
</div>

</div>


</div>
<div className="flex flex-col w-full h-full gap-2  ">
<h2 className="text-3xl 

bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]

lg:text-4xl  text-center pt-8 pb-4 tracking-tighter font-stolzl">{selectionnedText.titre}</h2>
<div className=" grid grid-cols-2 items-center justify-between  px-4  lg:px-10  w-full gap-10 lg:grid-cols-3 ">
<div className=" h-[125px] lg:h-[200px] rounded-lg relative flex bg-gradient-to-tr from-[#04A9F4] opacity-70 to-[#17CCCA]">
     
    </div>
    <div className=" h-[125px] lg:h-[200px] rounded-lg relative flex bg-gradient-to-tr from-[#04A9F4] opacity-70 to-[#17CCCA]">
        
    </div>
    <div className=" h-[125px] lg:h-[200px] rounded-lg relative flex bg-gradient-to-tr from-[#04A9F4] opacity-70 to-[#17CCCA]">

   
    </div>

</div>
<Button className="w-fit relative px-10
 relative self-center  mt-4 py-6 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-200">{`Découvrir`}
<span className="absolute right-3"><MdKeyboardArrowRight  className="" size={20}/></span></Button>
</div>


   </section>
  )
}
export default NewServicesSection