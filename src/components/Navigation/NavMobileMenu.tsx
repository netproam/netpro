import { AnimatePresence,motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { IoClose, IoMenu } from "react-icons/io5"
import { MdKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md"

const NavMobileMenu = () => {
    const router=useRouter()
    const [isOpenMenu,setIsOpenMenu]=useState(false)
    const [isSelectService,setIsSelectService]=useState(false)
    function closeNavBar(){
        setIsSelectService(false)
        setIsOpenMenu(false)
    }

  return (
 <AnimatePresence>
{isOpenMenu?   <motion.div transition={{duration:0.25}}
initial={{opacity:0}} animate={{opacity:[0,1]}} exit={{opacity:[1,0]}}
key={"navbar"}
   className="w-screen h-screen  inset-0 fixed z-40 flex gap-4 flex-col  bg-slate-50 text-slate-800 p-4 gap-0">
     <div className="w-full  justify-center  flex    relative  items-center p-4">
        {isSelectService&&<MdKeyboardArrowLeft 
        onClick={()=>setIsSelectService(false)}
        size={25} className=" absolute left-0 text-slate-800"/>}
{isSelectService&&        <p className="font-semibold text-base self-center  relative">Services</p>
}     <IoClose
     onClick={closeNavBar}
     size={25} className="absolute right-0   text-slate-800"/>

     </div>
    <div className="flex flex-col  text-md relative z-50 cursor-pointer font-semibold text-md  text-left"
          
      
          >

{isSelectService?

<div className="w-full flex flex-col  p-10 gap-8">

<p onClick={()=>{
        router.push("/services/menages")

        closeNavBar()

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800   ">Nettoyages</p>
          <p onClick={()=>{
                    router.push("/services/debarras")

           closeNavBar()


        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800   ">{`Débarras`}</p>
  
     
 
    
       
</div>
:<div className="w-full flex flex-col  p-10 gap-8">

<p onClick={()=>{
        router.push("/")

       closeNavBar()

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800   ">Home</p>
          <p onClick={()=>{
                        setIsSelectService(true)


        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800 flex justify-between    ">Services <span><MdOutlineKeyboardArrowRight size={20}/></span></p>
  
          
  <p onClick={()=>{


       

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800   ">FAQ</p>

          
              <p onClick={()=>{

router.push("/contact")

closeNavBar()
        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       lg:hover:bg-[#EEF5FF] lg:hover:text-slate-800   ">Contact</p>
        
 
    
       
</div>}
      </div>
      </motion.div>

      :  <IoMenu 
    className="text-current"
    onClick={()=>setIsOpenMenu(true)} size={25}/>}

      </AnimatePresence>

  )
    }

export default NavMobileMenu