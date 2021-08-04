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
    font-size: 50px;
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
`

export default {
    Container,
    Title,
    ScrollDown
}