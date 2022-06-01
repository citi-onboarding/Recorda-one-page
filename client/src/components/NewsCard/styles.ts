import styled from "styled-components";

export const NewsCardStyle = styled.div`
    width: 40%;
    min-width: 400px;
    border-radius: 15px;
    padding: 50px 54px 48px 40px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: start;
    gap: 5%;
    background-color: ${(props) => props.theme.colors.lightRed};
    color: ${(props) => props.theme.colors.textLight};
`;

export const NewsTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 20px;
`;

export const NewsDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: justify;
    margin-bottom: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
`;

export const NewsRedirect = styled.a`
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
    color: ${(props) => props.theme.colors.textLight};
`;

export const NewsReadMore = styled.p`
    text-decoration-line: underline;
`;