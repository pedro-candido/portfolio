import { ProjectsContainer, ProjectsList, BestProject } from "./style"


const projects = [
    {
        image: 'https://camo.githubusercontent.com/8744c5770846a1ac9fe95c967d197a47fee6f17e71d4cbd644bd567897b25ed5/68747470733a2f2f692e696d6775722e636f6d2f6f715a6533344a2e706e67',
        link: 'https://github.com/pedro-candido/convert-app',
        name: 'Convert App',
    },
    {
        image: 'https://camo.githubusercontent.com/f80a7b9117528b1c5a42b9567c7b0236d398fecb58d10c075f04a1a61c8290ea/68747470733a2f2f692e696d6775722e636f6d2f4b4c5355514e6d2e676966',
        link: 'https://github.com/pedro-candido/redux-counter',
        name: 'Redux Counter'
    },
    {
        image: 'https://camo.githubusercontent.com/b29638291eca53bb706e3000d01e3a23ecaa0d1cc19fc0a849d178b1e5313569/68747470733a2f2f692e696d6775722e636f6d2f506448466b766b2e676966',
        link: 'https://github.com/pedro-candido/react-native-counter',
        name: 'React Native Counter'
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

const SectionTitle = ({ children }) => {
    return (
        <>
            <h1>
                {children}
            </h1>
        </>
    )
}

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
                            <a href={item.link} key={item.name}>
                                <li>
                                    <img src={item.image} alt={item.name} />
                                    <h2>{item.name}</h2>
                                </li>
                            </a>
                        )
                })}
            </ProjectsList>
        </ProjectsContainer>
    )
}