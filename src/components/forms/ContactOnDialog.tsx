"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlineLocalGasStation, MdOutlineLocationCity, MdOutlinePhone}from "react-icons/md"
import { Textarea } from "../ui/textarea"
import {Calendar,} from "@/components/ui/calendar"
import { Label } from "../ui/label"

import { Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectLabel,SelectValue } from "../ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Toast} from "../ui/toast"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import * as z from "zod"
import { IoGlobe, IoLocate, IoLocationSharp, IoMail, IoPaperPlane, IoPhoneLandscape, IoPhonePortrait } from "react-icons/io5"
import { FaPaperPlane, FaPen, FaRegPaperPlane, FaUser } from "react-icons/fa"
import { format } from "date-fns"
import CalendarInput from "./CalendarInput"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Vous devez indiquer un nom",
    }),
    ville: z.string().min(2, {
        message: "Vous devez indiquer votre ville",
      }),
    phoneNumber:z.string().length(10,{message:"Numéro de téléphone invalide"}),
    adresseEmail:z.string().email({message:"Adresse email non valide"}),
    subject:z.string().min(2,{message:"Vous devez indiquez un sujet"}).max(100),description:z.string().min(10,{
        message:"Message trop court"
    }).max(1000)
  })
   
const ContactOnDialog = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",phoneNumber:"",adresseEmail:"",subject:"",description:"",ville:""
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    

    return (
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full  gap-8 px-4 p-4    w-full  flex flex-col 
           shadow-xl rounded-xl  ">
            <div className="flex flex-col gap-5">
   <Label className="cursor-pointer" htmlFor="formMail">{`Email`}<span className="text-red-400">{"*"}</span></Label>
   <Input id="formMail" placeholder="Veuillez indiquer votre adresse email"/>
   </div>
   <div className="flex flex-col gap-5">
   <Label className="cursor-pointer" htmlFor="companyName">{`Nom de votre entreprise`}<span className="text-red-400">{"*"}</span></Label>
   <Input id="companyName" placeholder="Veuillez indiquer le nom de votre entreprise"/>
   </div>
   <div className="flex flex-col gap-5">
   <Label className="cursor-pointer" htmlFor="companyNumber">{`Numéro de téléphone`}</Label>
   <Input id="companyNumber" placeholder="Veuillez indiquer votre numéro de téléphone "/>
   </div>
 
   <div className="flex flex-col gap-5">
   <Label>{`Sélectionner un service`}<span className="text-red-400">{"*"}</span></Label>
   <Select 
              >
             
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner un service" />
                  </SelectTrigger>
              
                <SelectContent className="overflow-y-auto">
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
              </div>
              <CalendarInput/>
              <div className="flex flex-col gap-5">
   <Label className="cursor-pointer" htmlFor="messageToUs">Message<span className="text-red-400">{"*"}</span></Label>
 <Textarea id="messageToUs" placeholder="Laissez nous message nous seront ravis d'y répondre "/>
   </div>

            <button className="w-fit self-center h-fit " type="submit"
            ><IoPaperPlane
            color="" className=" text-slate-700  duration-500 hover:text-[#88CBCE]" size={30}/></button>
     
      </form>
        </Form>
      )
  
}
export default ContactOnDialog