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
const Navbar = () => {
  return (
   <nav className="absolute top-0 z-50 flex pt-5 text-slate-50 w-full  gap-20 items-center justify-center">
<p className="text-xl brightness-150 text-slate-50 font-bold">Accueil</p>

<NavigationMenu className="gap-20 hidden lg:flex z-50 text-xl brightness-150  text-slate-50 font-bold relative">


  <NavigationMenuList>
    <NavigationMenuItem className="" >
      <NavigationMenuTrigger className="bg-transparent text-xl brightness-150 font-bold">Services</NavigationMenuTrigger>
      <NavigationMenuContent className=" flex justify-center">
        <ul
        
        className="flex bg-slate-100 flex-col gap-10 w-[200px] h-40 justify-center items-center ">
        <NavigationMenuLink>Entretien</NavigationMenuLink>
        <NavigationMenuLink >Débarras</NavigationMenuLink>

        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>

  <NavigationMenuItem className="list-none">
  <Link href="/docs" passHref legacyBehavior>
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