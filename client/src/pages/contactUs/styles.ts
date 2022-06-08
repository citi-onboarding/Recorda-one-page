import styled from "styled-components";

import { Backgroung } from "../../assets";

export const ContactUsContainer = styled.div`
    width: 100vw;
    padding: 95px 130px 130px 90px;
    display: flex;
    flex-flow: row wrap;
    gap: 13vw;
    justify-content: center;
`;

export const DownloadContainer = styled.div` 
    width: 546px;
    height: 546px;

    background-color: ${(props) => props.theme.colors.lightRed} !important;
    background: url(${Backgroung});
    border-radius: 15px;
    
`;

export const DownloadContent = styled.div`
    gap: 92px;
    padding: 85px 92px 210px 92px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const EffectPhrase = styled.p`
    width: 362px;
    height: 90px;

    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: ${(props) => props.theme.colors.textLight};
`;

export const ButtonDownload = styled.button`
    width: 225px;
    height: 69px;
    background-color: ${(props)=> props.theme.colors.textLight};
    border-radius: 15px;
    border: none;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
`;

export const FormContainer = styled.div` 
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    gap: 45px;
`;

export const FormTitle = styled.h2`
    width: 402px;
    height: 90px;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
`;

export const Forms = styled.form`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`;

export const NameLabelContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
`;

export const EmailLabelContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
`;

export const MessageLabelContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
`;

export const NameLabel = styled.label`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDark};
`;

export const EmailLabel = styled.label`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDark};
`;

export const MessageLabel = styled.label`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDark};
`;

export const NameInput = styled.input`
    box-sizing: border-box;
    width: 427px;
    height: 35px;
    border: 4px solid #AE432D;
    border-radius: 15px;
    padding-left: 15px;
`;

export const EmailInput = styled.input`
    box-sizing: border-box;
    width: 427px;
    height: 35px;
    border: 4px solid #AE432D;
    border-radius: 15px;
    padding-left: 15px;
`;

export const MessageInput = styled.textarea`
    box-sizing: border-box;
    width: 427px;
    height: 118px;
    border: 4px solid #AE432D;
    border-radius: 15px;
    padding: 10px;
`;

export const FormButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FormButton = styled.button`
    margin-top: 10px;
    width: 172.83px;
    height: 53px;
    background: #AE432D;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: ${(props) => props.theme.colors.textLight};
    border: none;
`;