"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlineLocalGasStation, MdOutlineLocationCity, MdOutlinePhone}from "react-icons/md"
import { Textarea } from "../ui/textarea"
import {Calendar,} from "@/components/ui/calendar"
import { Label } from "../ui/label"
import { sendDevisAction } from "@/app/actions/sendDevis"
import { Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectLabel,SelectValue } from "../ui/select"

import { Toast} from "../ui/toast"
import { Input } from "@/components/ui/input"

import * as z from "zod"
import { IoGlobe, IoLocate, IoLocationSharp, IoMail, IoPaperPlane, IoPhoneLandscape, IoPhonePortrait } from "react-icons/io5"
import { FaPaperPlane, FaPen, FaRegPaperPlane, FaUser } from "react-icons/fa"
import { format } from "date-fns"
import CalendarInput from "./CalendarInput"
import { useToast } from "../ui/use-toast"
import { useState } from "react"

const formSchema = z.object({
    nameCompany: z.string().min(2, {
      message: "Vous devez indiquer un nom",
    }),
  
      serviceChoisen:z.string().min(2,{message:"Vous devez choisir un service"})
      
      ,phoneNumber:z.string().min(7,"Numéro de téléphone non valide"),
      adresseEmail:z.string().email({message:"Adresse email non valide"}),
description:z.string().min(10,{
        message:"Message trop court"
    }).max(1000)
  })
   
const ContactOnDialog = () => {
    const {reset,register,formState:{errors},handleSubmit,setValue,} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nameCompany: "",phoneNumber:"",adresseEmail:"",description:"",serviceChoisen:""
        },
      })
     
      const {toast}=useToast()
      const [isSubmit,setIsSubmit]=useState(false)
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
setIsSubmit(true)
       
        const AnswerServer=await sendDevisAction(values)
       if(AnswerServer==="Erreur dans l'envoi d'email")
       {
        toast({title:"Une erreur est survenue veuillez réassayer",duration:5000,variant:"destructive"})
       }
       else {
        reset()
        toast({title:AnswerServer,duration:5000})
        
       }
       setIsSubmit(false)
      }
    

    return (
       
          <form onSubmit={handleSubmit(onSubmit)} className="h-full
           bg-slate-50  gap-2 px-0 lg:px-4 p-0  lg:p-4 
             w-full  flex flex-col 
         rounded-xl  ">
            <div className="flex flex-col gap-2">
   <Label className="cursor-pointer" htmlFor="formMail">{`Email`}<span className="text-red-400">{"*"}</span></Label>
   <Input {...register("adresseEmail")} id="formMail" placeholder="Veuillez indiquer votre adresse email"/>
   <span className="text-red-500 text-sm font-semibold pt-1 pl-2 pb-2">{errors.adresseEmail?.message}</span>

   </div>
   <div className="flex flex-col gap-2">
   <Label className="cursor-pointer" htmlFor="companyName">{`Nom de votre entreprise`}<span className="text-red-400">{"*"}</span></Label>
   <Input
   {...register("nameCompany")}
   id="companyName" placeholder="Veuillez indiquer le nom de votre entreprise"/>
   <span className="text-red-500 text-sm font-semibold pt-1 pl-2 pb-2">{errors.nameCompany?.message}</span>

   </div>
   <div className="flex flex-col gap-2">
   <Label className="cursor-pointer" htmlFor="companyNumber">{`Numéro de téléphone`}</Label>
   <Input {...register("phoneNumber")} id="companyNumber" placeholder="Veuillez indiquer votre numéro de téléphone "/>
   <span className="text-red-500 text-sm font-semibold pt-1 pl-2 pb-2">{errors.phoneNumber?.message}</span>

   </div>
 
   <div className="flex flex-col gap-2 transition-all duration-1000">
   <Label htmlFor="selectIdService">{`Sélectionner un service`}<span className="text-red-400">{"*"}</span></Label>
   <Select  onValueChange={(data)=>{
console.log(data)
setValue("serviceChoisen",data)
   }}   
              >
             
                  <SelectTrigger  id="selectIdService"  >
                    <SelectValue  placeholder="Sélectionner un service" />
                  </SelectTrigger>
              
                <SelectContent  className="overflow-y-scroll transition-all duration-1000">
                    <SelectGroup>
                        <SelectLabel className="font-semibold pl-8  py-2">Nettoyages</SelectLabel>
                  <SelectItem value="parties communes">Partie commune</SelectItem>
                  <SelectItem value="coproprieté">Coproprieté</SelectItem>
                  <SelectItem value="bureaux">Bureaux</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="parking">Parking</SelectItem>
                  <SelectItem value="déménagement">{`Déménagement`}</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                        <SelectLabel className="font-semibold pl-8  py-2">{`Débarras`}</SelectLabel>
                  <SelectItem value="décapage">{`Décapages des sols`}</SelectItem>
                  <SelectItem value="débarras">{`Débarras`}</SelectItem>
         

                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="text-red-500 text-sm font-semibold pt-1 pl-2 pb-2">{errors.serviceChoisen?.message}</span>

              </div>
            
              <div className="flex flex-col gap-2">
   <Label className="cursor-pointer" htmlFor="messageToUs">Message<span className="text-red-400">{"*"}</span></Label>
 <Textarea  {...register("description")}
 rows={3} className="resize-none"
 id="messageToUs" placeholder="Laissez nous message nous seront ravis d'y répondre "/>
    <span className="text-red-500 text-sm font-semibold pt-1 pl-2 pb-2">{errors.description?.message}</span>

   </div>

            <button disabled={isSubmit} className="w-fit self-center h-fit " type="submit"
            ><IoPaperPlane
            color="" className=" text-slate-700  duration-500 hover:text-[#88CBCE]" size={30}/></button>
     
      </form>
        
      )
  
}
export default ContactOnDialog