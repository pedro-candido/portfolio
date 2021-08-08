import styled from 'styled-components'
import { Cover, Footer, Header, WrapperProjects } from '../src/components'

export default function Home() {
  return (
    <Container>
      <Cover />
      <Header />
      <WrapperProjects />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
    flex: 1;
    font-family: 'Fira Sans';
`