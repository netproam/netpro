"use client"
import { useEffect, useState ,useRef} from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence,useInView} from "framer-motion"
import { v4 } from "uuid"
import {useMediaQuery} from "react-responsive"
const WelcomeSection = () => {
const [isChangingImage,setIsChangingImage]=useState(0)
const [isInterValId,setIsIntervalId]=useState<NodeJS.Timeout>()
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 604px)' })

const allImageData=[{isDesktop:"https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
isMobile:`https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=800`},{isDesktop:`https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800`

,isMobile:"https://images.pexels.com/photos/4107107/pexels-photo-4107107.jpeg?auto=compress&cs=tinysrgb&w=800"}
,{isDesktop:`https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=ti
nysrgb&w=1260&h=750&dpr=2`,isMobile:"https://images.pexels.com/photos/3287162/pexels-photo-3287162.jpeg?auto=compress&cs=tinysrgb&w=800"}]

const refWelcome=useRef(null)
const isInView=useInView(refWelcome,{amount:0.5})
    useEffect(()=>{
        if(isInView&&isInterValId===undefined)
        {
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
}
else {

}
    return ()=>{
        clearInterval(isInterValId)

    }
},[isInView,isInterValId])

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
    <div 
    key={e.id}
    className="flex flex-col justify-center">
          <motion.h4 
              animate={{opacity:[0,1],transition:{duration:1.5,delay:0.75}}}

          className="text-center hidden lg:flex self-center  text-slate-300
           font-semibold tracking-tighter">{e.sousDescription}</motion.h4>
    <motion.h3
    animate={{opacity:[0,1],transition:{duration:3,delay:1.25}}}
    className="text-slate-200 text-2xl text-center lg:text-4xl   leading-relaxed  lg:leading-tight 
    font-semibold tracking-tighter">{e.title}</motion.h3>
    <motion.div 
                  animate={{opacity:[0,1],transition:{duration:1.75,delay:2}}}

    className="flex gap-8 justify-center text-lg pt-10">
        <Button className="bg-blue-900 text-slate-100 p-4 rounded-full text-lg">Voir plus</Button>
        <Button className="bg-[#88CBCE] p-4 rounded-full text-lg ">Notre service</Button>

    </motion.div>
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
  <section 
  ref={refWelcome}
  className="w-screen  h-screen relative flex flex-col  items-center justify-center">
   
    <Navbar/>
    <div className="flex absolute w-screen h-screen bg-black">

<AnimatePresence>
{isChangingImage===0?<motion.img 
animate={{scale:[1,1.1]}} transition={{duration:1.5}}
 
key={"firstImg"}

className="object-center  relative w-full h-full  brightness-50 " 
src={isTabletOrMobile? allImageData[isChangingImage].isMobile :allImageData[isChangingImage].isDesktop}/>
: isChangingImage===1? 
<motion.img 
animate={{scale:[1,1.1]}} transition={{duration:1.5}}
key={"secondImg"}

className="object-center  relative w-full h-full  brightness-50 " 
src={isTabletOrMobile? allImageData[isChangingImage].isMobile :allImageData[isChangingImage].isDesktop}/>
:
isChangingImage===2&&<motion.img 

animate={{scale:[1,1.1]}} transition={{duration:1.5}}

key={"thirdImg"}


className="object-center  relative w-full h-full  brightness-50 " 
src={isTabletOrMobile? allImageData[isChangingImage].isMobile :allImageData[isChangingImage].isDesktop}/>
}
</AnimatePresence>
</div>
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