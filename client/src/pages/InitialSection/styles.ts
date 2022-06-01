import styled from "styled-components";
import { Backgroung } from "../../assets";

export const InitialContainer = styled.div`

    width: 100%;

    background-color: ${(props) => props.theme.colors.background};
    position: relative;

    #OldPeopleImage{
        position: absolute;
        right: 2%;
        bottom: 48%;
        width: 50%;
    }
`;

export const TopContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    padding: 228px 6.64% 230px 6.64%;
    gap: 67px;
    background-color: ${(props) => props.theme.colors.darkRed} !important;
    background: url(${Backgroung});
`;

export const FraseDeEfeito = styled.h3`
    width: 60%;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 43px;
    text-align: left;
    color: ${(props) => props.theme.colors.textLight}; 
`;

export const Paragrafo = styled.p`
    width: 60%;

    height: auto;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.textLight}; 
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

export const BottonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFEFC;
    width: 100%;

    margin-bottom: 10%;
`;

export const DataContainer = styled.div`

    box-sizing: border-box;
    display: grid;
    grid-template-rows: 33fr 33fr 33fr;
    grid-template-columns: 50fr 50fr;

    width: 45%;

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

export const ImagemContainer = styled.div`

    box-sizing: border-box;
    width: 60%;
    height: auto;

    display: grid;
    grid-template-rows: 50fr 50fr;
    grid-template-columns: 25fr 25fr 25fr 25fr;

    padding-top: 13.4%;
    
   
    #TelaApp1{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 4;
        z-index: 1;
    }
    
    #TelaApp2{
        padding-left: 20px;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 3;
        grid-column-end: 4;
        z-index: 2;
    }
`;