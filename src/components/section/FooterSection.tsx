"use client"
const FooterSection = () => {
  return (
  <footer className="gap-4 flex flex-col lg:items-center  lg:flex-row bg-black lg:h-[400px] text-slate-100  p-4 
 lg:justify-between    ">
<div className="flex  flex-col  justify-start   
  text-slate-400  gap-4 lg:gap-10  w-fit" >
<h4 className="font-semibold text-slate-50 text-lg  lg:w-fit">Bureau</h4>
<div className="flex flex-col justify-between h-full text-sm lg:text-md gap-4  lg:w-fit">

<p className=" whitespace-nowrap w-full ">14 Avenue Lhomond - 93370 - Montfermeil</p>
<p>sasu.netpros@gmail.com</p>
<p className="font-bold">+33 651 605 207</p>
</div>
</div>


<div className="flex flex-col text-slate-400 gap-4 
 lg:gap-10 items-start justify-self-start lg:pl-8 relative ">
<p className="text-slate-50 font-semibold text-lg"> Liens</p>
<div className="flex flex-col justify-between h-full gap-4">
<p>Facebook</p>
<p>Facebook</p>


<p>Facebook</p>
</div>
</div>
<div className="flex-col hidden  lg:flex text-slate-400 gap-4 lg:gap-10 items-start  justify-self-start pl-8 relative ">
<p className="text-slate-50 font-semibold text-lg"> Liens</p>
<div className="flex flex-col justify-between h-full gap-4">
<p>Facebook</p>
<p>Facebook</p>


<p>Facebook</p>
</div>
</div>
<div className="hidden lg:flex flex-col text-slate-400  gap-4 lg:gap-10 items-start self-center relative">
<p className="text-slate-50 font-semibold text-lg"> Liens</p>
<div className="flex flex-col justify-between h-full gap-4">
<p>Facebook</p>

<p>Facebook</p>

<p>Facebook</p>
</div>
</div>
  </footer>
  )
}
export default FooterSection