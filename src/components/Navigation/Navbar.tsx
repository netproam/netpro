"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,navigationMenuTriggerStyle,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import Link from "next/link"
  import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";
  import { IoMail, IoMenu } from "react-icons/io5";
  import { IoIosClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useAnimate, useMotionValueEvent, useScroll ,motion} from "framer-motion";
import NavMobileMenu from "./NavMobileMenu";
import { DialogEstimation } from "./DialogEstimation";
import Image from "next/image";
const Navbar = () => {
    const path=usePathname()
    const [isOpen,setIsOpen]=useState(false)
    const router=useRouter()
    const {scrollYProgress}=useScroll()
  
const [scope,animate]=useAnimate()

    useMotionValueEvent(scrollYProgress,"change",async(e)=>{
        if(path==="/")
        {
     if(e>0.15)
     {
     }
     else {
        animate(scope.current,{color:"black",backgroundColor:"#f8fafc"})

     }
    }
    else {

    }
    

    })
    useEffect(()=>{
if(path==="/")
{

    animate(scope.current,{color:"black",backgroundColor:"transparent"})

}
else if(path==="/contact")
{
  animate(scope.current,{color:"black",backgroundColor:"#f8fafc"})

 
}
else {
    animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})

}
console.log("slt")
    },[path])
  return (
   <motion.nav 
  ref={scope}
   className={`   w-full   justify-between bg-transparent bg-opacity-50      
   px-8 lg:pl-48 py-10 top-0 z-50 flex   h-16
    text-current  gap-10 items-center 
   ${path==="/"? "fixed text-slate-800  flex  ":"fixed lg:relative  bg-opacity-100 "}`}>
<div
onClick={()=>{
   
    router.push("/")
}}
className=" cursor-pointer left-0 w-fit  relative  flex items-center justify-center">

<Image  alt="logo" src={"/logo.png"}
className=" scale-[80%] lg:scale-[90%]"
width={75} height={75}/>
</div>

<div className={`  w-fit  mr-auto  text-current  
 relative z-50 items-center hidden lg:flex
${path==="/"? " " : " bg-transparent"}
`}>

<NavigationMenu className={`gap-10 hidden   lg:flex z-50 brightness-150  
lg:w-full font-semibold relative   ${path==="/"? "text-current" : "text-slate-800"}`}>


  <NavigationMenuList 
  
  className={` ${path==="/"? "text-current " : " bg-transparent"}`}>
    <NavigationMenuItem className="text-current bg-transparent  " >
        <motion.div ref={scope}>
      <NavigationMenuTrigger
      id={"menutriggerid"}
      className={`bg-transparent  text-sm  font-semibold  text-current`}>
        
        <p  className="text-current"
        
        >SERVICES </p></NavigationMenuTrigger>
        </motion.div>
      <NavigationMenuContent className=" flex justify-center relative z-50  ">
        <ul
        
        className="flex text-md bg-slate-300  relative z-50 flex-col gap-10 w-full
        text-current p-8">
        <Link href="/services/menage" passHref legacyBehavior>
    <NavigationMenuLink className="whitespace-nowrap " >
    {`Entretien Ménagés`}
    </NavigationMenuLink>
    </Link>
        <Link
        href="/services/debarras" passHref legacyBehavior>
    <NavigationMenuLink >
    {`Débarras`}
    </NavigationMenuLink>
  </Link>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>

  <NavigationMenuItem  className="list-none text-base">
  <Link
  onClick={()=>        animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})
} 
  href="/contact" passHref legacyBehavior>
    <NavigationMenuLink   className="text-sm" >
     <p >CONTACT</p>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>




</NavigationMenu>
</div>
<div className="flex gap-4 justify-center items-center   z-30 relative ">
<div className="flex w-fit p-2 lg:py-3 lg:px-5 shadow-md z-30 relative 
rounded-full bg-gradient-to-r  text-clip text-transparent
 border-[1px] cursor-text border-emerald-300 gap-2  items-center justify-center
">
    <a 
    className="pointer-events-auto lg:pointer-events-none p-1 w-fit h-fit self-start"
    href="tel:+33668460402">
<FaPhoneAlt
size={15}
className="text-emerald-400 "/>
</a>
<p className="font-semibold text-sm   hidden  
lg:flex w-fit h-fit  whitespace-nowrap 
 from-[#17CCCA]   to-emerald-400 bg-gradient-to-tr bg-clip-text
" >+33 668 460 402</p>
</div>
<div className="flex w-fit p-2 lg:py-3 lg:px-5 shadow-md 
rounded-full   from-[#17CCCA]   to-emerald-400 bg-gradient-to-tr  lg:hidden

gap-2
items-center justify-center">
    <a 
    href="mailto:sasu.netpros@gmail.com"
    className="pointer-events-auto lg:pointer-events-none p-1"
  >
<IoMail
size={15}
color="rgb(248,250,252)"/>
</a>
<p className="font-semibold text-sm text-slate-100 hidden lg:flex" >sasu.netpros@gmail.com</p>
</div>

<DialogEstimation styleBtn="text-slate-50  
   
   rounded-full py-6   hidden lg:flex
   bg-gradient-to-r from-[#17CCCA] to-emerald-300 "/>


<motion.div 

className=" text-current lg:hidden ">
<NavMobileMenu/>
</motion.div>
</div>

   </motion.nav>
  )
}
export default Navbar