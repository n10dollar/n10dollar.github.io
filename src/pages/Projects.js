import {Container, Stack, Typography} from "@mui/material"
import {useState, useEffect} from "react"

import ProjectDeck from "../components/ProjectDeck"
import {fetchText} from "../utils/general"


function Projects() {
    const [projects, setProjects] = useState("")
    useEffect(() => fetchText("projects.txt", setProjects), [projects])

    return (
        <Container>
            <Stack py={2} spacing={2}>
                <Typography dangerouslySetInnerHTML={{ __html: projects }}></Typography>
                <ProjectDeck />
            </Stack>
        </Container>
    )
}

export default Projects
