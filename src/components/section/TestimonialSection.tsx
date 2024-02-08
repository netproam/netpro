"use client"

import { v4 } from "uuid"
import { IoMdQuote } from "react-icons/io";
import {motion, useAnimate, useMotionValueEvent, useScroll} from "framer-motion"
import CardTestimonialComponent from "../CardTestimonialComponent";
import { useRef } from "react";
const TestimonialSection = () => {

    const temoign=[{name:"Raphael morticis"
    ,description:"Magnifique compagnie elle m'a permit de multiplier tout",id:v4(),
url:`https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
}
,{name:"Raphael",description:"Magnifique compagnie je la recommande vivement",id:v4()
,url:`https://www.pexels.com/fr-fr/photo/homme-en-chemise-boutonnee-marron-3785079`
},
{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://www.pexels.com/fr-fr/photo/photo-gros-plan-de-femme-avec-manteau-marron-et-haut-gris-733872/`},
{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800`
}
,{name:"Raphael",description:"Magnifique compagnie",id:v4(),
url:`https://www.pexels.com/fr-fr/photo/femme-en-rouge-a-manches-longues-tenant-une-tablette-3772510`}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800`}

]
    const allTemoignages=temoign.map((element)=>{
        return (
          <CardTestimonialComponent
          url={element.url}
          key={element.id} description={element.description}
          id={element.id} name={element.name}/>
        )
    })

    const [scope,animate]=useAnimate()
    const refSect=useRef(null)
    const {scrollXProgress}=useScroll({container:refSect})

const text=`Ils sont + de 2 000 à avoir choisi Net'Pros pour le nettoyage de leur établissement. Ils témoignent.`
const dataTest={
  title :``,
  sousTitle:`pour le nettoyage de leur établissement. Ils `
}

    useMotionValueEvent(scrollXProgress,"change",(scrollP)=>{
      console.log("scrolling")

      if(scrollP<0.05)
      {
        
      }
      else
      {
        animate(scope.current,{pathLength:scrollP})
      }
    })




  return (
    <section
    style={{ scrollbarWidth: "none" }}

    className="flex flex-col h-full   justify-center items-center w-full gap-2 lg:gap-10 py-8 ">
       <div className="flex flex-col">
          <p className=" text-[30px] leading-[40px] lg:text-[50px]  h-full  lg:leading-[48px]
         lg:w-full 
         font-semibold
          text-center   text-[#3C4E5D]">Ils sont
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]">
  {` déjà plus de 100 `}  
  </span>
   {`à avoir choisi Net'Pros`}
          </p>
             <p className=" text-[30px] leading-[40px] lg:text-[50px]     h-full  lg:leading-[48px]
          px-14 lg:px-0  font-sans
          font-semibold 
          text-center   text-[#3C4E5D]">{dataTest.sousTitle} <span className="lg:block">{}</span>{`témoignes.`}</p>
          </div>
   <section
   ref={refSect}
   style={{ scrollbarWidth: "none" }}
   className=" h-[300px] scrollba   relative  bg-gradient-to-b 
  overflow-scroll w-screen 
    flex flex-col gap-2 ">

{/**Version mobile */}

<div

className="  gap-8  lg:gap-16   lg:hidden
 justify-center items-center
pl-4 lg:pl-0 w-max  px-20   lg:px-0  flex  h-full ">

{allTemoignages}

</div>

<div className="w-max lg:flex flex-grow  hidden">

{/**Version pcs */}


<div

className="  gap-8  lg:gap-2  
 justify-center items-center
pl-4 lg:pl-0 w-screen   relative self-center     flex  h-full ">

{allTemoignages.slice(0,3)}

</div>
<div

className="  gap-8  lg:gap-16  
 justify-center items-center
pl-4 lg:pl-0 w-screen  px-20   lg:px-0  flex  h-full ">

{allTemoignages.slice(3,6)}

</div>

</div>

   </section>
   <p className="sticky w-screen  pb-4 ">


<motion.svg className="w-screen" height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 20">
     
     
<motion.path 
          ref={scope}

    d="M10 10 L200 10" // Path representing a line from (10,10) to (200,10)
    strokeWidth={20}
    strokeLinecap="round" // Make the line ends rounded
    stroke="#58B4C3"
    initial={{ pathLength: 0.05 }}
    id="svgline"
  />
    
    </motion.svg>

</p>
   </section>
  )
}
export default TestimonialSection