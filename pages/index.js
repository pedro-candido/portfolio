import styled from 'styled-components'
import { Cover, Footer } from '../src/components'

export default function Home() {
  return <Container>
    <Cover />
    <Footer />
  </Container>
}

const Container = styled.div`
    flex: 1;
    font-family: 'Fira Sans';
`