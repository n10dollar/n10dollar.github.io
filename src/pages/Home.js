import {
    Container,
    Divider,
    Grid,
    Typography,
    Stack
} from "@mui/material"
import {Image} from "mui-image"
import ProjectCard from "../components/ProjectCard"

import projects from "../data/projects.json"

// model website: https://www.taniarascia.com/
function Home() {
    return (
        <Container>
            <Grid container spacing={2} py={4}>
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
            <Grid container spacing={2} py={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Home
