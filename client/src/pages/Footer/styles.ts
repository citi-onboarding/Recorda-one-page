import styled from "styled-components";

export const Footer = styled.div`
    
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.darkRed};
`;

export const Container = styled.div`
    
    width: 100%;
    padding: 101px 95.72px 32.92px 95.72px;
    box-sizing: border-box;
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 78px;

    #FooterLogo{
        width: 96px;
        height: 96px;
    }

`;

export const MediaContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    
    gap: 17px;

    #TextFollowUs{
       
        width: 212px;
        height: 20px;
        
        text-align: end;
        font-family: Barlow;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #FFFFFF;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;

    gap: 14px;
`;


export const BottonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 27px;

    hr{
        width: 100%;
        height: 0px;

        border: 1px solid #FFFFFF;
    }

    .FooterIcon{
        margin: 0 7px 0 7px;
    }

    p{
        
        width: 248px;
        height: 27px;
        font-family: Barlow;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        text-align: center;

        color: #FFFFFF;

        #TextFooter{
            font-size: 18px;
        }
    } 
`;

export const ImageLogo = styled.img`
   padding: 7px 7.42px 12.38px 7px;
    background: linear-gradient(224.88deg, rgba(171, 47, 22, 0.92) 13.86%, rgba(171, 47, 22, 0.85) 92.33%);
    border-radius: 10px;
    align-items: center;
`;

export const Image = styled.img`
`;


