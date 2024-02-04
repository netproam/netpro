"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlineLocalGasStation, MdOutlineLocationCity, MdOutlinePhone}from "react-icons/md"
import { Textarea } from "../ui/textarea"
import { Select,SelectGroup,SelectItem,SelectTrigger,SelectContent ,SelectValue} from "../ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import * as z from "zod"
import { IoGlobe, IoLocate, IoLocationSharp, IoMail, IoPaperPlane, IoPhoneLandscape, IoPhonePortrait } from "react-icons/io5"
import { FaPaperPlane, FaPen, FaRegPaperPlane, FaUser } from "react-icons/fa"
import { SelectLabel } from "@radix-ui/react-select"
const formSchema = z.object({
 
      email:z.string().min(1,{message:"services invalide"}),
      size:z.string().min(1,{message:"services invalide"}),
     region:z.string().min(1,{message:"services invalide"}),

  })
   
const EstimationForm= () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {email:"",
         region:"",size:""
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full 
           gap-4 p-4 bg-white  w-full  flex flex-col
           shadow-xl rounded-xl  ">
   

   <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select 
               onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner un service" />
                  </SelectTrigger>
                </FormControl>
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
                  <SelectItem value="débarras">{`Débarras`}</SelectItem>
                  <SelectItem value="débarras">{`Débarras`}</SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>
          
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Région`}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner une région" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Ile de France</SelectItem>
                  <SelectItem value="m@google.com">Hauts-de-france</SelectItem>
                  <SelectItem value="m@support.com">Normandie</SelectItem>

                  <SelectItem value="m@support.com">Centre-Val de Loire</SelectItem>
                  <SelectItem value="m@support.com">Bourgogne France-Comté</SelectItem>
                  <SelectItem value="m@support.com">Grand Est</SelectItem>


                </SelectContent>
              </Select>
          
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Taille de votre entreprise`}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner la taille de votre entreprise" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">50-200 m2</SelectItem>
                  <SelectItem value="m@google.com">200-350 m2</SelectItem>
                  <SelectItem value="m@support.com">{`Supérieur à 350 m2`}</SelectItem>
                </SelectContent>
              </Select>
          
              <FormMessage />
            </FormItem>
          )}
        />
            <div className="flex w-full justify-center ">
            <button className="w-fit" type="submit"
            ><IoPaperPlane
            color="" className=" text-slate-700 duration-500 hover:text-[#88CBCE]" size={30}/></button>
            </div>
            <div className="flex hidden flex-col w-full font-light text-slate-600  text-lg
             h-fit gap-4  ">
           
            
                <div className="flex flex-col w-full gap-4 ">
                <div className="flex gap-4 w-full items-center ">
                    <IoMail size={25} color="#88CBCE"/>
                <p className="font  text-base">email@gmail.com</p>
                </div>
                <div className="flex gap-4 w-full items-center ">
                    <IoPhonePortrait size={25} color="#88CBCE"/>
                <p className="font-light text-base">+1 840 841 25 69</p>
                </div>
                
                </div>
                <div className="flex gap-4 w-full   ">
                    <IoLocationSharp size={30} color="#88CBCE"/>
                <p className=" text-base font-light w-1/2 ">785 20h Street, Office 478
Berlin, De 82066</p>


                </div>
          </div>
          </form>
       
        </Form>
      )
  
}
export default EstimationForm