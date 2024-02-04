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

export function DialogEstimation() {
    const [isChanging,setIsChanging]=useState(false)
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent text-current font-semibold text-sm" >Estimation gratuite</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full p-0 overflow-scroll ">
        <DialogHeader>
          <DialogTitle className="text-center text-lg py-4">Outils de simulation</DialogTitle>
        
          <div className="flex  w-full justify-center p-0 py-4 ">
                <div className="w-fit rounded-2xl  bg-slate-200 gap-10  ">
                <button className={`${isChanging? "bg-white rounded-2xl font-semibold " : "bg-transparent"} p-2`} onClick={()=>setIsChanging(true)}>Estimation gratuite </button>

                <button 
                className={`${isChanging===false? "bg-white rounded-2xl font-semibold " : "bg-transparent"} p-2`} 
                onClick={()=>setIsChanging(false)}>Contactez nous </button>
                </div>
                </div>
        </DialogHeader>
       {isChanging? <div className="flex  flex-col   w-full">
         
       <EstimationForm/>
        </div> :<div className="flex  flex-col  w-full">
            <ContactOnDialog/>
        </div> }

      </DialogContent>
    </Dialog>
  )
}
