import styled from "styled-components";

export const InitialContainer = styled.div`
    display: grid;
    grid-template-columns: 50fr 50fr;
    grid-template-rows: 25fr 75fr;

    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #DFDFDF 0%, rgba(233, 233, 233, 0) 100%);
`;

export const TopContainer =styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 130px;
    gap: 39px;
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



`;