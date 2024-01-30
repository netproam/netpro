"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlinePhone}from "react-icons/md"
import { Textarea } from "./ui/textarea"
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
    phoneNumber:z.string().length(10,{message:"Numéro de téléphone invalide"}),
    adresseEmail:z.string().email({message:"Adresse email non valide"}),
    subject:z.string().min(2,{message:"Vous devez indiquez un sujet"}).max(100),description:z.string().min(10,{
        message:"Message trop court"
    }).max(1000)
  })
   
const ContactComponent = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",phoneNumber:"",adresseEmail:"",subject:"",description:""
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white 
           shadow-xl rounded-xl py-8 px-4 lg:px-8 ">
                        <h2 className="text-2xl  pt-2  hidden lg:flex
                         font-stolzl leading-relaxed">Contactez nous</h2>
 <div className=" w-full  gap-4 flex flex-col   py-10 lg:hidden">
    <h3 className="text-2xl   self-center lg:self-start
    leading-loose  lg:w-4/5 lg:text-5xl font-stolzl  text-slate-800">{`Besoin d'un`} <span className="text-[#88CBCE]">Nettoyage?</span>Prennez contacte avec nous!</h3>
    </div>
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                 <FormControl>
                    <div className="flex gap-2 justify-center items-center bg-slate-50 p-2 rounded-md w-full">
                    <FaUser size={15} className="text-slate-600"/>
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
                  <div className="flex gap-2 justify-center items-center bg-slate-50 p-2 rounded-md w-full">
                    <IoMail size={15} className="text-slate-600"/>
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
                 <div className="flex gap-2 justify-center items-center bg-slate-50 p-2 rounded-md w-full">
                    <MdOutlinePhone size={15} className="text-slate-600"/>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                 
                 <FormControl>
                 <div className="flex gap-2 justify-center  bg-slate-50 p-4 rounded-md w-full">
                    <FaPen size={15} className="text-slate-600"/>
                  <textarea rows={3}
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
                <p className=" text-base font-light w-1/2 ">785 15h Street, Office 478
Berlin, De 81566</p>


                </div>
          </div>
          </form>
       
        </Form>
      )
  
}
export default ContactComponent