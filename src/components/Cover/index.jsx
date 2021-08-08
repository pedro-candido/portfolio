import { useRef } from 'react'
import CoverStyle from './style'

export const Cover = () => {
    const name = "Pedro Ferreira Candido"
    const myRef = useRef(null)

    const executeToScroll = () => myRef.current.scrollIntoView()

    return (
        <CoverStyle.Container>
            <CoverStyle.Title ref={myRef}>{name.toUpperCase()}</CoverStyle.Title>
            <CoverStyle.ScrollDown onClick={executeToScroll} />
        </CoverStyle.Container>
    )
}