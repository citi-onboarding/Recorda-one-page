import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 80px;
`;

export const NewsTitle = styled.h2`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100vw;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: ${(props) => props.theme.colors.textDark};
`;

export const NewsTitleImage = styled.img`
    position: relative;
    top: 3px;

    @media screen and (max-width: 540px) {
        display: none;
    }
`;

export const CardsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;