import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const BackgroundCarousel = styled.div`
    background-color: ${(props) => props.theme.colors.lightRed};
    color: ${(props) => props.theme.colors.textLight};
`
export const Container = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex: wrap;
    padding: 124px 95.7px 124px 95.7px;
    gap: 20px;
`

export const BoxSlider = styled.div`
    width: 60%;
    justify-content: center;
    min-width:400px;
`

export const BoxText = styled.div`
    width:30%;
    justify-content: center;
    font-size: 18px;
    min-width: 400px;
`

