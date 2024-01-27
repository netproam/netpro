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
  import { usePathname } from "next/navigation"
import { useState } from "react";
  import { IoMenu } from "react-icons/io5";
  import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const path=usePathname()
    const [isOpen,setIsOpen]=useState(false)
  return (
   <nav className={` mt-6  w-fit bg-[#F0F9F9] bg-opacity-80  rounded-full  justify-between 
   px-8 py-1 top-0 z-50 flex 
    text-current  gap-10 items-center lg:justify-center ${path==="/"? "text-slate-900" : "text-slate-900"}`}>
<Link href={"/"}>
<p className={`text-base brightness-150  text-clip font-bold   ${path==="/"? "text-slate-900" : "text-slate-900"}`}>Accueil</p>
</Link>
<NavigationMenu className={`gap-10 hidden lg:flex z-50 brightness-150 
text-current font-semibold relative   ${path==="/"? "text-slate-900" : "text-slate-900"}`}>


  <NavigationMenuList className={` ${path==="/"? "text-slate-900" : "text-slate-900 bg-transparent"}`}>
    <NavigationMenuItem className="text-current bg-transparent " >
      <NavigationMenuTrigger className="bg-transparent text-current text-base  font-semibold">Services</NavigationMenuTrigger>
      <NavigationMenuContent className=" flex justify-center relative z-50  ">
        <ul
        
        className="flex text-md bg-slate-300  relative z-50 flex-col gap-10 w-fit
        text-current p-8">
        <Link href="/services/menage" passHref legacyBehavior>
    <NavigationMenuLink className="whitespace-nowrap " >
    {`Entretien Ménagés`}
    </NavigationMenuLink>
    </Link>
        <Link href="/services/debaras" passHref legacyBehavior>
    <NavigationMenuLink >
    {`Débarrassage`}
    </NavigationMenuLink>
  </Link>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>

  <NavigationMenuItem className="list-none text-base">
  <Link href="/contact" passHref legacyBehavior>
    <NavigationMenuLink >
      Contact
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
</NavigationMenu>
<div onClick={()=>{
    setIsOpen(true)
}} className="lg:hidden cursor-pointer">
<IoMenu size={30}/>
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
}} href={"/services/debaras"}>{`Debaras`}</Link>

<Link onClick={()=>{
    setIsOpen(false)
}} href={"/contact"}>Contact</Link>
</ul>
</section>}
   </nav>
  )
}
export default Navbar