import styled from "styled-components";

export const NewsContainer = styled.section`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 80px;
    margin: 0 auto 0 auto;
`;

export const NewsTitle = styled.h2`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 25px;
`;