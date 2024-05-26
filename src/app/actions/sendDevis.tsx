"use server"

import * as z from "zod"
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import DevisEmail from "../../emails/devisEmail"
const formSchema = z.object({
  nameCompany: z.string().min(2, {
    message: "Vous devez indiquer un nom",
  }),

    serviceChoisen:z.string().min(2,{message:"Vous devez choisir un service"})
    ,
  phoneNumber:z.string().length(10,{message:"Numéro de téléphone invalide"}),
  adresseEmail:z.string().email({message:"Adresse email non valide"}),
description:z.string().min(10,{
      message:"Message trop court"
  }).max(1000)
})
  export async function sendDevisAction (dataToSend:z.infer<typeof formSchema>) {

    

    const {data,error}= await resend.emails.send({
      from:"noreply@netpros.fr",to:["sasu.netpros@gmail.com"],
      subject:`Demande de devis : ${dataToSend.nameCompany}`,react:DevisEmail({companyName:dataToSend.nameCompany,emailCompany:dataToSend.adresseEmail,messaggeClient:dataToSend.description,phoneClient:dataToSend.phoneNumber,serviceName:dataToSend.serviceChoisen})
    })
    if(error)
    {
      return "Erreur dans l'envoi d'email"
    }
    else {
      return "Votre demande à été envoyer avec succès nous vous répondrons le plus rapidement possible !"
    }
  }