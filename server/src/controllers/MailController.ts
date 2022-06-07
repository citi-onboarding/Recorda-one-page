import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail =async (request: Request, response: Response) => {
    try {
        const {name, email, message} = request.body

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'nodemailer funcionando',
            htmlOption: `<p>
                Um usuário entrou em contato. Esse usuário tem o nome ${name}, apresenta o email ${email} e enviou a seguinte mensagem: ${message}.
            </p>`
        })

        return response.status(200).send({
            answer: 'Enviado.'
        })
    } catch (error) {
        return response.status(500).send({
            answer: 'Desculpe, ocorreu um problema.'
        })
    }
}

export {SendMail};