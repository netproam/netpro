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
   <motion.div  className="flex p-4 flex-col gap-4 cursor-pointer  items-center justify-center w-fit"
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
    <div  className={`text-[#88CBCE] w-20 lg:w-28 `} id={"childrenHolder"}>
{children}
</div>
<h2 className="font-semibold  whitespace-nowrap self-center">{title}</h2>

<motion.div
layout
className="flex justify-start overflow-hidden ">
    <motion.div
    initial={{x:-100}}
    id="containerTest"

    className="flex gap-4 w-full ">
    <motion.p  className="font-semibold text-sm  whitespace-nowrap"
  
    id={`explores`}>{`Découvrir plus`}</motion.p>
        <FaArrowRight id="arrowRight" size={20} className="relative"/>

    </motion.div>
</motion.div>
   </motion.div>
  )
}
export default ServiceComponent