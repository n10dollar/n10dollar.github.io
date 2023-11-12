import {
    Container,
    Divider,
    Grid,
    Typography,
    Stack
} from "@mui/material"
import Image from "mui-image"
import ProjectCard from "../components/ProjectCard"
import { sortProjects } from "../utils/general"

import projects from "../data/projects"

const TEST_LENGTH = 12
const testProj = {
    "month": "Jan",
    "year": 999,
    "header": "H",
    "message": "Lorem ipsum more filler text",
    "redirect": "R"
}
while (projects.length < TEST_LENGTH) 
    projects.push({...testProj})

const sortedProjects = sortProjects(projects)

// model website: https://www.taniarascia.com/
function Home() {
    return (
        <Container>
            <Grid container spacing={5} py={4}>
                <Grid item xs={12} sm={6} my={{xs: 0, sm: 5}}>
                    <Stack spacing={1}>
                        <Typography variant={"h3"}>Hey, I'm Neil!</Typography>
                        <Divider />
                        <Typography variant={"h4"}>And welcome to my digital studio.</Typography>
                        <Typography variant={"body1"}>
                            I'm a software developer in Berkeley.
                            I make open-source projects and write about code, design, and life.
                            I like producing music, tennis, cooking, reading, chess, and poker.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Image src={"/neiltendolkar.png"} />
                </Grid>
            </Grid>
            <Container className={"projects"} py={2}>
                <Typography variant={"h4"}>Projects</Typography>
                <Grid container spacing={2} py={1}>
                    {sortedProjects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    )
}

export default Home
