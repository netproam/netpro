"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlineLocalGasStation, MdOutlineLocationCity, MdOutlinePhone}from "react-icons/md"
import { Textarea } from "../ui/textarea"
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full  gap-4 p-4    w-full  flex flex-col
           shadow-xl rounded-xl  ">
   
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                 <FormControl>
                    <div className="flex gap-2  justify-center items-center bg-white  pl-2  py-3  rounded-md
                     w-full">
                    <FaUser size={20} className="text-slate-600"/>
                  <input
                    className="  w-full outline-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="Nom" {...field} />
                    </div>
                  </FormControl>
               
                  <FormMessage />
                </FormItem>
              )}
            />
                 <FormField
              control={form.control}
              name="adresseEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <div className="flex gap-2  justify-center items-center bg-white  pl-2  py-3 rounded-md
                     w-full">
                                            <IoMail size={20} className="text-slate-600"/>
                  <input
                    className="  w-full outline-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="Email" {...field} />
                    </div>
                  </FormControl>
            
                  <FormMessage />
                </FormItem>
              )}
            />
                 <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                 <FormControl>
                 <div className="flex gap-2  justify-center items-center bg-white  pl-2  py-3  rounded-md
                     w-full">
                    <MdOutlinePhone size={20} className="text-slate-600"/>
                  <input
                    className="  w-full outline-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="Téléphone" {...field} />
                    </div>
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
              control={form.control}
              name="ville"
              render={({ field }) => (
                <FormItem>
                 <FormControl>
                 <div className="flex gap-2  justify-center items-center bg-white  pl-2  py-3  rounded-md
                     w-full">
                    <MdOutlineLocationCity size={20} className="text-slate-600"/>
                  <input
                    className="  w-full outline-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="ville" {...field} />
                    </div>
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />


                 <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                 
                 <FormControl>

                 <div className="flex gap-2  justify-center items-center bg-white  pl-2  py-3  rounded-md
                     w-full">
                    <FaPen size={20} className="text-slate-600"/>
                  <textarea rows={4}
                    className="  w-full outline-none resize-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="Inscrire votre message, où appelez nous directement" {...field} />
                    </div>
                  </FormControl>
             
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-center ">
            <button className="w-fit" type="submit"
            ><IoPaperPlane
            color="" className=" text-slate-600 duration-500 hover:text-[#88CBCE]" size={30}/></button>
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
export default ContactOnDialog