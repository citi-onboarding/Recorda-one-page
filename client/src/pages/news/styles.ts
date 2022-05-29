import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 80px;
    font-family: 'Barlow';
    text-decoration-color: ${(props) => props.theme.colors.text};

    h2 {
        width: 100vw;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
    }
`;

export const CardsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .card1 {
        background-color: ${(props) => props.theme.colors.newsCard1};
    }

    .card2 {
        background-color: ${(props) => props.theme.colors.newsCard2};
    }
`;

export const NewsCard = styled.div`
    width: 40%;
    border-radius: 15px;
    padding: 50px 54px 48px 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: start;
    gap: 5%;

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 20px;
    }

    .newsDescription {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        text-align: justify;
        margin-bottom: 10px;
    }

    a {
        text-decoration-line: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        color: rgba(34, 34, 34, 1);
    }

    .newsReadMore {
        text-decoration-line: underline;
    }
`;