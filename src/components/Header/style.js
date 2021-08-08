import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.colors.primary.main.contrastText};
    color:  ${({theme}) => theme.colors.primary.main.color};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-height: 10%;
    margin-top: 1%;
`

export const HeaderNav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    height: 100%;

    li {
        padding: 10px;
        white-space: nowrap;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s;
        font-weight: bold;
    }

    li:hover {
        background-color: ${({theme}) => theme.colors.primary.main.color};
        color: ${({theme}) => theme.colors.primary.main.contrastText};
        transition: all .4s;
        p {
            transition: all .4s;
            transform: scale(1.1);
        }
    }

    li:first-child {
        margin-right: 10px
    }
`

export const Image = styled.img`
    cursor: pointer;
    height: 70px;
`