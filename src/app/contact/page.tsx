import Navbar from "@/components/Navigation/Navbar"
import ContactSection from "@/components/section/ContactSection"

const page = () => {
  return (
   <main className="flex flex-col  ">
    <div className="text-slate-50">
            <Navbar/>
    </div>

    <ContactSection/>
   </main>
  )
}
export default page