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
import ContactComponent from "../ContactComponent"
import ContactOnDialog from "../ui/ContactOnDialog"

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
                <div className="w-fit rounded-2xl bg-slate-100 gap-10  ">
                <button className={`${isChanging? "bg-slate-200 rounded-2xl " : "bg-transparent"} p-2`} onClick={()=>setIsChanging(true)}>Estimation gratuite </button>

                <button 
                className={`${isChanging===false? "bg-slate-200 rounded-2xl " : "bg-transparent"} p-2`} 
                onClick={()=>setIsChanging(false)}>Contactez nous </button>
                </div>
                </div>
        </DialogHeader>
       {isChanging? <div className="flex  flex-col   w-full">
         
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div> :<div className="flex  flex-col  w-full">
            <ContactOnDialog/>
        </div> }

      </DialogContent>
    </Dialog>
  )
}
