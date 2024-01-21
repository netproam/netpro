"use client"
import { Button } from "../ui/button"
import { TbPlayerPlayFilled } from "react-icons/tb";

const FourthSection = () => {
  return (
    <section className="h-[500px] items-center px-10 justify-between bg-[#F0F9F9] w-full flex">

<div className="flex flex-col justify-center  w-full gap-4">
<h4>Ce que nous apportons</h4>
<h3 className="font-semibold tracking-tighter text-5xl">Des solutions de netoyages pour les entreprises</h3>
<p>{`Nous sommes en constante croissance`}</p>
<div className="flex gap-20 items-center  ">
<Button className="bg-[#A42503] rounded-full py-6">Nous contacter</Button>
<div className="flex items-center gap-2">
    <div className="w-fit p-2 rounded-full border-2 border-slate-300">
        <TbPlayerPlayFilled size={20}/>
    </div>
    <p className="text-xs font-semibold">{`Video de présentation`}</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between w-full gap-10 ">
    <div className="flex w-full gap-10 items-center ">
        <p className="font-semibold text-5xl tracking-tighter">100+</p>
        <p className="font-bold text-lg">Clients</p>
    </div>
    <div className="flex w-full gap-20 items-center">
        <p className="font-semibold text-5xl tracking-tighter"> 2000</p>
        <p className="font-bold text-lg ">Employées</p>

    </div>
</div>
    </section>
  )
}
export default FourthSection