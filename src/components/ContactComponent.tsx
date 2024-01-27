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
import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa"
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
           shadow-xl rounded-xl py-8 px-10 ">
                        <h2 className="text-lg  pt-4 
                         font-stolzl leading-relaxed">Contactez nous</h2>

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
                    <textarea placeholder="Nous sommes à votre écoutes, ecrivez nous" {...field}  
                    className="resize-none border-b-2  border-b-[#D3E1E0] w-full outline-none  "/>
                  </FormControl>
             
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full ">
            <Button className="bg-[#88CBCE] gapa-4 flex items-cente
            r justify-center rounded-full px-12 py-6 font-semibold shadow-lg" type="submit"
            ><FaRegPaperPlane className="mr-2" size={20}/>envoyer</Button>
            </div>
            <div className="flex flex-col w-full font-light text-slate-600  text-lg
             h-fit gap-4  border-t-[1px] border-t-[#88CBCE] pt-10">
           
                <div className="flex gap-4 w-full items-center lg:justify-center  ">
                    <IoLocationSharp size={30} color="#B1442C"/>
                <p className="w-fit lg:w-full  text-base font-light">785 15h Street, Office 478
Berlin, De 81566</p>
<a
className="text-black"
href="geo:0,0?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA">1600 Amphitheatre Parkway, Mountain View, CA</a>

                </div>
                <div className="flex flex-col lg:flex-row w-full gap-4 ">
                <div className="flex gap-4 w-full items-center ">
                    <IoMail size={25} color="#B1442C"/>
                <p className="font font-light text-base">email@gmail.com</p>
                </div>
                <div className="flex gap-4 w-full items-center ">
                    <IoPhonePortrait size={25} color="#B1442C"/>
                <p className="font-light text-base">+1 840 841 25 69</p>
                </div>
                </div>
          </div>
          </form>
       
        </Form>
      )
  
}
export default ContactComponent