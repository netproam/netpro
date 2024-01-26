"use client"

import { v4 } from "uuid"
import { IoMdQuote } from "react-icons/io";
import {motion} from "framer-motion"
const TestimonialSection = () => {

    const temoign=[{name:"Raphael",description:"Magnifique compagnie",id:v4()}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()},
{name:"Raphael",description:"Magnifique compagnie",id:v4()},{name:"Raphael",description:"Magnifique compagnie",id:v4()}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()}
]
    const allTemoignages=temoign.map((element)=>{
        return (
            <motion.div 
            
            key={element.id} className="flex flex-col  justify-center 
             items-center gap-4
           h-fit
             
            border-none rounded-2xl">
                <div className="bg-white flex flex-col 
                shadow-md  hover:bg-[#A42503] hover:text-white 
                items-center  gap-16 rounded-xl
                  min-w-[400px]  p-10 min-h-[270px]
                 w-full ">
                <IoMdQuote color="#A42503"  size={40}  className=" text-current"/>
        
                <p className="text-xl">{element.description}</p>
                </div>
              <div className="flex flex-col items-center gap-2 ">

                <div className="bg-white rounded-full h-20 w-20">

                </div>
                <p className="font-semibold text-sm">{element.name}</p>

              </div>
               
            </motion.div>
        )
    })
  return (
   <section className="w-full h-[700px] bg-gradient-to-b
   bg-[#F0F9F9]  overflow-scroll
    flex flex-col gap-2 justify-center items-center">
<p className="font-semibold text-5xl tracking-tighter">Ce que nos clients disent de nous </p>
<div className="flex overflow-x-scroll   gap-20 py-20">
{allTemoignages}
</div>
   </section>
  )
}
export default TestimonialSection