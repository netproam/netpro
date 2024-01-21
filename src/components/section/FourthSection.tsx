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
 const animationTest = animate(countEmployer, 2000, { duration: 5 });

}
else {
    count.set(0)
    countEmployer.set(0)
}  
   
    },[isInView])
  return (
    <section 
    ref={ref}
    className="h-[600px] py-20 items-center lg:px-10 justify-center gap-20  lg:justify-between bg-[#F0F9F9] w-full flex flex-col lg:flex-row">

<div className="flex flex-col justify-center items-center lg:items-start  w-full gap-10">
<h4>Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-4xl lg:text-5xl text-center lg:text-start">Des solutions de netoyages pour les entreprises</h3>
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

<div className="flex flex-row lg:flex-col justify-between w-full gap-10 ">
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-10 items-center ">
        <motion.p className="font-semibold text-5xl tracking-tighter"><motion.span>{rounded}</motion.span><motion.span>+</motion.span></motion.p>
        <p className="font-bold text-lg">Clients</p>
    </div>
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-10 items-center">
        <motion.p className="font-semibold text-5xl tracking-tighter"> <motion.span>{roundedEmpl}</motion.span></motion.p>
        <p className="font-bold text-lg ">Employées</p>

    </div>
</div>
    </section>
  )
}
export default FourthSection