import styled from "styled-components";

export const FeedbackCardStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 25vw;
    min-width: 402px;
    height: 250px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.background};
    box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 30px 32px 20px 20px;
`;

export const FeedbackUserName = styled.h3`
    width: 209px;
    height: 34px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.textDark};
    margin-bottom: 10px;
`;

export const FeedbackText = styled.p`
    text-align: justify;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.textDark};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;