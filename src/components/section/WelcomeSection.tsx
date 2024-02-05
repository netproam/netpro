"use client"
import { useEffect, useState ,useRef} from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence,useInView} from "framer-motion"
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
const allText=[{
id:"idTest",
firstTitle:"L'entretien réinventer",
title:`NET'PROS le choix de la qualité
`,
sousDescription:`car chaque entreprise à ses spécificités, nous vous offrons des services sur mesures, afin
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
  className="w-full h-screen  overflow-hidden
    relative flex flex-col  items-center justify-center">
   
{/**mobile */   }

<div

className="w-full h-full absolute  bg-transparent     ">
<img 

src="/photo_welcome-min.jpeg" 

className="object-cover bg-transparent brightness-[27%]  w-full  backdrop-blur-lg
    h-full   "/>
</div>


  <section className="flex flex-col lg:flex-row  my-auto lg:pt-10
  
  z-20 gap-0 text-left  items-center justify-center w-full h-full  ">
    <div className="flex flex-col   w-full lg:pl-10 h-full  my-auto lg:my-0 relative   items-center justify-center">
    <div 
    key={allText[0].id}
    className="flex text-left flex-col    brightness-95
     lg:text-left  lg:justify-center gap-4 lg:gap-0 px-10 lg:px-0">
     
    <motion.h3
              viewport={{once:true}}

    key={allText[0].id+"title"}
    animate={{opacity:[0,1],transition:{delay:1.5,duration:3.5}}}
    className="   n  lg:w-[600px]  text-left 
t  flex flex-col gap-0
    "><span
    
    className="text-slate-50 font-stolzl text-4xl  order-2   lg:text-4xl 
    leading-none   lg:leading-tight  
     font-semibold tracking-tighter"
    
    >{allText[0].title.split(" ")[0]} </span>
    <span className="text-xs text-slate-300 inline-block font-sans tracking-normal">{
    allText[0].title.split(" ").slice(1).join(" ")}</span></motion.h3>







        <motion.p
                  viewport={{once:true}}

        key={allText[0].id+"description"}
    animate={{opacity:[0,1],transition:{delay:1.5,duration:3.5}}}
    className="text-slate-200  leading-relaxed  pt-4   lg:w-[600px]  text-left  lg:text-lg 
      lg:leading-tight  font-normal">{allText[0].sousDescription}</motion.p>
    {/* <motion.div 
                  animate={{opacity:[0,1],transition:{duration:2,delay:2.25}}}

    className="flex gap-8   text-slate-200 text-lg pt-10">
        <Button className="bg-blue-900 p-4 rounded-full font-semibold ">En savoir plus</Button>
        <Button className="bg-[#39a2a7] p-4 rounded-full font-semibold ">Nous contacter</Button>

    </motion.div> */}
    </div>
  </div>
  <div className=" w-full  flex justify-center 
    flex-col h-fit pb-10 items-center gap-2 ">

    <div className=" w-fit h-fit  my-auto  lg:bg-[#7abebe] lg:bg-opacity-50 p-1 
     lg:w-[300px] lg:h-[300px]  z-40 flex 
      relative  lg:rounded-full  items-center justify-center flex flex-col">
  <div className="  bg-[#7abebe] p-2 px-4 lg:hover:bg-slate-300
  text-slate-100 cursor-pointer
  lg:hover:text-slate-800 duration-150  rounded-full  lg:h-[200px] lg:w-[200px] 
  items-center justify-center flex
  lg:bg-slate-50 w-full lg:bg-opacity-20 py-2 ">
   <DialogEstimation styleBtn="bg-transparent hover:bg-transparent  text-current" />
    </div>
    </div>


  </div>
  </section>

  </section>
  )
}
export default WelcomeSection