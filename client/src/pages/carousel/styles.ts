import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const BackgroundCarousel = styled.div`
    background-color: ${(props) => props.theme.colors.lightRed};
    color: ${(props) => props.theme.colors.textLight};
    max-width:1920px;
    margin: 0 auto;
    
`
export const Container = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex: wrap;
    padding: 124px 95.7px 124px 95.7px;
    gap: 20px;
    display:flex;
    flex-flow: row wrap;
    @media only screen and (max-width: 1250px){
        justify-content:center;
    }
    position: relative;
    z-index: 2;

    #ImagemDeBolinhas{
        position: absolute;
        left: 0;
        bottom: -30px;
        z-index: 1;
        color:  ${(props) => props.theme.colors.lightRed};
    }
`

export const BoxSlider = styled.div`
    width: 60%;
    justify-content: center;
    @media only screen and (max-width: 1250px){
        width: 100%
    }
`

export const BoxText = styled.div`
    width:30%;
    justify-content: center;
    font-size: 18px;
    p{
        margin-top: 20px;
        text-align: justify;
    }
    @media only screen and (max-width: 1250px){
        width: 100%
    }
`

export const Image = styled.img`
`

