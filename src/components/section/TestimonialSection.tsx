"use client"

import { v4 } from "uuid"
import { IoMdQuote } from "react-icons/io";
import {motion} from "framer-motion"
import CardTestimonialComponent from "../CardTestimonialComponent";
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
          <CardTestimonialComponent description={element.description}
          id={element.id} name={element.name}/>
        )
    })
  return (
   <section className="w-full h-[700px] bg-gradient-to-b
from-[#F0F9F9] to-slate-white overflow-scroll
    flex flex-col gap-2 justify-center items-center">
<p className="font-semibold text-5xl tracking-tighter">Ce que nos clients disent de nous </p>
<div className="flex overflow-x-scroll   gap-20 py-20">
{allTemoignages}
</div>
   </section>
  )
}
export default TestimonialSection