import styled from "styled-components";
import { FeedbackBackground } from "../../assets";

export const FeedbackContainer = styled.section`
    width: 100vw;
    max-width: 1920px;
    padding-top: 133px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
`;

export const FeedbackCardsDiv = styled.div`
    background-image: url(${FeedbackBackground}), linear-gradient(101.51deg, #872410 102.82%, #AB2F16 102.83%, #AE432D 153.57%, #872410 202.24%);
    padding: 60px 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const FeedbackTitle = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: ${(props) => props.theme.colors.textDark};
    margin-bottom: 62px;
`;

export const FeedbackTitleImage = styled.img`
    position: relative;
    left: -20px;
    top: -20px;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const UpperFeedbacks = styled.div`
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 25px;
    align-items: center;
    justify-content: space-around;
`;

export const LowerFeedbacks = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
    align-items: center;
    justify-content: space-around;
`;

export const FeedbackCardImg = styled.img`
    width: 25vw;
    min-width: 402px;
`;