"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {MdOutlinePhone}from "react-icons/md"
import { Textarea } from "../ui/textarea"
import { GrCircleInformation } from "react-icons/gr";

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
import { useState } from "react"
import { useToast } from "../ui/use-toast"
import { sendContactAction } from "@/app/actions/sendContact"
const formSchema = z.object({
  name: z.string().min(2,"Vous devez indiquer un nom valide")
  ,phoneNumber:z.string().length(10,"Numéro de téléphone non valide")
  ,adresseEmail:z.string().email("Adresse email non valide"),description:z.string().min(5,"Votre message est trop court").max(400),
  topic:z.string().min(2,"Veuillez indiquez un objet").max(30)
  })
   
const ContactComponent = () => {
  const {toast}=useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",phoneNumber:"",adresseEmail:"",description:"",topic:""
        },
      })
     
      const [isSubmit,setIsSubmit]=useState(false)
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        setIsSubmit(true)
       
        const AnswerServer=await sendContactAction(values)
       if(AnswerServer==="Erreur dans l'envoi d'email")
       {
        toast({title:"Une erreur est survenue veuillez réassayer",duration:5000,variant:"destructive"})
       }
       else {
        form.reset()
        toast({title:AnswerServer,duration:5000})
        
       }
       setIsSubmit(false)
      }
    

    return (
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="h-full  bg-slate-50 lg:bg-white p-4 gap-6  flex flex-col w-full
           shadow-xl rounded-xl  ">
                        <h2 className="text-2xl  pt-2  hidden lg:flex
                         font-stolzl leading-relaxed">Contactez nous</h2>
 <div className=" w-full  gap-4 flex flex-col   py-10 lg:hidden">
    <h3 className="
    text-4xl leading-[40px] lg:text-[50px]  h-full  lg:leading-[48px]
    lg:w-full 
    font-semibold
       text-[#3C4E5D]
    ">{`Notre équipe est à votre`} <span className="bg-clip-text inline-block text-transparent pt-0 bg-gradient-to-r from-[#17CCCA] to-emerald-300  ">ecoute</span> <span className="block">
      </span></h3>
    </div>
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                 <FormControl>
                    <div className="flex gap-2 justify-center items-center bg-white lg:bg-slate-50 p-2 rounded-md w-full">
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
                  <div className="flex gap-2 justify-center items-center bg-white lg:bg-slate-50 p-2 rounded-md w-full">
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
                 <div className="flex gap-2 justify-center items-center bg-white lg:bg-slate-50 p-2 rounded-md w-full">
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
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <div className="flex gap-2 justify-center items-center bg-white lg:bg-slate-50 p-2 rounded-md w-full">
                    <GrCircleInformation size={15} className="text-slate-600"/>
                  <input
                    className="  w-full outline-none   bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="objet" {...field} />
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
                 <div className="flex gap-2 justify-center  bg-white lg:bg-slate-50 p-4 rounded-md w-full">
                    <FaPen size={15} className="text-slate-600"/>
                  <textarea rows={3}
                    className="  w-full outline-none resize-none    bg-transparent 
                     px-4 rounded-md  hover:border-slate-800 duration-500"
                    placeholder="Inscrire votre message, où appelez nous directement" {...field} />
                    </div>
                  </FormControl>
             
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-center ">
            <button
             disabled={isSubmit}
            className="w-fit" type="submit"
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