"use client"
import {motion,useAnimate} from "framer-motion"
import { useId, useState } from "react"
import {FaArrowRight} from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import {ReactNode} from "react"
interface ServiceComponentProps{
    title:string
    isSelected:boolean
    children?: ReactNode; // Add a children prop

}


const ServiceComponent = ({title,children,isSelected}:ServiceComponentProps) => {
    const [isScope,setIsAnime]=useAnimate()
    const idHmtl=useId()
    console.log(idHmtl)
    const [isTouched,setIsTouched]=useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })
console.log(isTabletOrMobile)
  return (
   <motion.div  className="flex   text-center
    flex-col gap-4 cursor-pointer  items-center 
    justify-center lg:items-center lg:justify-start w-full"

   ref={isScope}


  >
    <div  className={`${isSelected? "text-[#88CBCE]" : "text-slate-300"} lg:justify-start 
     w-[45px] lg:w-24  flex items-center justify-center `} id={"childrenHolder"}>
{children}
</div>
<h2 className={` text-xs text-slate-600   ${isSelected? "font-semibold" : ""}  self-center    `}>{title}</h2>

<motion.div
layout
className="flex justify-start  overflow-hidden ">

</motion.div>
   </motion.div>
  )
}
export default ServiceComponent