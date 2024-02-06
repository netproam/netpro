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

const Navbar = () => {
    const path=usePathname()
    const [isOpen,setIsOpen]=useState(false)
    const router=useRouter()
    const {scrollYProgress}=useScroll()
  
const [scope,animate]=useAnimate()

    useMotionValueEvent(scrollYProgress,"change",async(e)=>{
        if(path==="/")
        {
     if(e>0.2)
     {
        animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})
     }
     else {
        animate(scope.current,{color:"white",backgroundColor:"transparent"})

     }
    }
    else {
        animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})

    }
    

    })
    useEffect(()=>{
if(path==="/")
{

    animate(scope.current,{color:"white",backgroundColor:"transparent"})

}
else {
    animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})

}
console.log("slt")
    },[path])
  return (
   <motion.nav 
  ref={scope}
   className={`   w-full   justify-between bg-[#F0F9F9]     bg-opacity-50     
   px-8 lg:pl-48 py-10 top-0 z-50 flex   h-16
    text-current  gap-10 items-center 
   ${path==="/"? "fixed text-slate-100  flex  ":"fixed lg:relative  bg-opacity-100 "}`}>
<div
onClick={()=>{
    animate(scope.current,{color:"white",backgroundColor:"transparent"})
    router.push("/")
}}
className=" cursor-pointer left-0 w-fit  relative ">

<img  className=""
width={70}
src="/logo.png"/>
</div>

<div className={`  w-fit  mr-auto  text-current   relative z-50 items-center hidden lg:flex
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
        <Link onClick={()=>        animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})
} href="/services/menage" passHref legacyBehavior>
    <NavigationMenuLink className="whitespace-nowrap " >
    {`Entretien Ménagés`}
    </NavigationMenuLink>
    </Link>
        <Link
        onClick={()=>        animate(scope.current,{color:"black",backgroundColor:"#F0F9F9"})
    } 
        href="/services/debaras" passHref legacyBehavior>
    <NavigationMenuLink >
    {`Débarras`}
    </NavigationMenuLink>
  </Link>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
<NavigationMenuItem className="list-none text-base">
  <Link
      
  href="/contact" passHref legacyBehavior>
    <NavigationMenuLink

    className="text-sm">
     <p  >FAQ</p>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
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
<div className="flex gap-4 justify-center items-center   ">
<div className="flex w-fit p-2 lg:py-3 lg:px-5 shadow-md
rounded-full bg-[#88CBCE]   gap-2  items-center justify-center
">
    <a 
    className="pointer-events-auto lg:pointer-events-none p-1 w-fit h-fit self-start"
    href="tel:+33651605207">
<FaPhoneAlt
size={15}
className="text-slate-100"/>
</a>
<p className="font-semibold text-sm text-slate-100  hidden  
lg:flex w-fit h-fit  whitespace-nowrap " >+33 651 605 207</p>
</div>
<div className="flex w-fit p-2 lg:py-3 lg:px-5 shadow-md
rounded-full bg-[#0E2954]  gap-2
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


<motion.div 

className=" text-current lg:hidden ">
<NavMobileMenu/>
</motion.div>
</div>

   </motion.nav>
  )
}
export default Navbar