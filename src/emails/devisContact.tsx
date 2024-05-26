import { Button, Html ,Text,Hr, Section,Tailwind, Body,} from "@react-email/components";
import * as React from "react";
interface DevisContactProps{
  companyName: string 
  subject:string
  emailCompany:string
  phoneClient:string
  messaggeClient:string
}
export default function DevisContact({companyName,subject,emailCompany,phoneClient,messaggeClient}:DevisContactProps) {
  return (
    <Html>
      <Tailwind>
    
      <Text className="font-bold text-xl" >Bonjour, vous avez reçu une nouvelle demande ! </Text>
   <Section className="flex flex-row gap-2  " >
   <Text className="text-lg" >Nom du client : <strong>{companyName}</strong> </Text>
   <Text className="text-lg" >Le numéro du client : <strong>{phoneClient}</strong> </Text>

      <Text className="text-lg" >L'adresse email du client : <strong>{emailCompany}</strong> </Text>

      <Text className="text-lg" >L'objet inscrit par le client : <strong >{subject}</strong> </Text>
      <Text className="text-lg" >Le message du client :  </Text>
      <Hr className="w-full"/>
      <Text className="text-xl pt-2" > {messaggeClient} </Text>

      </Section>
    
    
     
     
      </Tailwind>
    </Html>
  );
}
