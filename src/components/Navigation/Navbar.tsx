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
import { useRef, useState } from "react";
  import { IoMail, IoMenu } from "react-icons/io5";
  import { IoIosClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useAnimate, useMotionValueEvent, useScroll ,motion} from "framer-motion";

const Navbar = () => {
    const path=usePathname()
    const [isOpen,setIsOpen]=useState(false)
    const router=useRouter()
    const {scrollYProgress}=useScroll()
    const refNav =useRef<HTMLElement>(null)
    const refServices =useRef<HTMLParagraphElement>(null)
    const refAbout =useRef<HTMLParagraphElement>(null)

    const refContact =useRef<HTMLParagraphElement>(null)
    const refToggle =useRef<HTMLDivElement>(null)

    
const [scope,animate]=useAnimate()

    useMotionValueEvent(scrollYProgress,"change",(e)=>{
        if(path==="/"&&refNav.current&&refAbout.current&&refContact.current&&refServices.current&&refToggle.current)
        {
        if(e>0.1)
        {            
            
            


            console.log(e)
            refNav.current.style.backgroundColor="#F0F9F9"

            refAbout.current.style.color="black"
            refServices.current.style.color="black"
            refToggle.current.style.color="black"

            refContact.current.style.color="black"
            animate(scope.current,{color:"black"})

        }
        else {




            refAbout.current.style.color="white"
            refServices.current.style.color="white"
            refContact.current.style.color="white"
            refNav.current.style.backgroundColor="transparent"
            refToggle.current.style.color="white"
            animate(scope.current,{color:"white"})
        }
    }
    else if(refNav.current&&path!="/"&&refAbout.current&&refServices.current&&refToggle.current&&refContact.current) {
        refNav.current.style.backgroundColor="#F0F9F9"

        refAbout.current.style.color="black"
        refServices.current.style.color="black"
        refToggle.current.style.color="black"

        refContact.current.style.color="black"
    }
    })
    console.log(scrollYProgress.get)
  return (
   <nav 
  ref={refNav}
   className={`   w-full   justify-between     bg-opacity-50     
   px-8 lg:pl-48 py-10 top-0 z-50 flex   h-16
    text-current  gap-10 items-center 
   ${path==="/"? "fixed text-slate-100  flex  ":"fixed lg:relative bg-[#F0F9F9] text-slate-800"}`}>
<div
onClick={()=>{
    router.push("/")
}}
className=" cursor-pointer left-0 w-fit  relative ">

<img  className=""
width={70}
src="/logo.png"/>
</div>

<div className={`  w-fit  mr-auto    relative z-50 items-center hidden lg:flex
${path==="/"? "text-slate-800 " : "text-slate-900 bg-transparent"}
`}>

<NavigationMenu className={`gap-10 hidden   lg:flex z-50 brightness-150  
text-current lg:w-full font-semibold relative   ${path==="/"? "text-slate-100" : "text-slate-900"}`}>


  <NavigationMenuList 
  
  className={` ${path==="/"? "text-slate-100 " : "text-slate-900 bg-transparent"}`}>
    <NavigationMenuItem className="text-current bg-transparent  " >
        <motion.div ref={scope}>
      <NavigationMenuTrigger
      id={"menutriggerid"}
      className={`bg-transparent  text-sm  font-semibold  text-current`}>
        
        <p  className="text-current"ref={refServices}>SERVICES </p></NavigationMenuTrigger>
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
        <Link href="/services/debaras" passHref legacyBehavior>
    <NavigationMenuLink >
    {`Débarras`}
    </NavigationMenuLink>
  </Link>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
<NavigationMenuItem className="list-none text-base">
  <Link href="/contact" passHref legacyBehavior>
    <NavigationMenuLink className="text-sm">
     <p  ref={refAbout}>FAQ</p>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
  <NavigationMenuItem  className="list-none text-base">
  <Link href="/contact" passHref legacyBehavior>
    <NavigationMenuLink   className="text-sm" >
     <p ref={refContact}>CONTACT</p>
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



<div onClick={()=>{
    setIsOpen(true)
}} className={`lg:hidden cursor-pointer ${path==="/"? "text-slate-600" : "text-slate-800"}}`} ref={refToggle}>
<IoMenu size={30} />
</div>
</div>

{isOpen&&<section className="flex flex-col fixed
inset-0 z-50 w-screen h-screen bg-opacity-100
bg-slate-100  text-slate-900 gap-10">

<div 
className="flex justify-end p-4"
onClick={()=>{
    setIsOpen(false)
}} >
    <IoIosClose size={30}/>
</div>
<ul className="flex flex-col font-semibold gap-4 text-lg pl-4">
<Link onClick={()=>{
    setIsOpen(false)
}} href={"/"}>Accueil</Link>

<Link  onClick={()=>{
    setIsOpen(false)
}} href={"/services/menage"}>{`Ménage`}</Link>
<Link onClick={()=>{
    setIsOpen(false)
}} href={"/services/debaras"}>{`Débarras`}</Link>

<Link onClick={()=>{
    setIsOpen(false)
}} href={"/contact"}>Contact</Link>
</ul>
</section>}
   </nav>
  )
}
export default Navbar