import Navbar from "@/components/Navigation/Navbar";



export default function LayoutServices({
  children}: {children: React.ReactNode}) 
  {
  return( <section className={"flex flex-col relative bg-[#F0F9F9] "}>
       <div className="relative text-black ">
        <Navbar/>
        </div>
        <div className="pt-20 bg-[#F0F9F9]">
        {children}
        </div>
        </section>)

}
