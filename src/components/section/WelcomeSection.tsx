"use client"
import { useEffect, useState } from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence} from "framer-motion"
import { v4 } from "uuid"
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

const allText=[{title:`Entretien et nettoyage de bureaux et locaux professionnels`,
id:v4(),
sousDescription:`BUREAUX ET LOCAUX PROFESSIONNELS`}
,{
    title:`Entretien et nettoyage de parties communes`,
    id:v4(),
    sousDescription:`COPROPRIÉTÉS `
},{
    title:`Débarrassage pour particulier et professionnels `,

    sousDescription:"Débarras",
    id:v4(),
}
]
const allCompnent=allText.map((e)=>{
return (
    <div className="flex flex-col">
          <h4 className="text-center  text-slate-300 font-semibold tracking-tighter">{e.sousDescription}</h4>
    <h3 className="text-slate-200 text-4xl   leading-relaxed  lg:leading-tight 
    font-semibold tracking-tighter">{e.title}</h3>
    <div className="flex gap-8 justify-center text-lg pt-10">
        <Button className="bg-blue-900 text-slate-100 p-4 rounded-full text-lg">Voir plus</Button>
        <Button className="bg-[#88CBCE] p-4 rounded-full text-lg ">Notre service</Button>

    </div>
    </div>
)
})
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
<AnimatePresence>
{isChangingImage===0?<motion.img 
 
key={"firstImg"}

className="object-center  absolute w-full h-full  brightness-50 " 
src={allImageData[isChangingImage]}/>
: isChangingImage===1? 
<motion.img 

key={"secondImg"}

className="object-center  absolute w-full h-full  brightness-50 " 
src={allImageData[isChangingImage]}/> :
isChangingImage===2&&<motion.img 


key={"thirdImg"}


className="object-center  absolute w-full h-full  brightness-50 " 
src={allImageData[isChangingImage]}/>
}
</AnimatePresence>
  <section className="flex flex-col relative z-20 gap-0 text-center ">
  {allCompnent[isChangingImage]}
  </section>
  <div className="grid grid-cols-3 z-50 place-items-center absolute bottom-0 mb-10 w-[3/5] gap-20">
    <div
    onClick={()=>{
        relunchInterval(0)
    }}
    className={`${isChangingImage===0? "bg-white":" bg-[#88CBCE] "} w-4 h-4 p-3  cursor-pointer rounded-full`}>

    </div>
    <div
  
       onClick={()=>{
        relunchInterval(1)
       }}
       className={`${isChangingImage===1? "bg-white":" bg-[#88CBCE] "} w-4 h-4  cursor-pointer p-3 rounded-full`}>

</div>
<div
onClick={()=>{
   relunchInterval(2)
}}
className={`${isChangingImage===2? "bg-white":" bg-[#88CBCE] "} w-4 h-4 p-3 cursor-pointer rounded-full`}>

</div>
  </div>
  </section>
  )
}
export default WelcomeSection