"use client"

import { v4 } from "uuid"
import { IoMdQuote } from "react-icons/io";
import {motion, useAnimate, useMotionValueEvent, useScroll} from "framer-motion"
import CardTestimonialComponent from "../CardTestimonialComponent";
import { useRef } from "react";
const TestimonialSection = () => {

    const temoign=[
      
      {name:"Raphael",description:`
C’est une société de ménage très organisé et très propre. J’ai bien aimé leur travail . Je recommande 👍
`,id:v4()
,url:`https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800`
}
 
,{name:"Raphael",description:`
Un grand merci pour un nettoyage impeccable ! Travail soigné, équipe professionnelle et résultats au-delà de nos attentes. Nous sommes ravis et recommandons vivement cette entreprise pour tout besoin de nettoyage.
`,id:v4()
,url:`https://www.pexels.com/fr-fr/photo/homme-en-chemise-boutonnee-marron-3785079`
},
{name:``,
description:`Madame Hammi et toute l'équipe de Net'Pros fournissent un travail minutieux et de grande qualité. Nous avons grâce à elles des locaux à la propreté irréprochable dans les moindres détails. La communication avec Madame Hammi est aisée et réactive. Je recommande sans réserve ses services.
`,url:``,id:v4()
},{name:"Raphael morticis"
,description:`Service de nettoyage impeccable ! Professionnels compétents, 
efficaces et ponctuels. Je recommande vivement leurs services pour un résultat parfait !`,id:v4(),
url:`https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
},
{name:"Raphael",description:`
Tres bonne prestation de leur part. J'ai beaucoup apprécié la prise en compte de notre demande. Un travail de qualité. Personnel souriant.
`,id:v4()
,url:`https://www.pexels.com/fr-fr/photo/photo-gros-plan-de-femme-avec-manteau-marron-et-haut-gris-733872/`}




,{name:"Raphael",description:`Je vous recommande vivement Net’Pros.
Travail de qualité !!
J’en suis très satisfaite et je reviendrais certainement.`,id:v4(),
url:`https://www.pexels.com/fr-fr/photo/femme-en-rouge-a-manches-longues-tenant-une-tablette-3772510`}
,{name:"Raphael",description:`
NET’PROS fourni les meilleures prestations de nettoyage. Équipe très minutieuse.
`,id:v4()
,url:`https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800`}

]
    const allTemoignages=temoign.map((element)=>{
        return (
          <CardTestimonialComponent
          url={element.url}
          key={element.id} description={element.description}
          id={element.id} name={element.name}/>
        )
    })

    const [scope,animate]=useAnimate()
    const refSect=useRef(null)
    const {scrollXProgress}=useScroll({container:refSect})

const text=`Ils sont + de 2 000 à avoir choisi Net'Pros pour le nettoyage de leur établissement. Ils témoignent.`
const dataTest={
  title :``,

}

    useMotionValueEvent(scrollXProgress,"change",(scrollP)=>{
      console.log("scrolling")

      if(scrollP<0.1)
      {
        
      }
      else
      {
        animate(scope.current,{width:`${scrollP*100}%`})
      }
    })




  return (
    <section
    style={{ scrollbarWidth: "none",scrollbarColor:"#f8fafc" }}

    className="flex flex-col h-full    justify-center items-center w-full gap-2 lg:gap-10 py-8 ">
       <div className="flex  h-full  w-full  flex-col px-4 lg:px-0 gap-2">
          <p className="  text-3xl leading-[40px] lg:text-5xl  h-full  lg:leading-[48px]
         lg:w-full   lg:whitespace-nowrap
         font-semibold
          text-center   text-[#3C4E5D] mr-2">Ils sont
            <span className="bg-clip-text  inline text-transparent  bg-gradient-to-r from-[#17CCCA] to-emerald-300 ">
  {` déjà plus de 100 `}  
  </span>
    {`clients à être`}
    <span className="  inline
    
    text-3xl leading-[40px] lg:text-5xl  h-full  lg:leading-[48px]
         lg:w-full  
    whitespace-nowrap   bg-clip-text font-semibold
     text-transparent bg-gradient-to-r from-[#17CCCA] to-emerald-300 ">{` satisfait.`}</span>
          </p>
           
          </div>
   <section
   ref={refSect}
   style={{ scrollbarWidth: "none",scrollbarColor:"#f8fafc" }}
   className=" h-[300px] scrollba   relative  bg-gradient-to-b 
  overflow-scroll w-screen 
    flex flex-col gap-2 ">

{/**Version mobile */}

<div

className="  gap-8  lg:gap-16   lg:hidden
 justify-center items-center
pl-4 lg:pl-0 w-max  px-20   lg:px-0  flex  h-full ">

{allTemoignages}

</div>

<div className="w-max lg:flex flex-grow  hidden">

{/**Version pcs */}


<div

className="  gap-8  lg:gap-2  
 justify-center items-center
pl-4 lg:pl-0 w-screen   relative self-center     flex  h-full ">

{allTemoignages.slice(0,3)}

</div>
<div

className="  gap-8  lg:gap-16  
 justify-center items-center
pl-4 lg:pl-0 w-screen  px-20   lg:px-0  flex  h-full ">

{allTemoignages.slice(3,6)}

</div>

</div>

   </section>
   <p className="sticky w-screen  pb-4 ">




   <motion.svg className="w-screen" height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 20">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#17CCCA" />
          <stop offset="100%" stopColor="#6ee7b7" />
    </linearGradient>
  </defs>
  <motion.rect
    width={`100%`}
    height="20"
    className={""}
    ref={scope}
    rx="10" // Horizontal radius for rounded corners
    ry="10"
    initial={{width:"10%"}}
    style={{ fill: "url(#gradient)" }} // Apply linear gradient to fill
   
   
    id="svgrect"
  />
</motion.svg>

</p>
   </section>
  )
}
export default TestimonialSection