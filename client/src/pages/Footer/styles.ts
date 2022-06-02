import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    justify-content: center;
   
    section{
        width: 100%;
        max-width: 1440px;
        background-color: ${(props) => props.theme.colors.lightRed};
        padding: 101px 166px 32.92px 137px;
        box-sizing: border-box;
    }
    
`;

export const Container = styled.div`
    
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    
    
`;



export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //gap: 758px;

    padding-bottom: 78px;

`;

export const SocialMediaContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    
    gap: 17px;

    p{
       
        width: 212px;
        height: 20px;
        
        text-align: end;

        font-family: 'Sora';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #FFFFFF;
    }

    //border: 2px solid white;
`;

export const MediaContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;

    gap: 14px;
`;

export const MediaContent = styled.div`
   
    width: 46px;
    height: 46px;

    background: #C4C4C4;
    border-radius: 23px;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const BottonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 27px;

    hr{
        width: 1092px;
        height: 0px;

        border: 1px solid #FFFFFF;
    }

    .FooterIcon{
        margin: 0 7px 0 7px;
    }
`;

