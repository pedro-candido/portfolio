import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ProjectsList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    list-style-type: none;

    li{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

export const BestProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`