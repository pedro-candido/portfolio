import { ProjectsContainer } from "./style"

const SectionTitle = ({children}) => {
    return (
        <>
            <h1>
                {children}
            </h1>
        </>
    )
}

const projects = [
    {
        image: '',
        link: '',
        name: 'Projeto 1',
    },
    {
        image: '',
        link: '',
        name: 'Projeto 2'
    },
    {
        image: '',
        link: '',
        name: 'Projeto 3'
    },
    {
        image: '',
        link: '',
        name: 'Projeto 4'
    }
]

export const WrapperProjects = () => {
    return (
        <ProjectsContainer>
            <SectionTitle>
                Meus projetos
            </SectionTitle>
        </ProjectsContainer>
    )
}