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
    className="h-fit py-20 items-center 
    lg:px-10 justify-center gap-20  lg:justify-between bg-[#F0F9F9] w-full flex flex-col lg:flex-row">

<div className="flex flex-col justify-center items-center lg:items-start  w-full gap-10">
<div className="flex flex-col gap-2">
<h4 className="text-sm font-semibold">Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-4xl  lg:text-6xl text-center lg:text-start">Des solutions de nettoyages pour tous</h3>
<p className="pt-4">{`Nous sommes en constante croissance`}</p>
</div>
<div className="flex gap-10 py-8   lg:gap-20 items-center  lg:py-0 lg:pt0 ">
<Button className="bg-[#A42503] rounded-full py-6">Nous contacter</Button>
<div className="flex items-center gap-2">
    <div className="w-fit p-2 rounded-full border-2 border-slate-300">
        <TbPlayerPlayFilled size={20}/>
    </div>
    <p className="text-xs font-semibold">{`Video de présentation`}</p>
</div>
</div>
</div>

<div className="w-full flex flex-row justify-center items-center lg:flex-col gap-20 lg:gap-10">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full  justify-end">
    <div className="w-full flex flex-col justify-end items-end lg:items-start ">
    <motion.p className="font-semibold text-5xl hidden lg:flex tracking-tighter w-fit "><motion.span>{rounded}</motion.span>
    
    <motion.span className="-inset-y-4 relative">+</motion.span>
    </motion.p>
    </div>
    <div className="w-fit  self-end lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-5xl  lg:hidden tracking-tighter w-fit "><motion.span>{rounded}</motion.span>
    <motion.span className="-inset-y-4 relative">+</motion.span>
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">Clients</h3>
        <p className="whitespace-nowrap">Ils nous ont fais confiance</p>
    </div>
</div>

{/**deuxieme section */}
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full  justify-end">
    <div className="w-full flex flex-col justify-end items-end lg:items-start ">
    <motion.p className="font-semibold text-5xl hidden lg:flex tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span></motion.p>
    </div>
    <div className="w-fit  self-end lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-5xl  lg:hidden tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span>
    
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">{`Employés`}</h3>
        <p className="">{`Compétant, discret et efficace à votre services`}</p>
    </div>
</div>
</div>
    </section>
  )
}
export default FourthSection