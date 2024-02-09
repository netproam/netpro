"use client"
const thirdSection = () => {
  return (
   <section className="w-full flex p-4   ">
    <div className="hidden justify-center   lg:flex flex-col w-full px-10 order-2">
        <div>
        <img className="object-cover rounded-lg" src={
                `https://img.freepik.com/photos-premium/desinfecter-pour-prevenir-covid19-serveur-nettoyant-table-spray-desinfectant_217236-6646.jpg?size=626&ext=jpg&ga=GA1.2.730868810.1700441007&semt=ais`}/>

         
        </div>
        
    </div>
    <div className="flex flex-col w-full px-2 lg:px-8 gap-4">
        <div className="flex flex-col gap-0  ">
            <p className="text-sm font-semibold  pl-1  text-slate-400 
            ">{"Une approche innovante".toLocaleUpperCase()}</p>
            <h3 className="tracking-tight text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04A9F4] to-[#17CCCA]">Les tâches compliquées deviennent facile</h3>
            <p className="tracking-wide text-lg font-hind font-light pt-2">{`Avec nous, tout est dans l'ordre : du nettoyage minutieux aux détails méticuleux, nous assurons un environnement impeccable. Notre engagement envers l'excellence fait de chaque espace un reflet de propreté et d'organisation, créant ainsi une atmosphère harmonieuse pour tous.`}</p>
        </div>
        <div className=" p-2 lg:px-0 ">
        <img className="object-cover rounded-lg  lg:px-0"
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