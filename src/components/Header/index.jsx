import { HeaderContainer, HeaderNav, Image } from './style'

const Logo = () => {
    return(
        <Image
            src='/images/logo.svg' 
            alt='Logo Pedro' 
        />
    )
}

const Navbar = () => {
    const navbarItems = [
        {
            text: 'Sobre Mim',
            link: ''
        },
        {
            text: 'Contato',
            link: ''
        },
    ]

    return(
        <nav>
            <HeaderNav>
                {navbarItems.map((navbarItem) => {
                    return(
                        <li key={navbarItem.text}>
                            <p>{navbarItem.text}</p>
                        </li>
                    )
                })}
            </HeaderNav>
        </nav>
    )
}

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Navbar />
        </HeaderContainer>
    )
}
