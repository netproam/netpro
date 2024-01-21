"use client"
import { Button } from "../ui/button"
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect ,useRef} from "react";
import {useMotionValue,useTransform,animate,motion,useInView}from "framer-motion"
const FourthSection = () => {

    const count = useMotionValue(0)
    const countEmployer = useMotionValue(0)

const rounded = useTransform(count, latest => Math.round(latest))
const roundedEmpl=useTransform(countEmployer,latest=>Math.round(latest))
const ref = useRef(null)
const isInView = useInView(ref,{once:true})

    useEffect(()=>{
        if(isInView)
        {
 const animation = animate(count, 100, { duration: 3 });
 const animationTest = animate(countEmployer, 20, { duration: 5 });

}
else {
    count.set(0)
    countEmployer.set(0)
}  
   
    },[isInView])
  return (
    <section 
    ref={ref}
    className="h-[600px] py-20 items-center 
    lg:px-10 justify-center gap-20  lg:justify-between bg-[#F0F9F9] w-full flex flex-col lg:flex-row">

<div className="flex flex-col justify-center items-center lg:items-start  w-full gap-4">
<h4 className="text-sm font-semibold">Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-4xl  lg:text-6xl text-center lg:text-start">Des solutions de nettoyages pour tous</h3>
<p>{`Nous sommes en constante croissance`}</p>
<div className="flex gap-20 items-center  ">
<Button className="bg-[#A42503] rounded-full py-6">Nous contacter</Button>
<div className="flex items-center gap-2">
    <div className="w-fit p-2 rounded-full border-2 border-slate-300">
        <TbPlayerPlayFilled size={20}/>
    </div>
    <p className="text-xs font-semibold">{`Video de présentation`}</p>
</div>
</div>
</div>

<div className="flex flex-row lg:flex-col justify-center  lg:justify-between w-full gap-20 lg:gap-10 items-center  ">
    <div className="flex 
     
    flex-col lg:flex-row w-full gap-4 lg:gap-10 items-end justify-end  ">
     <div className="flex flex-col lg:flex-row w-fit lg:w-full items-start">
        <motion.p className="font-semibold lg:w-full   w-fit text-5xl tracking-tighter"><motion.span>{rounded}</motion.span><motion.span className="relative -inset-y-6">+</motion.span></motion.p>
        <div className="flex flex-col  gap-2  pt-8 w-full ">
        <p className="font-bold text-lg">Clients</p>
        <p>Nous ont fais confiances</p>
        </div>
        </div>
    </div>
 
    <div className="flex 
     
     flex-col lg:flex-row w-full gap-4 lg:gap-10 items-end justify-end  ">
      <div className="flex flex-col lg:flex-row w-fit lg:w-full items-start ">
         <motion.p className="font-semibold lg:w-full   w-fit text-5xl tracking-tighter"><motion.span>{countEmployer}</motion.span><motion.span className="relative -inset-y-6">+</motion.span></motion.p>
         <div className="flex flex-col  gap-2  pt-8 w-full ">
         <p className="font-bold text-lg">Employes</p>
         <p>En tout temps disponibles pour convenir à vos besoins</p>
         </div>
         </div>
     </div>
</div>
    </section>
  )
}
export default FourthSection