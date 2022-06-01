import styled from "styled-components";

export const Footer = styled.div`
    background-color: ${(props) => props.theme.colors.lightRed};
    width: 100%;

    padding: 101px 137px 32.92px 166px;
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 758px;

    padding-bottom: 78px;

`;

export const RedesSociais = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    

    //border: 2px solid white;
`;

export const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

