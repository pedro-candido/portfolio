import styled from 'styled-components'
import { Cover, Footer, Header, WrapperProjects } from '../src/components'
import { useRef } from 'react'

export default function Home() {
  const myRef = useRef(null)
  return (
    <Container>
      <Cover />
      <Main>
        <Header/>
        <WrapperProjects />
      </Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
    flex: 1;
    font-family: 'Fira Sans';
`

const Main = styled.main`
  height: 87%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`