"use client"
import { useEffect, useState ,useRef} from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence,useInView} from "framer-motion"
import { v4 } from "uuid"
import {useMediaQuery} from "react-responsive"
import { isMobile } from "react-device-detect"
import Link from "next/link"
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
const allText=[{title:`Entretien et nettoyage de bureaux et locaux professionnels`,
id:"idTest",
sousDescription:`BUREAUX ET LOCAUX PROFESSIONNELS`}
,{
    title:`Entretien et nettoyage de parties communes`,
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
  className="w-full min-h-screen  overflow-hidden bg-[#F0F9F9] 
    relative flex flex-col  items-center justify-center">
   
{/**mobile */   }

<div className="w-full h-full absolute z-10 ">
<img src="/photo_welcome-min.jpeg" className="object-cover  w-full   brightness-50
    h-full   "/>
</div>
<div className="flex lg:hidden absolute w-screen h-screen bg-black overflow-hidden">


</div>

  <section className="flex flex-col lg:flex-row  z-20 gap-0 text-left  items-center justify-center w-full h-full ">
    <div className="flex flex-col w-full pl-10">
    <div 
    key={allText[0].id}
    className="flex text-left flex-col 
     lg:text-left  lg:justify-center gap-10 lg:gap-0 px-10 lg:px-0">
          <motion.h4 
         animate={{opacity:[0,1],transition:{duration:2,delay:0.75}}}
     
              key={allText[0].id+"subtitle"}
          className="lg:flex    w-fit text-slate-200
           font-semibold ">{allText[0].sousDescription}</motion.h4>
    <motion.h3 key={allText[0].id+"title"}
    animate={{opacity:[0,1],transition:{delay:1.5,duration:3.5}}}
    className="text-slate-100 font-noto text-2xl  lg:w-[600px]  text-left  lg:text-4xl 
   leading-relaxed   lg:leading-tight 
    font-semibold tracking-tighter">{allText[0].title}</motion.h3>
    {/* <motion.div 
                  animate={{opacity:[0,1],transition:{duration:2,delay:2.25}}}

    className="flex gap-8   text-slate-200 text-lg pt-10">
        <Button className="bg-blue-900 p-4 rounded-full font-semibold ">En savoir plus</Button>
        <Button className="bg-[#39a2a7] p-4 rounded-full font-semibold ">Nous contacter</Button>

    </motion.div> */}
    </div>
  </div>
  <div className=" w-full flex justify-center w-full  flex-col h-full items-center gap-2 ">
   
    {/* <div className="rounded-full gap-4  items-center justify-center bg-blue-200 z-20 relative
     text-slate-100 flex flex-col p-10 w-[300px] h-[300px] border-2 border-slate-100">
            <Button> <Link href={'/contact'}>Obtenir une estimation gratuite </Link></Button>
    </div> */}
    <div className="  w-[300px] h-[300px]  z-40 flex 
      relative  lg:bg-blue-400 lg:rounded-full items-center justify-center">
    <Button className="w-fit bg-blue-100 text-slate-800">
        <Link href={'/contact'}>Estimation gratuite</Link>
    </Button>
    </div>


  </div>
  </section>

  </section>
  )
}
export default WelcomeSection