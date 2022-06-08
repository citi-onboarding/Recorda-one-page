import { useState } from "react";
import api from "../../services/api";

import{
    DownloadContainer,
    EffectPhrase,
    DownloadContent,
    ContactUsContainer,
    ButtonDownload,
    FormContainer,
    FormTitle,
    Forms,
    NameLabelContainer,
    EmailLabelContainer,
    MessageLabelContainer,
    NameLabel,
    EmailLabel,
    MessageLabel,
    NameInput,
    EmailInput,
    MessageInput,
    FormButtonContainer,
    FormButton,
 } from "./styles";

export const ContactUs: React.ElementType = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const getContact = async (e: { preventDefault: () => void }) => {
        try {
            e.preventDefault();
            await api.post('email', {name, email, message});
            alert('Mensagem enviada com sucesso');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro, tente novamente.')
        }
    }

    return(
        <ContactUsContainer>
            <DownloadContainer>
                <DownloadContent>
                    <EffectPhrase>Recordar é amar</EffectPhrase>
                    <ButtonDownload>baixe agora</ButtonDownload>
                </DownloadContent>
            </DownloadContainer>


            <FormContainer>
                <FormTitle>Entre em contato conosco</FormTitle>
                <Forms onSubmit={getContact}>
                    <NameLabelContainer>
                        <NameLabel htmlFor="username">Nome</NameLabel>
                        <NameInput 
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        />
                    </NameLabelContainer>
                    <EmailLabelContainer>
                        <EmailLabel htmlFor="email">E-mail</EmailLabel>
                        <EmailInput 
                        type="text"
                        id="email"
                        name="email" 
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </EmailLabelContainer>
                    <MessageLabelContainer>
                        <MessageLabel htmlFor="message">Escreva sua mensagem</MessageLabel>
                        <MessageInput
                        id="message"
                        name="message"
                        required
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        />
                    </MessageLabelContainer>
                    <FormButtonContainer>
                        <FormButton type="submit">Enviar</FormButton>
                    </FormButtonContainer>
                </Forms>
            </FormContainer>
        </ContactUsContainer>
    );
}