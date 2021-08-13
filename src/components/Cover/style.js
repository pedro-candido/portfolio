import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'


const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5d198f;
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const Header = styled.div`
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 2.5rem;
    width: 70vw;
    color: #fff;
    &:hover {
        cursor: default;
    }
`

const Title = styled.h2`
    font-size: 3.3rem;
    color: #fff;
    &:hover {
        cursor: default;
    }
`

const ScrollDown = styled(FiChevronDown)`
    color: #fff;
    position: absolute;
    bottom: 3%;
    font-size: 50px;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        transform: scale(1.2);
        transition: all .4s;
    }
`

export const MeImage = styled.img`
    position: absolute;
    border-radius: 100%;
    border: 2px solid #fff;
    width: 10%;
    opacity: 0.5;
    transition: .5s;
`

export const MeLink = styled.a`
    &:hover {
        img {
            opacity: 1;
            transition: .4s;
        }
    }
`

export default {
    Container,
    Title,
    ScrollDown,
    Header
}