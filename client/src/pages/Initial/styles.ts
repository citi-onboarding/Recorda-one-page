import styled from "styled-components";

export const InitialContainer = styled.div`
    display: grid;
    grid-template-columns: 50fr 50fr;
    grid-template-rows: 25fr 75fr;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #DFDFDF 0%, rgba(233, 233, 233, 0) 100%);
`;

export const TopContainer = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 130px;
    margin-bottom: 230px;
    gap: 39px;
`;

export const BottonContainer = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DadosContainer = styled.div`
    display: grid;
    grid-template-rows: 33fr 33fr 33fr;
    grid-template-columns: 50fr 50fr;
    width: 45%;

    #Dado1{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    #Dado2{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
    }
    #Dado3{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
    }
`;


export const DadoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Numero = styled.h1`
    width: 191px;
    height: 114px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 900;
    font-size: 96px;
    text-align: center;
    color: #000000;
`;

export const Titulo = styled.p`
    width: 267px;
    height: 66px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`;

export const ImagemContainer = styled.div`
    width: 55%;
    height: auto;
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 50fr 50fr;
    grid-template-columns: 25fr 25fr 25fr 25fr;
    
    #primeiraImg{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
        z-index: 2;
    }
    
    #segundaImg{
        margin-top: 100px;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        transform: rotate(25.2deg);
        z-index: 1;
    }
`;

export const Imagem = styled.div`
    width: 449px;
    height: 801px;
`;


export const FraseDeEfeito = styled.h3`
    width: 80%;
    height: 40px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
`;

export const Paragrafo = styled.p`
    width: 80%;
    height: auto;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    font-feature-settings: 'case' on;
    color: rgba(0, 0, 0, 0.8);
`;

export const BotaoDownload = styled.button`
    width: 234px;
    height: 69px;
    background: #C4C4C4;
    border-radius: 15px;
    border: none;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
`;