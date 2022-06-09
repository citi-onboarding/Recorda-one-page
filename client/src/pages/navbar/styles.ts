import styled from "styled-components";


export const NavbarContainer = styled.div`
    font-size: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    nav{
        width: 100vw;
        height: 118px;
        padding: 0 85px 0 85px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: ${(props) => props.theme.colors.lightRed}
    }

    ul{
        display: flex;
        list-style: none;
        text-decoration: none;
        gap: 34px;
    }

    a{
        color: ${(props) => props.theme.colors.textLight};
        text-decoration: none;
    }
`

export const MaxWidth = styled.div`
    width:100%;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const SearchBox = styled.div`
    display: flex;
    height: 69px;
    background-color: ${(props) => props.theme.colors.darkRed};
    border-radius: 15px;

    span img{
        height: 69px;
        padding: 20px;
    }
    input{
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.textLight};
        font-size: 20px;
    }
    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const FlexBox = styled.div`
    display: flexbox;
    gap: 50px;
    align-items: center;
`