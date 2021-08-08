import styled from 'styled-components'

const Styled = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.primary.main.color};
    min-height: 50px;
    align-items: center;
    margin-top: 5%;
`

const Item = styled.a`
    color: ${({theme}) => theme.colors.secondary.main.contrastText};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: .3s all;
    font-size: 1.2rem;
    svg {
        transition: .4s;
    }
    &:hover{
        svg {
            transform: scale(1.2);
        }
        color: ${({theme}) => theme.colors.primary.main.contrastText};
        background-color: ${({theme}) => theme.colors.primary.main.color};
        transition: .2s all;
    };
    &:first-child {
        margin-right: 1%;
    };
`

const Social = styled.div`
    background-color: ${({theme}) => theme.colors.secondary.main.color};
    display: flex;
    height: 100%;
`

export const FooterContainer = { 
    Styled,
    Item,
    Social
 }