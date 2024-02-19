"use client"
import { allQualities } from "@/data/dataOfTheApp"
const SpecificitySection = () => {

    const allQualityComponent=allQualities.map((e)=>{
return (
    <div 
    key={e.id}
    className="flex flex-col gap-2  lg:items-center justify-start lg:text-center">
    <h4 className="font-semibold text-lg lg:text-2xl font-hind">{e.title}
</h4>
    <p className="lg:w-2/3 text-sm font-hind font-light" >
        {e.description}</p>
</div>
)
    })
  return (
   <section className="w-full  flex p-4  flex-col items-center gap-4  ">

    <div className="flex flex-col w-full  lg:px-8 gap-6 lg:gap-12 ">
        <div className="flex flex-col   lg:items-center ">
            <p className="text-xs lg:text-sm  font-semibold  pl-1  text-slate-400 
            ">{"Une approche innovante".toLocaleUpperCase()}</p>
            <h3 className="tracking-tight 
            lg:pb-4 font-hind
            text-2xl lg:text-5xl font-semibold bg-clip-text text-transparent
             bg-gradient-to-r from-[#17CCCA] to-emerald-300 ">{`Ce qui fait notre différence`}</h3>
          
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 text-base font-hind font-light  
        gap-10  ">

    
       
    {allQualityComponent}
       
        </div>
    </div>
    
   </section>
  )
}
export default  SpecificitySection