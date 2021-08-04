import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { FooterContainer } from './style'

export const Footer = () => {

    const socialMedia = [
        {
            name: 'Linkedin',
            logo: <FiLinkedin />,
            link: 'https://www.linkedin.com/in/pedro-candido/'
        },
        {
            name: 'Github',
            logo: <FiGithub />,
            link: 'https://github.com/pedro-candido',
        }
    ]

    return (
        <FooterContainer.Styled>
            <FooterContainer.Social>
                {socialMedia.map((social) => {
                    return (
                        <FooterContainer.Item target='_blank' href={social.link}>
                            {social.logo}
                        </FooterContainer.Item>
                    )
                })}
            </FooterContainer.Social>
        </FooterContainer.Styled>
    )
}