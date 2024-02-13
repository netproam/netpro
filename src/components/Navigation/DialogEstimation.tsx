import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import ContactOnDialog from "../forms/ContactOnDialog"
import EstimationForm from "../forms/EstimationForm"
import { MdKeyboardArrowRight } from "react-icons/md"
interface DialogProps{
    styleBtn:string
    isShowed? :boolean
}
export function DialogEstimation({styleBtn,isShowed}:DialogProps) {
    const [isChanging,setIsChanging]=useState(true)
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className={` text-center w-fit   relative flex items-center justify-center text-slate-200 px-8 py-0 rounded-lg
           font-semibold text-sm ${styleBtn}`} >Devis gratuit <span className=" absolute right-2">
            {isShowed&&<MdKeyboardArrowRight size={20}/>}</span></Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full flex flex-col  p-0 overflow-scroll
       bg-slate-50 ">
      
        <div className="flex  w-full justify-center p-0 pt-4 pb-8 ">
                <div className="w-fit rounded-2xl  flex flex-col text-xl  text-slate-800 gap-2  ">
                <button className={`${isChanging? " bg-clip-text text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300    rounded-2xl font-semibold text-slate-white " : "bg-transparent text-sm text-slate-400"} p-2`} onClick={()=>setIsChanging(true)}>Estimation gratuite </button>

   
                </div>
                </div>

     <div className="flex  flex-col h-full   w-full">
         
      <ContactOnDialog/>
        </div> 

      </DialogContent>
    </Dialog>
  )
}
