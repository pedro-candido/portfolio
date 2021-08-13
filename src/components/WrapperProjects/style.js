import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 50%;
`

export const ProjectsList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    list-style-type: none;

    a {
        border: 1px solid #ccc;
        padding: 10px;
        transition: .4s all;
        border-radius: 4px;
        text-decoration: none;
        background-color: ${({theme}) => theme.colors.background.light.color};
        &:hover {
            transform: scale(1.02);
            transition: .3s all;
            box-shadow: 0 0 5px #ccc;
            border-radius: 8px;
        }
    }

    li{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        img {
            max-height: 200px;
        }
    }
`

export const BestProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`