import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

    h2 {
        margin-bottom: 75px;
        width: 404px;
        height: 58px;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #000000;
    }
`;

export const CardsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

export const NewsCard = styled.div`
    width: 578px;
    height: 305px;
    background: rgba(229, 229, 229, 0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;