"use client"
import { useEffect, useState ,useRef} from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence,useInView, useScroll, useAnimate, useMotionValueEvent} from "framer-motion"
import { v4 } from "uuid"
import {useMediaQuery} from "react-responsive"
import { isMobile } from "react-device-detect"
import Link from "next/link"
import { DialogEstimation } from "../Navigation/DialogEstimation"
const WelcomeSection = () => {
const [isChangingImage,setIsChangingImage]=useState(0)
const [isInterValId,setIsIntervalId]=useState<NodeJS.Timeout>()
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })

const allImageData=[{isDesktop:"https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
isMobile:`https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=800`},{isDesktop:`https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800`

,isMobile:"https://images.pexels.com/photos/4107107/pexels-photo-4107107.jpeg?auto=compress&cs=tinysrgb&w=800"}
,{isDesktop:`https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=ti
nysrgb&w=1260&h=750&dpr=2`,isMobile:"https://images.pexels.com/photos/3287162/pexels-photo-3287162.jpeg?auto=compress&cs=tinysrgb&w=800"}]

const refWelcome=useRef(null)
const isInView=useInView(refWelcome,{amount:0.5})

console.log(isInterValId,isInView)

const {scrollYProgress}=useScroll()
const [scope,anime]=useAnimate()
useMotionValueEvent(scrollYProgress,"change",(scrollProgress)=>{
if(scrollProgress<0.6)
{
  anime(scope.current,{visibility:"visible"})
}
else if(scrollProgress>0.6&&scrollProgress<0.8)
{
  anime(scope.current,{visibility:"hidden"})

}


})
const allText=[{
id:"idTest",
firstTitle:"L'entretien réinventer",
title:`NET'PROS`,
sousTitle:`La compagnie qu'il vous faut`
,
sousDescription:`car chaque entreprise à ses spécificités, nous vous offrons des services sur mesure, afin
que vous n'ayez à payer que pour ceux que vous auriez besoin`}
,{
    title:`Net pros vous offre une collection de services qui seront s'adapter à vos besoins,
    car chaque entreprise à ses spécificités`,
    id:"idtest2b",
    sousDescription:`COPROPRIÉTÉS `
},{
    title:`Débarras pour particulier et professionnels `,

    sousDescription:"Débarras",
    id:"idtest2bbbbb",
}
]

 

  return (
  <section 
  ref={refWelcome}
  className="
 bg-slate-50

  
  w-full h-[700px] lg:h-screen   overflow-hidden
 flex flex-col lg:flex-row  items-center justify-center">
   
{/**mobile */   }


<motion.div 

className="relative -rotate-[35deg]    
z-30    
w-full  order-2 hidden lg:flex flex items-center justify-center">

<motion.div
initial={{opacity:0}}
animate={{opacity:[0,1]}} transition={{duration:3.5,delay:0.75}}
className="w-[675px] 
 h-[325px] 
flex    
 overflow-hidden
 rounded-full  z-30 relative">
<img  

src="/photo_welcome-min.jpeg" 

className="   h-[600px]  inset-0 z-50 object-right w-full  
 rotate-[35deg]   absolute  scale-150      brightness-[85%] 
 "/>
</motion.div>

 




</motion.div>

  <section className="flex flex-col  lg:pl-48   backdrop-md
  
  z-20 gap-0 text-left  items-center justify-center lg:w-[1000px] h-full  ">
    <div className="flex flex-col  
      w-full pl-0  h-full      items-center justify-center">
    <div 
    key={allText[0].id}
    className="flex text-left flex-col   
    
    
    relative     brightness-95
     lg:text-right lg:justify-center  lg:gap-0 px-10 lg:px-0">
     
    <motion.h3
          initial={{opacity:0}}

              viewport={{once:true}}

    key={allText[0].id+"title"}
    animate={{opacity:[0,1],transition:{delay:0.25,duration:isTabletOrMobile? 2.5 :1.75}}}
    className="   bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]
    text-left 
t  flex flex-col lg:gap-4
    "><span
    
    className="


    font-stolzl text-4xl  order-2 lg:order-1  lg:text-6xl
    leading-none    lg:leading-relaxed   
     font-semibold tracking-tighter"
    
    >{allText[0].title.split(" ")[0]} </span>
    <span className="text-xs lg:text-6xl font-stolzl  lg:leading-relaxed tracking-tighter
     h-full
     lg:order-2">{
    allText[0].sousTitle}</span></motion.h3>







        <motion.p
              initial={{opacity:0}}

                  viewport={{once:true}}

        key={allText[0].id+"description"}
    animate={{opacity:[0,1],transition:{delay:isTabletOrMobile? 0.85 :1,duration: isTabletOrMobile? 3: 2}}}
    className="text-slate-800  leading-loose   pt-2  lg:hidden    text-left  lg:text-lg 
      lg:leading-normal  font-normal">{allText[0].sousDescription}</motion.p>




    </div>
    <motion.div 
ref={scope}
    key={"momoDtas"}
      initial={{opacity:0}}
      animate={{opacity:[0,1],y:[100,0]}}
  transition={{ease:"easeInOut",duration:isTabletOrMobile? 1.25 : 1.5,delay: isTabletOrMobile? 1.65 : 1.5}}
  className="  p-2 px-4  lg:p-0  z-30
  text-slate-100 cursor-pointer    w-full lg:w-full 
  lg:hover:text-slate-800 duration-150   fixed 
  items-center justify-center flex  bottom-8 lg:relative  lg:justify-start    lg:pt-16
 bg-transparent py-2 ">
   <DialogEstimation styleBtn="text-slate-50  
   
   rounded-full py-6  
   bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]" />
    </motion.div>
  </div>

  </section>

  </section>
  )
}
export default WelcomeSection