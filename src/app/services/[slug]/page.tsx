
"use client"
import { useScroll,useMotionValueEvent } from "framer-motion";
import { useRouter} from "next/router";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import {motion} from "framer-motion"
import ContactComponent from "@/components/forms/ContactComponent";
const Page = ({ params }: { params: { slug: string } }) => {

    const refForm=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
       
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })

  
useMotionValueEvent(scrollYProgress,"change",(e)=>{
    if(isTabletOrMobile===false)
    {
       if((e<0.2)&&refForm.current)
       {
        refForm.current.style.position="absolute"
        refForm.current.style.top="0px"
        refForm.current.style.right="40px"

        refForm.current.style.marginTop="0px"

       }
       

else if((e>=0.2 &&e<0.8)&&refForm.current){
    refForm.current.style.position="fixed"
    refForm.current.style.top="0px"
    refForm.current.style.margin="0px"
    refForm.current.style.right="40px"

   



}
       else if(e>0.8&&refForm.current) {
        


        refForm.current.style.position="absolute"
        refForm.current.style.top=""
        refForm.current.style.marginTop="auto"

        refForm.current.style.right="40px"
        refForm.current.style.bottom="0px"



       }
    }
    })
  return (
    <main 
    className="flex  flex-col     w-full bg-[#F0F9F9]   ">
        <div className="flex flex-col w-full items-center gap-4 py-10">
        <h2 className=" text-4xl tracking-tighter lg:text-6xl font-semibold text-center  h-fit relative z-50">{params.slug==="debaras"? "Débarras" : "Entretien ménagés"}</h2>
        <IoIosArrowDown size={30}/>
        </div>

     <section 

     className="w-full flex flex-col lg:flex-row  relative">  
<div className="flex  relative  pt-10  lg:w-2/3  bg-[#F0F9F9] 
  px-10   ">


    <section className=" 
   gap-20  flex flex-col bg-[#F0F9F9]   
      ">
<div className="h-full  flex flex-col gap-10 text-[#62656E] bg-[#F0F9F9] overscroll-auto ">
<p>auris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.

</p>
<h4 className="font-semibold text-slate-800 text-3xl">Sed ut perspiciatis unde omnis iste natus et
</h4>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum. Cras turpis urna, vulputate at est vitae, posuere lobortis erat.</p>
<div className="flex flex-col lg:flex-row gap-10 w-full   bg-[#F0F9F9]">
    <div className=" rounded-lg lg:h-[300px] lg:w-[600px]">

    <img 
        className="object-cover rounded-lg"

    src={`https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=800`}/>

    </div>
    <div className=" rounded-lg lg:h-[300px] lg:w-[600px] ">
    <img 
    className="object-cover rounded-lg"
    src={`https://images.pexels.com/photos/625279/pexels-photo-625279.jpeg?auto=compress&cs=tinysrgb&w=800`}/>
    </div>
</div>
<div className="flex flex-col gap-8 bg-[#F0F9F9] w-ful h-full">
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
     clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

     <h3 className="font-semibold text-lg">
     Aliquam quis lobortis quam

     </h3>
     <p>
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. S
     tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
     </p>
     <div className="rounded-lg lg:h-[500px] lg:w-[700px] self-center">
        <img 
        className="rounded-lg object-cover"
        src="https://images.pexels.com/photos/5331118/pexels-photo-5331118.jpeg?auto=compress&cs=tinysrgb&w=800"/>
     </div>
</div>
</div>

    </section>
  

    </div>
    <motion.div
         ref={refForm}
    className=" flex z-50 relative lg:absolute lg:p-2    
     lg:w-[400px] lg:right-[40px]  h-fit">

<ContactComponent/>

</motion.div>
</section> 
    </main>
  )
}
export default Page