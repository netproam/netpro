"use client"
import {motion, useAnimate} from "framer-motion"
import { useId, useRef } from "react"
import {IoMdQuote} from "react-icons/io"
import TriangleSvg from "../../public/SVG/triangle.svg"
interface CardTestimonalProps{
id:string
description:string
name:string
url:string
}
const CardTestimonialComponent = ({id,name,description,url}:CardTestimonalProps) => {
   

    const [scope,anime]=useAnimate()
    const idOfIcon=useId()
    const escapedId = idOfIcon.replace(/:/g, '\\:');
    const [scopeTwo,animeSecond]=useAnimate()
  return (
    <motion.div  transition={{duration:0.25}}


            
 className="flex flex-col  justify-center 
     items-center gap-4 w-full
    relative  
     
    border-none rounded-2xl">

        <motion.div 



   
         ref={scope}
        className="bg-white  p-4 flex flex-col cursor-pointer  
        text-black   justify-center
        shadow-md  select-none  min-h-[100px] lg:min-h-[200px]
        items-center  gap-4 rounded-xl  
       w-[300px] lg:w-[350px]
       ">


        <p id="paragraphe" className=" text-xs lg:text-sm text-left
         font-semibold text-slate-600">{description}</p>
 
        </motion.div>
       
    
       
    </motion.div>
  )
}
export default CardTestimonialComponent