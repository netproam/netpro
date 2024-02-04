"use client"
const FooterSection = () => {
  return (
  <footer className="w-screen bg-black h-[400px] text-slate-100  p-4 lg:items-center
  lg:flex lg:justify-between grid grid-cols-2 gap-y-10 place-items-center lg:p-20 ">
<div className="flex flex-col self-center justify-start   text-slate-400  gap-4 lg:gap-10 w-fit items-center lg:items-start" >
<h4 className="font-semibold text-slate-50 text-lg w-4/5 lg:w-fit">Bureau</h4>
<div className="flex flex-col justify-between h-full text-sm lg:text-md gap-4 w-4/5 lg:w-full">

<p className="w-4/5 ">14 Avenue Lhomond - 93370 - Montfermeil</p>
<p>sasu.netpros@gmail.com</p>
<p className="font-bold">+33 651 605 207</p>
</div>
</div>
<div className="flex flex-col text-slate-400 gap-4 
justify-start items-start  w-4/5 lg:gap-10 lg:w-fit ">
<p className="text-slate-50 font-semibold text-lg w-4/5"> Liens</p>
<div className="flex flex-col justify-between h-full gap-4">
<p>Facebook</p>
<p>Facebook</p>


<p>Facebook</p>
</div>
</div>

<div className="flex flex-col text-slate-400 gap-4 lg:gap-10 items-start w-fit justify-self-start pl-8 relative ">
<p className="text-slate-50 font-semibold text-lg"> Liens</p>
<div className="flex flex-col justify-between h-full gap-4">
<p>Facebook</p>
<p>Facebook</p>


<p>Facebook</p>
</div>
</div>
<div className="flex flex-col text-slate-400 gap-4 lg:gap-10 items-start w-fit self-center relative">
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