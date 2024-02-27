"use client"
import { Button } from "../ui/button"
import { MdKeyboardArrowRight } from "react-icons/md"
const thirdSection = () => {
  return (
   <section className="w-full flex p-4  flex-col gap-6 lg:gap-10  ">
  
    <div className="flex flex-col w-full px-2 lg:px-8 gap-4">
        <div className="flex flex-col gap-0  ">
            <p className="text-xs font-semibold  pl-1  text-slate-400 
            ">{"Une approche innovante".toLocaleUpperCase()}</p>
            <h3 className="tracking-tight text-2xl  lg:text-5xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300 ">{`Découvrez nos avant après`}</h3>
            <p className="tracking-normal  text-sm lg:text-lg  font-sans font-light pt-2">{`Avec nous, tout est dans l'ordre peux importe l'état de départ le final sera impécable`}</p>
        </div>
   
    </div>
   
    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full   gap-4 px-2   lg:px-10 lg:gap-10">

        <div className=" ">
        <img className="object-cover rounded-lg w-full lg:h-[375px]" src={
                `/photos/before_1.jpeg`}/>

         
        </div>
        <div className="  ">
        <img className="object-cover rounded-lg w-full lg:h-[375px]"
           src={
            `/photos/after_1.jpeg`}
            />
        </div>
        <div className=" hidden lg:flex">
 <img className="object-cover rounded-lg w-full lg:h-[375px]" 
 src={
    `/photos/before_2.jpeg`}/>

  
 </div>
 <div className="  hidden lg:flex ">
 <img className="object-cover rounded-lg w-full lg:h-[375px]"
   src={
    `/photos/after_2.jpeg`}/>
 </div>

        
    </div> 
    <Button className="w-fit relative px-10  bg-gradient-to-r from-[#17CCCA] to-emerald-300 
 relative self-center  mt-4 py-6 rounded-full  text-white font-semibold hover:bg-slate-200">{`Découvrir`}
<span className="absolute right-3"><MdKeyboardArrowRight  className="" size={20}/></span></Button>
 
   </section>
  )
}
export default thirdSection