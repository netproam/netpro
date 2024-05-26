"use server"

import * as z from "zod"
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import DevisContact from "../../emails/devisContact"

const formSchema = z.object({
    name: z.string().min(2,"Vous devez indiquer un nom valide")
    ,phoneNumber:z.string().length(10,"Numéro de téléphone non valide")
    ,adresseEmail:z.string().email(),description:z.string().min(5,"Votre message est trop court").max(400),
    topic:z.string().min(2,"Veuillez indiquez un objet").max(30)
    })

  export async function sendContactAction (dataToSend:z.infer<typeof formSchema>) {

    

    const {data,error}= await resend.emails.send({
      from:"noreply@netpros.fr",to:["nor33abdel@gmail.com"],
      subject:`Nouvelle demande de contact`,react:DevisContact({companyName:dataToSend.name,emailCompany:dataToSend.adresseEmail
        ,messaggeClient:dataToSend.description,phoneClient:dataToSend.phoneNumber,subject:dataToSend.topic})
    })
    if(error)
    {
      return "Erreur dans l'envoi d'email"
    }
    else {
      return "Votre demande à été envoyer avec succès nous vous répondrons le plus rapidement possible !"
    }
  }