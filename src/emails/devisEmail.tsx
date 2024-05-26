import { Button, Html ,Text,Hr, Section,Tailwind, Body,} from "@react-email/components";
import * as React from "react";
interface DevisEmailProps{
  companyName: string 
  serviceName:string
  emailCompany:string
  phoneClient:string
  messaggeClient:string
}
export default function DevisEmail({companyName,serviceName,emailCompany,phoneClient,messaggeClient}:DevisEmailProps) {
  return (
    <Html>
      <Tailwind>
    
      <Text className="font-bold text-xl" >Bonjour, vous avez reçu une demande de devis ! </Text>
   <Section className="flex flex-row gap-2  " >
   <Text className="text-lg" >Nom du client : <strong>{companyName}</strong> </Text>
   <Text className="text-lg" >Le numéro du client : <strong>{phoneClient}</strong> </Text>

      <Text className="text-lg" >L'adresse email du client : <strong>{emailCompany}</strong> </Text>

      <Text className="text-lg" >Le service sélectionner : <strong >{serviceName}</strong> </Text>
      <Text className="text-lg" >Le message du client :  </Text>
      <Hr className="w-full"/>
      <Text className="text-xl pt-2" >{messaggeClient} </Text>

      </Section>
    
    
     
     
      </Tailwind>
    </Html>
  );
}
