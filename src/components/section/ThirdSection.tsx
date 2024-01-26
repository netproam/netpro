"use client"
const thirdSection = () => {
  return (
   <section className="w-full flex px-10  bg-slate-50 ">
    <div className="hidden justify-center   lg:flex flex-col w-full px-10 order-2">
        <div>
        <img className="object-cover rounded-lg" src={
                `https://img.freepik.com/photos-premium/desinfecter-pour-prevenir-covid19-serveur-nettoyant-table-spray-desinfectant_217236-6646.jpg?size=626&ext=jpg&ga=GA1.2.730868810.1700441007&semt=ais`}/>

         
        </div>
        
    </div>
    <div className="flex flex-col w-full px-10 gap-4">
        <div className="flex flex-col gap-4">
            <p className="font-semibold text-sm">{"Une approche innovante".toLocaleUpperCase()}</p>
            <h3 className="tracking-tighter text-5xl font-semibold">Les tâches compliquées deviennent facile</h3>
            <p className="tracking-wide">{`Avec nous, tout est dans l'ordre : du nettoyage minutieux aux détails méticuleux, nous assurons un environnement impeccable. Notre engagement envers l'excellence fait de chaque espace un reflet de propreté et d'organisation, créant ainsi une atmosphère harmonieuse pour tous.`}</p>
        </div>
        <div>
        <img className="object-cover rounded-lg"
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