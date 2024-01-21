"use client"

import ContactComponent from "../ContactComponent"
import MapComponent from "../MapComponent"

const ContactSection = () => {
  return (
  <section className="flex w-full p-10 h-screen bg-white brightness-25">
    <div className="w-full flex flex-col gap-4   h-full   justify-center  ">
        
        <div className="h-fit w-4/5 gap-4 flex flex-col">
    <p className="font-semibold text-sm">{`Contacter nous`.toLocaleUpperCase()}</p>
    <h3 className="text-5xl tracking-tighter font-semibold">Besoin d'un <span className="text-[#88CBCE]">Netoyage?</span>Prennez contacte avec nous!</h3>
    </div>
    <div className="p-4">
        <MapComponent/>
    </div>
    </div>

    <div className="w-full p-10 h-full ">
        <ContactComponent/>
    </div>
  </section>
  )
}
export default ContactSection