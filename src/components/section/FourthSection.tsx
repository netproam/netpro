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
    className="h-fit py-20 items-center  px-4 
    lg:px-10 justify-center gap-20  lg:justify-between   bg-[#F0F9F9] w-full flex flex-col lg:flex-row">

<div className="flex flex-col lg:px-8 justify-center items-center lg:items-start  w-full gap-10">
<div className="flex flex-col gap-2 ">
<h4 className="text-sm font-semibold text-center lg:text-start">Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-4xl  lg:text-5xl leading-relaxed text-center lg:text-start">Des solutions adaptés à vos besoins</h3>
<p className="pt-8 text-center lg:text-start ">{`Nous sommes à votre écoute pour vous fournir des solutions personalisées et adaptées pour libérer votre temps. `}</p>
</div>

{/**Version mobile */}
<section className="w-full flex items-center justify-center lg:hidden  px-4 gap-4">
    <div className="w-full flex justify-end p-4">
<div className="w-fit lg:hidden 
 self-end lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-3xl lg:text-5xl  lg:hidden tracking-tighter w-fit relative "><motion.span>{rounded}</motion.span>
    <motion.span className="-inset-y-4 absolute">+</motion.span>
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">Clients</h3>
        <p className="">Nous ont fais confiance</p>
    </div>

    </div>

    <div className="w-full flex justify-end">
    <div className="w-fit
    lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-3xl lg:text-5xl  lg:hidden tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span>
    
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">{`Employés`}</h3>
        <p className="">{`Compétant, discret à votre services`}</p>
    </div>
    </div>


    </section>
<div className="flex gap-10 pb-8  flex-col lg:flex-row  lg:gap-20 items-center  lg:py-0 lg:pt0 ">
<Button className="bg-[#A42503] text-white text-md rounded-full  font-semibold py-8 px-6 shadow-lg">Nous contacter</Button>
<div className="flex items-center gap-2">
    <div className="w-fit p-2 rounded-full border-2 border-slate-300">
        <TbPlayerPlayFilled size={20}/>
    </div>
    <p className="text-xs font-semibold">{`Video de présentation`}</p>
</div>
</div>
</div>

<div className="w-full px-10 flex flex-row justify-center items-center lg:flex-col gap-0 lg:gap-10 hidden lg:flex">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full  justify-end">
    <div className="w-full flex flex-col justify-end items-end lg:items-start ">
    <motion.p className="font-semibold relative   text-8xl hidden lg:flex tracking-tighter w-fit "><motion.span className="relative">{rounded}
    
    
    </motion.span>
    <motion.span className="-inset-y-8 text-6xl absolute inset-x-40">+</motion.span>

    </motion.p>
    </div>
    <div className="w-fit  self-end lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-8xl  lg:hidden tracking-tighter w-fit relative "><motion.span>{rounded}</motion.span>
    <motion.span className="-inset-y-4 absolute">+</motion.span>
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">Clients</h3>
        <p className="">Nous ont fais confiance</p>
    </div>
</div>

{/**deuxieme section */}
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full  justify-end">
    <div className="w-full flex flex-col justify-end items-end lg:items-start ">
    <motion.p className="font-semibold text-8xl hidden lg:flex tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span></motion.p>
    </div>
    <div className="w-fit  self-end lg:w-full gap-4 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-5xl  lg:hidden tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span>
    
    </motion.p>

        <h3 className="font-semibold text-lg text-start relative  ">{`Employés`}</h3>
        <p className="">{`Compétant, discret à votre services`}</p>
    </div>
</div>
</div>
    </section>
  )
}
export default FourthSection