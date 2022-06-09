import styled from "styled-components";
import { Backgroung } from "../../assets";

export const InitialContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-self: center;

    width: 100%;
    max-width: 1920px;
    background-color: ${(props) => props.theme.colors.background};
    box-sizing: border-box;

    position: relative;
    margin-left: auto;
    margin-right: auto;

`;

export const TopContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 228px 95.72px 230px 95.72px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.darkRed} !important;
    background: url(${Backgroung});
    position: relative;
    gap: 67px;
    
    #OldPeopleImage{
        position: absolute;
        right: 0;
        bottom: -146px;
        width: 60%;
        max-width: 930px;
        
    }
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

export const ButtonDownload = styled.button`
    width: 234px;
    height: 69px;
    background: #F2F3F6;
    border-radius: 15px;
    border: none;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    #DownloadImageVector{
        width: 75%;
    }
`;

export const BottonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFEFC;
    padding-bottom: 10%;
    padding-top: 13.4%;
`;

export const DataContainer = styled.div`

    box-sizing: border-box;
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

export const Image = styled.img`
    width: 45%;
`;