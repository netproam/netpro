"use client"

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import Link from "next/link"
const FooterSection = () => {
  return (
  <footer className="flex flex-col gap-8  h-full lg:items-center p-4  pl-10 lg:pl-4 
    bg-black lg:h-[300px] text-slate-100  lg:gap-8  lg:justify-center
   ">
<div className="flex  flex-col   justify-start relative h-fit   
  text-slate-400  gap-4 l  w-fit" >
<h4 className="font-semibold text-slate-50 text-lg  lg:w-fit">Bureau</h4>
<div className="flex flex-col  h-full text-sm lg:text-md gap-4  lg:w-fit">

<p className=" whitespace-nowrap w-full ">14 Avenue Lhomond - 93370 - Montfermeil</p>
<p>sasu.netpros@gmail.com</p>
<a 
    className="pointer-events-auto  font-semibold  p-1 w-fit h-fit self-start"
    href="tel:+33668460402">
+33 668 460 402
</a>
</div>
</div>


<div className="flex flex-col  text-slate-400 gap-4   relative h-fit  
items-start lg:pl-8 relative ">

<div className="flex flex-row justify-between  my-4  lg:gap-10 h-full w-full  px-4">
<Link  target="_blank"
href={`
http://linkedin.com/in/net’pros-✨🧹-ab40332b9`}
><FaLinkedin size={35}/></Link>
<Link
 target="_blank"
href={`
https://www.instagram.com/net.pros1?igsh=MWp6ZGp0ajFvYXA0Zg%3D%3D&utm_source=qr`}>
  <p><FaInstagram size={35}/></p>
</Link>
<Link  target="_blank"
href={`https://www.tiktok.com/@net.pros?_t=8l3LTgpokcK&_r=1`}
>
<FaTiktok   size={35}/>
</Link>




</div>
</div>


  </footer>
  )
}
export default FooterSection