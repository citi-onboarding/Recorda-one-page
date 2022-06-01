import styled from "styled-components";


export const NavbarContainer = styled.div`
    font-size: 20px;

    nav{
        width: 100%;
        height: 118px;

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