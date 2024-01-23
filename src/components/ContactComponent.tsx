"use client"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { IoGlobe, IoLocate, IoLocationSharp, IoMail, IoPhoneLandscape, IoPhonePortrait } from "react-icons/io5"
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white lg:border-2
           shadow-lg rounded-lg py-8 px-4 ">
                        <h2 className="text-2xl font-semibold">Contactez-nous</h2>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <input
                    className=" outline-none w-full border-b-2 border-b-[#D3E1E0]"
                    placeholder="Nom" {...field} />
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
                  <input
                    className=" outline-none w-full border-b-2 border-b-[#D3E1E0]"
                    placeholder="Email" {...field} />
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
                    <input
                    className=" w-full outline-none border-b-2 border-b-[#D3E1E0]"
                    placeholder="Téléphone" {...field} />
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
                    <Textarea placeholder="Nous sommes à votre écoutes, ecrivez nous" {...field}  
                    className="resize-none outline-none  "/>
                  </FormControl>
             
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-center">
            <Button className="self-center" type="submit">Envoyer</Button>
            </div>
            <div className="flex flex-col w-full h-fit gap-4 text-sm text-slate-400">
            <h3 className="text-2xl text-slate-800">Contact info</h3>
                <div className="flex gap-4 w-full ">
                    <IoLocationSharp size={30} color="#B1442C"/>
                <p className="w-32">785 15h Street, Office 478
Berlin, De 81566</p>
                </div>
                <div className="flex gap-4 w-full">
                    <IoMail size={30} color="#B1442C"/>
                <p>email@gmail.com</p>
                </div>
                <div className="flex gap-4 w-full">
                    <IoPhonePortrait size={30} color="#B1442C"/>
                <p>+1 840 841 25 69</p>
                </div>
          </div>
          </form>
       
        </Form>
      )
  
}
export default ContactComponent