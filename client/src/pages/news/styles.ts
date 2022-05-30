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

export const SectionTitle = styled.h2`
    width: 100vw;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: ${(props) => props.theme.colors.textDark};
`;

export const CardsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;