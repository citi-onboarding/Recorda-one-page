import styled from "styled-components";

export const CarouselCardStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 40vw;
    min-width: 402px;
    height: 275px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.background};
    box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 20px 32px 20px 20px;

    @media only screen and (max-width: 1200px){
        width: 35vw;
    }
`;

export const CarouselCardUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    margin-bottom: 20px;
`;

export const CarouselUserImg = styled.img`
    width: 47px;
    height: 49px;
    border-radius: 50px;
`;

export const CarouselUserName = styled.h3`
    width: 209px;
    height: 34px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.textDark};
`;

export const CarouselText = styled.p`
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