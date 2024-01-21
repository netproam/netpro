"use client"
import {motion,useAnimate} from "framer-motion"
import { useId } from "react"
import {FaArrowRight} from "react-icons/fa"
import {ReactNode} from "react"
interface ServiceComponentProps{
    title:string
    children?: ReactNode; // Add a children prop

}


const ServiceComponent = ({title,children}:ServiceComponentProps) => {
    const [isScope,setIsAnime]=useAnimate()
    const idHmtl=useId()
    console.log(idHmtl)
  return (
   <motion.div  className="flex p-4 flex-col gap-4 lg:p-20"
  onHoverStart={async()=>{
   setIsAnime(`#childrenHolder`,{color:"black"},{duration:1})
setIsAnime(`#containerTest`,{x:[null,0]},{duration:0.5})

// setIsAnime(`#explores`,{display:"flex",opacity:[0,1]},{duration:2})
   }}
   onTapStart={async()=>{
    setIsAnime(`#childrenHolder`,{color:"black"},{duration:1})
 setIsAnime(`#containerTest`,{x:[null,0]},{duration:0.5})
 
 // setIsAnime(`#explores`,{display:"flex",opacity:[0,1]},{duration:2})
    }}
   ref={isScope}
 onHoverEnd={()=>{
    setIsAnime(`#childrenHolder`,{color:"#88CBCE"},{duration:1})
    setIsAnime(`#containerTest`,{x:[null,-100]},{duration:0.5})


}}

  >
<h2 className="font-semibold text-lg">{title}</h2>
<div style={{color:"#88CBCE"}} id={"childrenHolder"}>
{children}
</div>
<motion.div
layout
className="flex justify-start overflow-hidden">
    <motion.div
    initial={{x:-100}}
    id="containerTest"

    className="flex gap-4 w-full">
    <motion.p  className="font-semibold text-sm"
  
    id={`explores`}>{`Découvrir plus`}</motion.p>
        <FaArrowRight id="arrowRight" size={20}/>

    </motion.div>
</motion.div>
   </motion.div>
  )
}
export default ServiceComponent