import { ProjectsContainer, ProjectsList, BestProject } from "./style"

const SectionTitle = ({ children }) => {
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
        image: 'https://place-hold.it/200x200',
        link: 'https://github.com/pedro-candido',
        name: 'Projeto 1',
    },
    {
        image: 'https://place-hold.it/200x200',
        link: 'https://github.com/pedro-candido',
        name: 'Projeto 2'
    },
    {
        image: 'https://place-hold.it/200x200',
        link: 'https://github.com/pedro-candido',
        name: 'Projeto 3'
    },
    {
        image: 'https://place-hold.it/800x200',
        link: 'https://github.com/pedro-candido',
        name: 'Projeto 4',
        isBest: true
    }
]

const baseProjects = projects.filter((item) => !item.isBest)
const bestProject = projects.filter((item) => item.isBest)[0]

export const WrapperProjects = () => {
    return (
        <ProjectsContainer>
            <SectionTitle>
                Meus Projetos
            </SectionTitle>
            <ProjectsList>
                {baseProjects.map((item) => {
                    if (!item.isBest)
                        return (
                            <li key={item.name} >
                                <a href={item.link}>
                                    <img src={item.image} alt={item.name} />
                                </a>
                                <h2>{item.name}</h2>
                            </li>
                        )
                })}
            </ProjectsList>

            <BestProject>
                <img src={bestProject.image} alt={bestProject.name} />
                <h2>{bestProject.name}</h2>
            </BestProject>
        </ProjectsContainer>
    )
}