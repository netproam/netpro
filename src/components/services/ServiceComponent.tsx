"use client"
import {motion,useAnimate} from "framer-motion"
import { useId, useState } from "react"
import {FaArrowRight} from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import {ReactNode} from "react"
interface ServiceComponentProps{
    title:string
    children?: ReactNode; // Add a children prop

}


const ServiceComponent = ({title,children}:ServiceComponentProps) => {
    const [isScope,setIsAnime]=useAnimate()
    const idHmtl=useId()
    console.log(idHmtl)
    const [isTouched,setIsTouched]=useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })
console.log(isTabletOrMobile)
  return (
   <motion.div  className="flex  
    flex-col gap-4 cursor-pointer  items-center 
    justify-center lg:items-center lg:justify-start w-full"
  onHoverStart={async()=>{
   setIsAnime(`#childrenHolder`,{color:"black"},{duration:1})
setIsAnime(`#containerTest`,{x:[null,0]},{duration:0.5})

// setIsAnime(`#explores`,{display:"flex",opacity:[0,1]},{duration:2})
   }}
   onTapStart={async()=>{
   
    if(isTouched===false)
    {
   setIsAnime(`#childrenHolder`,{color:"black"},{duration:1})
setIsAnime(`#containerTest`,{x:[null,0]},{duration:0.5})
setIsTouched(true)
}
else {
    setIsAnime(`#childrenHolder`,{color:"#88CBCE"},{duration:1})
    setIsAnime(`#containerTest`,{x:[0,-100]},{duration:0.5})
    setIsTouched(false)
}

    }}
   ref={isScope}
 onHoverEnd={()=>{
    setIsAnime(`#childrenHolder`,{color:"#88CBCE"},{duration:1})
    setIsAnime(`#containerTest`,{x:[null,-100]},{duration:0.5})


}}

  >
    <div  className={`text-[#88CBCE] lg:justify-start 
     w-20 lg:w-fit  flex items-center justify-center `} id={"childrenHolder"}>
{children}
</div>
<h2 className="font-semibold  whitespace-nowrap  self-center  ">{title}</h2>

<motion.div
layout
className="flex justify-start  overflow-hidden ">
    <motion.div
    initial={{x:-100}}
    id="containerTest"

    className="flex gap-4 w-full relative z-50 ">
    <motion.p  className="font-semibold text-xs lg:text-sm  whitespace-nowrap"
  
    id={`explores`}>{`Découvrir plus`}</motion.p>
        <FaArrowRight id="arrowRight" size={15} className="relative inset-x-3"/>

    </motion.div>
</motion.div>
   </motion.div>
  )
}
export default ServiceComponent