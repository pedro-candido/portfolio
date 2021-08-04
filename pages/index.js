import styled from 'styled-components'
import { Cover, Footer } from '../src/components'
import { Container } from './style'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Container>
    <Cover />
    <Footer />
  </Container>
}

