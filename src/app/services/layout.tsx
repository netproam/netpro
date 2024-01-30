import Navbar from "@/components/Navigation/Navbar";



export default function LayoutServices({
  children}: {children: React.ReactNode}) 
  {
  return( <section className={"flex  flex-col relative bg-[#F0F9F9] overflow-hidden "}>
     
        <div className="pt-20 bg-[#F0F9F9] z-10 relative">
        {children}
        </div>
        </section>)

}
