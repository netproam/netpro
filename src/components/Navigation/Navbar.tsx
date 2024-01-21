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
   <nav className={`absolute  justify-between px-10 py-2 top-0 z-50 flex pt-5 w-full text-current  gap-20 items-center lg:justify-center ${path==="/contact"? "text-slate-800" : "text-slate-100"}`}>
<Link href={"/"}>
<p className={`text-lg brightness-150  text-clip font-bold  ${path==="/contact"? "text-slate-800" : "text-slate-300"}`}>Accueil</p>
</Link>
<NavigationMenu className={`gap-20 hidden lg:flex z-50 text-lg brightness-150 
text-current font-semibold relative  ${path==="/contact"? "text-slate-800" : "text-slate-300"}`}>


  <NavigationMenuList className={`${path==="/contact"? "text-slate-800" : "text-slate-300"}`}>
    <NavigationMenuItem className="text-current" >
      <NavigationMenuTrigger className="bg-transparent text-current text-lg  font-semibold">Services</NavigationMenuTrigger>
      <NavigationMenuContent className=" flex justify-center">
        <ul
        
        className="flex bg-slate-100 flex-col gap-10 w-[200px] text-current h-40 justify-center items-center ">
        <NavigationMenuLink>Entretien</NavigationMenuLink>
        <NavigationMenuLink >Débarras</NavigationMenuLink>

        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>

  <NavigationMenuItem className="list-none">
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
bg-slate-100  text-slate-800 gap-10">

<div 
className="flex justify-end p-4"
onClick={()=>{
    setIsOpen(false)
}} >
    <IoIosClose size={30}/>
</div>
<ul className="flex flex-col font-semibold gap-4 text-lg pl-4">
<Link href={"/"}>Accueil</Link>

<Link href={"/contact"}>Services</Link>

<Link href={"/contact"}>Contact</Link>
</ul>
</section>}
   </nav>
  )
}
export default Navbar