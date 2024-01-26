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

onHoverStart={()=>{
    console.log("slt")
    anime(`#momo`,{color:"white"})
    anime(`#paragraphe`,{color:"rgb(241,245,249)"})

    console.log(scopeTwo.current)
    animeSecond(scopeTwo.current,{color:"#A42503"})

}}
onHoverEnd={()=>{
    anime(`#momo`,{color:"#A42503"})
    animeSecond(scopeTwo.current,{color:"rgb(209 213 219)"})
    anime(`#paragraphe`,{color:"rgb(71,85,105)"})

   


}}

onTouchStart={()=>{
    console.log("slt")
    anime(`#momo`,{color:"white"})
    anime(`#paragraphe`,{color:"rgb(241,245,249)"})

    console.log(scopeTwo.current)
    animeSecond(scopeTwo.current,{color:"#A42503"})

}}
onTouchEnd={()=>{
    anime(`#momo`,{color:"#A42503"})
    animeSecond(scopeTwo.current,{color:"rgb(209 213 219)"})
    anime(`#paragraphe`,{color:"rgb(71,85,105)"})

   


}}
   
         ref={scope}
        className="bg-white flex flex-col cursor-pointer  
          hover:bg-[#A42503] text-black hover:text-white
        shadow-md  
        items-center  gap-4 rounded-xl 
          p-10 min-h-[220px] w-[320px]
       ">
            <motion.div className=" text-[#A42503] f "
            id={"momo"}
            >
        <IoMdQuote 
        
     size={40}  className=" text-current"/>
</motion.div>

        <p id="paragraphe" className="text-sm text-center
         font-semibold text-slate-600">{description}</p>
      
        </motion.div>
        <motion.div  ref={scopeTwo}
        id={"small"}
        className="absolute  inset-0 w-fit h-fit text-gray-300  bg-transparent
         inset-y-[220px] flex justify-center t  mx-auto z-50">
        <TriangleSvg style={{boxshadow:" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"}} />
        </motion.div>
      <div className="flex flex-col items-center gap-2 pt-4 ">

        <div className="bg-slate-800 rounded-full h-20 w-20 relative">
            <img src={url} className="object-cover h-20 w-20 rounded-full absolute "/>
        </div>
        <p className="font-semibold text-sm">{name}</p>

      </div>
       
    </motion.div>
  )
}
export default CardTestimonialComponent