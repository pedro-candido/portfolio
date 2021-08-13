import CoverStyle, { MeImage, MeLink } from './style'


const Me = () => {
    return (
        <MeLink href='https://www.linkedin.com/in/pedro-candido/' target='_blank'>
            <MeImage src='/images/me.jpeg' />
        </MeLink>
    )
}

export const Cover = () => {
    const name = "Pedro Ferreira Candido"

    return (
        <CoverStyle.Container id='start'>
            <CoverStyle.Header>
                {name.toUpperCase()}
                <Me />
            </CoverStyle.Header>
            <CoverStyle.Title>
                {'Meu Portfólio'}
            </CoverStyle.Title>
            <a href="#footer">
                <CoverStyle.ScrollDown />
            </a>
        </CoverStyle.Container>
    )
}