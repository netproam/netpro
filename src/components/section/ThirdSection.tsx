"use client"
const thirdSection = () => {
  return (
   <section className="w-full flex p-4  flex-col gap-6 lg:gap-10  ">
  
    <div className="flex flex-col w-full px-2 lg:px-8 gap-4">
        <div className="flex flex-col gap-0  ">
            <p className="text-sm font-semibold  pl-1  text-slate-400 
            ">{"Une approche innovante".toLocaleUpperCase()}</p>
            <h3 className="tracking-tight text-3xl  lg:text-5xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]">{`Découvrez nos avant après`}</h3>
            <p className="tracking-wide  text-base lg:text-lg font-hind font-light pt-2">{`Avec nous, tout est dans l'ordre peux importe l'état de départ le final sera impécable`}</p>
        </div>
   
    </div>
   
    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full   gap-4 px-2   lg:px-10 lg:gap-10">

       <h2 className="col-span-2 racking-tight text-3xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]">Nettoyages</h2> 
        <div className=" ">
        <img className="object-cover rounded-lg w-full" src={
                `https://img.freepik.com/photos-premium/desinfecter-pour-prevenir-covid19-serveur-nettoyant-table-spray-desinfectant_217236-6646.jpg?size=626&ext=jpg&ga=GA1.2.730868810.1700441007&semt=ais`}/>

         
        </div>
        <div className="  ">
        <img className="object-cover rounded-lg  lg:px-0 w-full"
            src={
                `https://img.freepik.com/photos-gratuite/plein-coup-homme-poussant-bouton-ascenseur_23-2149345535.jpg?w=1800&t=st=1705798707~exp=1705799307~hmac=dc88fdc5de25317284826a26180c27d5d1994703856501650956dddf178a50f5`
            }
            />
        </div>
        
    </div> 
 
    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full   gap-4 px-2   lg:px-10 lg:gap-10">

<h2 className="col-span-2 racking-tight text-3xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]">Nettoyages</h2> 
 <div className=" ">
 <img className="object-cover rounded-lg w-full" src={
         `https://img.freepik.com/photos-premium/desinfecter-pour-prevenir-covid19-serveur-nettoyant-table-spray-desinfectant_217236-6646.jpg?size=626&ext=jpg&ga=GA1.2.730868810.1700441007&semt=ais`}/>

  
 </div>
 <div className="  ">
 <img className="object-cover rounded-lg  lg:px-0 w-full"
     src={
         `https://img.freepik.com/photos-gratuite/plein-coup-homme-poussant-bouton-ascenseur_23-2149345535.jpg?w=1800&t=st=1705798707~exp=1705799307~hmac=dc88fdc5de25317284826a26180c27d5d1994703856501650956dddf178a50f5`
     }
     />
 </div>
 
</div> 
   </section>
  )
}
export default thirdSection