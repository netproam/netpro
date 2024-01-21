import Navbar from "@/components/Navigation/Navbar";



export default function LayoutServices({
  children}: {children: React.ReactNode}) 
  {
  return( <section className={"flex flex-col relative "}>
       <div className="relative text-black ">
        <Navbar/>
        </div>
        <div className="pt-20">
        {children}
        </div>
        </section>)

}
