"use client"

import ContactComponent from "../ContactComponent"
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import('../MapComponent'), {
    ssr: false,
  });
const ContactSection = () => {
  return (
  <section className="flex   flex-col lg:flex-row w-full pt-10 lg:p-10  brightness-25">
    <div className="w-full hidden lg:flex flex-col gap-4   h-full   justify-center   ">
        
        <div className=" w-full  gap-4 flex flex-col text-center lg:text-start py-10">
    <h3 className="text-3xl   self-center lg:self-start
    leading-loose  lg:w-4/5 lg:text-5xl font-stolzl  text-slate-800">{`Besoin d'un`} <span className="text-[#88CBCE]">Netoyage?</span>Prennez contacte avec nous!</h3>
    </div>
    <div className="p-4 h-[600px] w-[800px] relative rounded-lg">
      <img className="object-cover absolute w-full h-full rounded-lg"
      src={`https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800`}
      />
    </div>
    </div>

    <div className=" relative lg:-inset-x-28 h-full 
    w-full
    lg:w-[825px] flex-col justify-center flex self-center ">
        <ContactComponent/>
    </div>
  </section>
  )
}
export default ContactSection