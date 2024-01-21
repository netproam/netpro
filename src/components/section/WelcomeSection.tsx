"use client"
import { useEffect, useState } from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion } from "framer-motion"
const WelcomeSection = () => {
const [isChangingImage,setIsChangingImage]=useState(0)
const [isInterValId,setIsIntervalId]=useState<NodeJS.Timeout>()
const allImageData=["https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
`https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800`
,`https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`]


    useEffect(()=>{
        let clearInterValId=setInterval(()=>{
            setIsChangingImage(e=>{
                
                if(e<2)
                {
                    return e+1
                }
            
            
            else {
                return 0
            }
        })
        
    },5000)
    setIsIntervalId(clearInterValId)
    return ()=>{
        clearInterval(clearInterValId)
    }
},[])

function relunchInterval(e:number)
{
    clearInterval(isInterValId)
    setIsChangingImage(e)
    const intervalIdRelunch=setInterval(()=>{
        setIsChangingImage(e=>{
                
            if(e<2)
            {
                return e+1
            }
        
        
        else {
            return 0
        }
    })
    },5000)
    setIsIntervalId(intervalIdRelunch)

}
  return (
  <section className="w-screen  h-screen relative flex flex-col  items-center justify-center">
   
    <Navbar/>

<motion.img 

className="object-center  absolute w-full h-full  brightness-75 " 
src={allImageData[isChangingImage]}/>
  
  <section className="flex flex-col relative z-50 gap-8 text-center ">
    <h4 className="text-center text-lg text-slate-100">professionel cleanning</h4>
    <h3 className="text-slate-50 text-5xl lg:text-8xl  leading-relaxed lg:leading-tight font-semibold tracking-tighter">Commercial Cleaning</h3>
    <div className="flex gap-8 justify-center text-lg">
        <Button className="bg-blue-900 text-slate-100 px-4 rounded-full text-lg">Voir plus</Button>
        <Button className="bg-[#88CBCE] p-4 rounded-full text-lg ">Notre service</Button>

    </div>
  </section>
  <div className="grid grid-cols-3 z-50 place-items-center absolute bottom-0 mb-10 w-[3/5] gap-20">
    <div
    onClick={()=>{
        relunchInterval(0)
    }}
    className={`${isChangingImage===0? "bg-white":" bg-[#88CBCE] "} w-4 h-4 rounded-full`}>

    </div>
    <div
  
       onClick={()=>{
        relunchInterval(1)
       }}
       className={`${isChangingImage===1? "bg-white":" bg-[#88CBCE] "} w-4 h-4 rounded-full`}>

</div>
<div
onClick={()=>{
   relunchInterval(2)
}}
className={`${isChangingImage===2? "bg-white":" bg-[#88CBCE] "} w-4 h-4 rounded-full`}>

</div>
  </div>
  </section>
  )
}
export default WelcomeSection