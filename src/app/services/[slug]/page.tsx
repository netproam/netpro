
"use client"
import { useScroll,useMotionValueEvent } from "framer-motion";
import { useRouter} from "next/router";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import {motion} from "framer-motion"
import ContactComponent from "@/components/forms/ContactComponent";
import { dataPages } from "@/data/dataPages";
const Page = ({ params }: { params: { slug: string } }) => {

    const refForm=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
       
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })

  
    let momo=0
    if(params.slug==="debarras")
    {
      momo=1
    }
    console.log(momo)
const correctData=dataPages[momo]


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
    className="flex  flex-col   lg:pb-10    w-full bg-[#F0F9F9]   ">
        <div className="flex flex-col w-full items-center gap-4 py-10">
        <h2 className=" 
       font-stolzl bg-clip-text text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300
        text-4xl tracking-tighter lg:text-5xl  h-fit py-2 text-center  h-fit relative z-50">{correctData.serviceName}</h2>
        <IoIosArrowDown size={30}/>
        </div>

     <section 

     className="w-full flex flex-col lg:flex-row  relative">  
<div className="flex  relative  lg:pt-10  lg:w-2/3  bg-[#F0F9F9] 
  px-4 lg:px-10   ">


    <section className=" 
   gap-20  flex flex-col bg-[#F0F9F9]   
      ">
<div className="h-full  flex flex-col gap-3 text-[#62656E] bg-[#F0F9F9] overscroll-auto ">
<p className="leading-relaxed font-poppins text-lg  text-justify">
{correctData.title}
</p>
<h4 className="
text-2xl font-stolzl bg-clip-text text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300
 font-semibold">Nous sommes à votre service
</h4>
<p className="leading-relaxed font-poppins text-lg
text-justify
">{correctData.secondTitle}</p>
<div className="flex my-2 flex-col lg:flex-row gap-10 w-full   bg-[#F0F9F9]">
    <div className=" rounded-lg lg:h-[300px] lg:w-[600px]">

    <img 
        className="object-cover rounded-lg"

    src={`https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=800`}/>

    </div>
    <div className=" rounded-lg lg:h-[300px] lg:w-[600px] ">
    <img 
    className="object-cover rounded-lg"
    src={correctData.imgUrl}/>
    </div>
</div>
<div className="flex flex-col gap-8 bg-[#F0F9F9] w-ful h-full">

<p className="leading-relaxed font-poppins text-lg text-justify ">{correctData.thirdTitle}</p>
  
  
</div>
</div>

    </section>
  

    </div>
    <motion.div
         ref={refForm}
    className=" flex z-50  relative lg:absolute lg:p-2    
     lg:w-[400px] lg:right-[40px]  h-full lg:h-fit">

<ContactComponent/>

</motion.div>
</section> 
    </main>
  )
}
export default Page