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
const Navbar = () => {
    const path=usePathname()
  return (
   <nav className={`absolute  py-2 top-0 z-50 flex pt-5 w-full text-current  gap-20 items-center justify-center ${path==="/contact"? "text-slate-800" : "text-slate-100"}`}>
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


   </nav>
  )
}
export default Navbar