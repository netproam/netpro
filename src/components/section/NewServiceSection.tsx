"use client"
import {v4} from "uuid"
import { Button } from "../ui/button"
import Link from "next/link"
import {motion } from "framer-motion"

import { MdKeyboardArrowRight } from "react-icons/md";
import { allServices } from "@/data/dataOfTheApp"
import ServiceComponent from "../services/ServiceComponent";
import { useState } from "react";
import MovingSvgComponent from "../SVG/MovingSvgComponent";

const NewServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Découvrez nos services',
    description:`Nous sommes connus pour nos services de qualité car nous allons dans chaque recoin et sommes dans la précision.
    `}]


const [isTextSelected,setIsTextSelected]=useState(0)
const selectionnedTextComponent=allServices[isTextSelected]?.description?.map((e)=>{
    return (
        <div
        key={v4()}
        className="  lg:text-center border-b-[1px] border-slate-400
         lg:h-fit min-h-[160px] lg:rounded-lg relative flex  lg:gap-6
        lg:shadow-md  lg:border-[1px] lg:border-[#4CDAC0]   flex-col p-4 gap-4 " >
             
          <h3 className="text-xl
       bg-clip-text text-transparent bg-gradient-to-r
        from-[#17CCCA] to-emerald-300 

            font-semibold">   {e.title}</h3>
           <p className="text-sm lg:text-base">  {e.description}</p>
            </div>

    )
})
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
          {/* <div className="text-current">
        <MovingSvgComponent isSelected={i===isTextSelected}/>
        </div> */}
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
                  {/* <div className="text-current">
                  <MovingSvgComponent isSelected={i===isTextSelected}/>
                </div> */}
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


<div className=" grid grid-cols-3 lg:grid-cols-6  px-4 gap-6 gap  gap-y-0 lg:gap-10  lg:px-10
 w-full place-items-center  relative   ">
{allDataDisplay}
</div>

</div>


</div>
<div className="flex flex-col w-full h-full gap-2  ">
<h2 className="text-4xl 

bg-clip-text text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300 

lg:text-4xl  text-center pt-8 pb-4 tracking-tighter font-stolzl">{allServices[isTextSelected]?.titre}</h2>
<div className=" flex flex-col  lg:grid lg:grid-cols-3 items-center justify-between 
 
 
  
  lg:px-10  w-full gap-10  ">

{selectionnedTextComponent}

</div>
<Link  href={"/services/entretien"}

className="w-fit relative px-10  bg-gradient-to-r from-[#17CCCA] to-emerald-300 
 relative self-center  mt-4 py-3 rounded-full  text-white font-semibold hover:bg-slate-200">{`Découvrir`}
<span className="absolute right-3"><MdKeyboardArrowRight  className="" size={20}/></span></Link>
</div>


   </section>
  )
}
export default NewServicesSection