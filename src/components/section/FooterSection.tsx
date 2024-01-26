"use client"
const FooterSection = () => {
  return (
  <footer className="w-screen bg-black h-[400px] text-slate-100  p-4
  lg:flex lg:justify-between grid grid-cols-2 place-items-center lg:p-20 ">
<div className="flex flex-col  text-slate-400 gap-10">
<h4 className="font-semibold text-slate-50">Bureau</h4>
<div className="flex flex-col justify-between h-full text-sm lg:text-lg">

<p className="w-4/5"> 785 15h Street, Office 478
Berlin, De 81566</p>
<p>info@example.com</p>
<p className="font-bold">+1 800 123 45 67</p>
</div>
</div>
<div className="flex flex-col text-slate-400 gap-10 w-full">
<p className="text-slate-50 font-semibold"> Liens</p>
<div className="flex flex-col justify-between h-full">
<p>Facebook</p>
<p>Facebook</p>

<p>Facebook</p>

<p>Facebook</p>
</div>
</div>

<div className="flex flex-col text-slate-400 gap-10 items-start w-full ">
<p className="text-slate-50 font-semibold"> Liens</p>
<div className="flex flex-col justify-between h-full">
<p>Facebook</p>
<p>Facebook</p>

<p>Facebook</p>

<p>Facebook</p>
</div>
</div>
<div className="flex flex-col text-slate-400 gap-10 items-start w-full">
<p className="text-slate-50 font-semibold"> Liens</p>
<div className="flex flex-col justify-between h-full">
<p>Facebook</p>
<p>Facebook</p>

<p>Facebook</p>

<p>Facebook</p>
</div>
</div>
  </footer>
  )
}
export default FooterSection