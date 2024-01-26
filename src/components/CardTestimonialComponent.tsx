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
    <motion.div 

            
 className="flex flex-col  justify-center 
     items-center gap-4
   h-fit relative
     
    border-none rounded-2xl">
        <motion.div 



   
         ref={scope}
        className="bg-white flex flex-col cursor-pointer  
        text-black 
        shadow-md   select-none
        items-center  gap-4 rounded-xl 
          p-10 lg:min-h-[220px] w-[250px]  lg:w-[320px]
       ">
            <motion.div className=" text-[#A42503] f "
            id={"momo"}
            >
        <IoMdQuote 
        
     size={40}  className=" text-current"/>
</motion.div>

        <p id="paragraphe" className="text-sm text-center
         font-semibold text-slate-600">{description}</p>
        <div className="flex flex-col items-center gap-2 pt-4 ">

<div className="bg-slate-800 rounded-full h-20 w-20 relative">
    <img src={url} className="object-cover h-20 w-20 rounded-full absolute "/>
</div>
<p className="font-semibold text-sm">{name}</p>

</div>
        </motion.div>
       
    
       
    </motion.div>
  )
}
export default CardTestimonialComponent