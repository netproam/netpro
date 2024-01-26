"use client"
import {motion, useAnimate} from "framer-motion"
import { useId, useRef } from "react"
import {IoMdQuote} from "react-icons/io"
interface CardTestimonalProps{
id:string
description:string
name:string
}
const CardTestimonialComponent = ({id,name,description}:CardTestimonalProps) => {
   

    const [scope,anime]=useAnimate()
    const idOfIcon=useId()
    const escapedId = idOfIcon.replace(/:/g, '\\:');

  return (
    <motion.div 

            
    key={id} className="flex flex-col  justify-center 
     items-center gap-4
   h-fit
     
    border-none rounded-2xl">
        <motion.div 

onHoverStart={()=>{
    anime(`#momo`,{color:"white"})
}}
onHoverEnd={()=>{
    anime(`#momo`,{color:"#A42503"})

}}
   
         ref={scope}
        className="bg-white flex flex-col    hover:bg-[#A42503] text-black hover:text-white
        shadow-md  
        items-center  gap-16 rounded-xl
          min-w-[400px]  p-10 min-h-[270px]
         w-full ">
            <motion.div className=" text-[#A42503]"
            id={"momo"}
            >
        <IoMdQuote 
        
     size={40}  className=" text-current"/>
</motion.div>
        <p className="text-xl">{description}</p>
        </motion.div>
      <div className="flex flex-col items-center gap-2 ">

        <div className="bg-slate-100 rounded-full h-20 w-20">

        </div>
        <p className="font-semibold text-sm">{name}</p>

      </div>
       
    </motion.div>
  )
}
export default CardTestimonialComponent