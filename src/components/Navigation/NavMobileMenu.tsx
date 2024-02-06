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
    if(isOpenMenu)
    {
  return (
   <div className="w-screen h-screen  inset-0 fixed z-40 flex gap-4 flex-col  bg-slate-50 text-slate-800 p-4 gap-0">
     <div className="w-full  justify-center  flex    relative  items-center p-4">
        {isSelectService&&<MdKeyboardArrowLeft 
        onClick={()=>setIsSelectService(false)}
        size={20} className=" absolute left-0 text-slate-800"/>}
        <p className="font-semibold text-sm self-center  relative">Services</p>
     <IoClose
     onClick={closeNavBar}
     size={20} className="absolute right-0   text-slate-800"/>

     </div>
    <div className="flex flex-col  text-md relative z-50 cursor-pointer font-semibold text-md  text-left"
          
      
          >

{isSelectService?

<div className="w-full flex flex-col  p-10 gap-8">

<p onClick={()=>{

        closeNavBar()
        router.push("/services/menages")

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800   ">Nettoyages</p>
          <p onClick={()=>{
           closeNavBar()

        router.push("/services/debaras")

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800   ">{`Débarras`}</p>
  
     
 
    
       
</div>
:<div className="w-full flex flex-col  p-10 gap-8">

<p onClick={()=>{

       closeNavBar()
        router.push("/")

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800   ">Home</p>
          <p onClick={()=>{
                        setIsSelectService(true)


        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800 flex justify-between    ">Services <span><MdOutlineKeyboardArrowRight size={20}/></span></p>
  
          
  <p onClick={()=>{


       

        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800   ">FAQ</p>

          
              <p onClick={()=>{

      
closeNavBar()
router.push("/contact")
        
      }}
       className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
       hover:bg-[#EEF5FF] hover:text-slate-800   ">Contact</p>
        
 
    
       
</div>}
      </div>
      </div>
  )

}
else {
    return <IoMenu 
    className="lg:hidden"
    onClick={()=>setIsOpenMenu(true)} size={20}/>
}
}
export default NavMobileMenu