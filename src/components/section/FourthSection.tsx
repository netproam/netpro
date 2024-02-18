"use client"
import { Button } from "../ui/button"
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect ,useRef} from "react";
import {useMotionValue,useTransform,animate,motion,useInView}from "framer-motion"
import EstimationForm from "../forms/EstimationForm";
import { DialogEstimation } from "../Navigation/DialogEstimation";
const FourthSection = () => {

    const count = useMotionValue(0)
    const countEmployer = useMotionValue(0)

const rounded = useTransform(count, latest => Math.round(latest))
const roundedEmpl=useTransform(countEmployer,latest=>Math.round(latest))
const ref = useRef(null)
const isInView = useInView(ref,{once:true,amount:0.4})

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
    className="h-fit py-8 items-center  px-4  lg:py-20 lg:flex-row
    lg:px-10 justify-center gap-20  lg:justify-between    w-full flex flex-col ">

<div className="flex flex-col lg:px-8 justify-center items-center lg:items-start  order-1  w-full gap-10">
<div className="flex flex-col  items-center justify-center lg:items-start ">
<h4 className="text-sm font-semibold text-center pl-1 leading-[12px] text-slate-400 lg:text-start">Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-3xl pb-2 lg:pt-2 lg:w-fit  
 bg-clip-text text-transparent pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 
  lg:text-5xl   text-center lg:text-start ">{`Une équipe méticuleuse`}</h3>
<p className=" text-sm lg:text-base pt-1 text-center lg:text-start ">{`Nous sommes à votre écoute pour vous fournir des solutions personalisées et adaptées pour libérer votre temps. `}</p>
</div>

{/**Version mobile */}
<section className="w-full flex   items-center justify-center lg:hidden  px-4 gap-4">
    <div className="w-full flex  justify-center lg:justify-end lg:p-4">
<div className="w-fit lg:hidden   justify-start items-center
 lg:w-full  lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-5xl  lg:hidden tracking-tighter w-fit relative 
     bg-clip-text text-transparent pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 
    
    "><motion.span>{rounded}</motion.span>
    <motion.span className="-inset-y-4 absolute w-fit   bg-clip-text text-transparent pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300  ">+</motion.span>
    </motion.p>

        <h3 className="font-semibold text-base text-start relative pt-2 ">Clients</h3>
    </div>

    </div>
{/* 
    <div className="w-full flex justify-center  ">
    <div className="w-full justify-center text-center  items-center
    lg:w-full gap-0 lg:gap-0 flex flex-col  lg:self-start relative ">
    <motion.p className="font-semibold text-5xl
    
    lg:hidden tracking-tighter w-fit 
    bg-clip-text text-transparent pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 
    "><motion.span>{roundedEmpl}</motion.span>
    
    </motion.p>

        <h3 className="font-semibold text-base text-start relative pt-2  ">{`Employés`}</h3>
    </div>
    </div> */}


    </section>


<div className="flex gap-10 pb-8  flex-col lg:flex-row  lg:gap-20 items-center  lg:py-0 lg:pt0 ">
<DialogEstimation styleBtn=" text-slate-100 bg-gradient-to-r from-[#17CCCA] to-emerald-300 "/>
<div className="flex items-center gap-2">
    <div className="w-fit p-2 rounded-full border-2 border-slate-300">
        <TbPlayerPlayFilled size={20}/>
    </div>
    <p className="text-xs font-semibold">{`Video de présentation`}</p>
</div>
</div>
</div>

{/**`version pc` */}

<div className=" px-10 flex flex-row order-1  w-full
 justify-center items-center  gap-0 lg:gap-20 hidden lg:flex">
<div className="flex flex-row  gap-6 lg:gap-2 w-full  justify-start">
    <div className="w-fit flex h-fit flex-col justify-end items-end lg:items-center lg:justify-center ">
    <motion.p className="font-semibold relative  h-fit
     bg-clip-text 
    text-8xl hidden lg:flex tracking-tighter w-fit "><motion.span className="relative
    bg-gradient-to-r from-[#17CCCA] to-emerald-300  text-transparent bg-clip-text
    ">{rounded}
    
    
    </motion.span>
    <motion.span className="-inset-y-10 text-7xl absolute inset-x-40 text-transparent bg-clip-text
    w-fit pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 ">+</motion.span>

    </motion.p>
    <motion.span className="text-black text-2xl lg:visible lg:text-2xl text-center w-fit ">Clients</motion.span>

    </div>
    <div className="w-fit  self-end  gap-4 lg:gap-0 flex flex-col    lg:self-start relative ">
    <motion.p className="font-semibold text-8xl lg:visible lg:w-fit text-center
  
    hidden tracking-tighter w-fit relative "><motion.span className="text-6xl
    bg-clip-text  pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 
    ">{rounded}</motion.span>
    <motion.span className="-inset-y-4 absolute">+</motion.span>

    </motion.p>

    </div>
</div>

{/**deuxieme section */}
{/* <div className="flex flex-col gap-6 lg:gap-0 w-full  justify-end">
    <div className="w-fit flex flex-col justify-end items-end lg:items-start ">
    <motion.p className="font-semibold
     bg-clip-text text-transparent pt-1 bg-gradient-to-r from-[#17CCCA] to-emerald-300 
    text-8xl hidden lg:flex tracking-tighter w-fit "><motion.span>{roundedEmpl}</motion.span></motion.p>
    </div>
 
    <motion.span className="text-black relative  text-2xl lg:visible lg:text-2xl text-center w-fit ">{`Employés`}</motion.span>

</div> */}
</div>
    </section>
  )
}
export default FourthSection