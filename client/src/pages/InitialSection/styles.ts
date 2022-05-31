import styled from "styled-components";
import { Backgroung } from "../../assets";

export const InitialContainer = styled.div`
    display: grid;
    grid-template-rows: 25fr 75fr;
    grid-template-columns: 50fr 50fr;
    width: 100%;
    height: 100vh;
    background-color: #FFFEFC;
`;

export const FraseDeEfeito = styled.h3`
    width: 80%;
    height: 4%;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 43px;
    text-align: left;
    color: #FFFEFC; //////////////////
`;

export const Paragrafo = styled.p`
    width: 80%;
    height: auto;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    font-feature-settings: 'case' on;
    color: #F2F3F6; /////////////////////
`;

export const BotaoDownload = styled.button`
    width: 234px;
    height: 69px;
    background: #F2F3F6;
    border-radius: 15px;
    border: none;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
`;

export const TopContainer = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 130px;
    padding-bottom: 230px;
    padding-left: 6.64%;
    gap: 67px;
    //box-sizing: border-box;
    background-color: #872410 !important; //mudar a sintaxe
    background: url(${Backgroung});

    img{
        position: absolute;
        left: 44.72%;
        right: -1.76%;
        top: 49.76%;
        bottom: -21.5%;
        
    }
    
`;

export const BottonContainer = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFEFC;
    
`;

export const DataContainer = styled.div`
    display: grid;
    grid-template-rows: 33fr 33fr 33fr;
    grid-template-columns: 50fr 50fr;

    width: 50%;

    #Data1{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    #Data2{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
    }
    #Data3{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
    }
`;


export const DataContent = styled.div`
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
    width: 50%;
    height: auto;
    display: grid;
    grid-template-rows: 50fr 50fr;
    grid-template-columns: 25fr 25fr 25fr 25fr;

    margin-top: 13.2%;
    
    #TelaApp1{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;
        z-index: 1;
    }
    
    #TelaApp2{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 3;
        grid-column-end: 4;
        z-index: 2;
    }
`;


