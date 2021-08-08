import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'


const Container = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('/images/background.png');
    background-size: cover;
`

const Title = styled.h2`
    font-size: 2.5rem;
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

export default {
    Container,
    Title,
    ScrollDown
}