// import { useRouter } from "next/navigation"
// import { useState } from "react"

// const NavMobileMenu = () => {
//     const router=useRouter()
//     const [isOpenMenu,setIsOpenMenu]=useState(false)
//     if(isOpenMenu)
//     {
//   return (
//    <div className="w-screen h-screen  inset-0 fixed z-40 flex flex-col  bg-slate-50 text-slate-800 p-4 gap-8">
     
//     <div className="flex flex-col  text-md relative z-50 cursor-pointer font-semibold text-md  text-left"
          
//           onMouseLeave={()=>{
          
//             if(isClick)
//             {
//               // setAnimate(refcircle.current,{pathLength:[1,0]},{duration:0.5})
//               setIsClick(false)

//             }
//            }}
//           >

// <p className=" border-b-2 border-slate-800 py-2 text-lg">Navigation</p>


// <p onClick={()=>{

//         setIsOpenMenu(false)
//         router.push("/")

        
//       }}
//        className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
//        hover:bg-[#EEF5FF] hover:text-slate-800  py-4 pr-40  pl-14 ">Home</p>
//           <p onClick={()=>{
//              setIsOpenMenu(false)

//         router.push("/contact")

        
//       }}
//        className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
//        hover:bg-[#EEF5FF] hover:text-slate-800  py-4 pr-40  pl-14 ">A propos</p>
  
//               <p onClick={()=>{
//              setIsOpenMenu(false)

//         router.push("/contact")

        
//       }}
//        className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
//        hover:bg-[#EEF5FF] hover:text-slate-800  py-4 pr-40  pl-14 ">Contact</p>
//             <p onClick={()=>{
//             setIsOpenMenu(false)

//         router.push("/")

        
//       }}
//        className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
       
//        hover:bg-[#EEF5FF] hover:text-slate-800  py-4 pr-40  pl-14 ">Rejoignez-nous</p>
//    <p className=" border-b-2 border-slate-800 py-2 text-lg">Expertises</p>
//       <p onClick={()=>{
//                  setIsOpenMenu(false)

//         router.push("/services/robotique")

        
//       }}
//        className="whitespace-nowrap cursor-pointer z-50 relative rounded-t-md
//        hover:bg-[#EEF5FF] hover:text-slate-800  py-4 pr-40  pl-14 ">Robotique et Vision Industrielle</p>
//       <p  onClick={()=>{
//              setIsOpenMenu(false)

//         router.push("/services/developpementweb")

        
//       }}
//       className="whitespace-nowrap cursor-pointer z-50 relative   hover:bg-[#EEF5FF] hover:text-slate-800 
//        pr-40  pl-14 py-4">{`Dévéloppement Web`}</p>
//       <p  onClick={()=>{
//                setIsOpenMenu(false)

//         router.push("/services/automatisation")

        
//       }}
//       className="whitespace-nowrap cursor-pointer z-50 relative   hover:bg-[#EEF5FF]
//        hover:text-slate-800  pr-40  pl-14 py-4">Smart Automatisation</p>
       
//       <p  onClick={()=>{
//                setIsOpenMenu(false)

//         router.push("/services/researchetdeveloppement")

        
//       }}
//       className="whitespace-nowrap cursor-pointer z-50 relative  
//        rounded-b-md  hover:bg-[#EEF5FF] hover:text-slate-800  pr-40  pl-14 py-4">{`Recherche et Développement`}</p>
//       </div>
//       </div>
//   )
// }
// }
// export default NavMobileMenu