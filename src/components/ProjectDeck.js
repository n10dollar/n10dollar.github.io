import {
    Grid,
    Typography,
    Box
} from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import {sortProjects} from "../utils/general"

import projects from "../data/projects"

// const TEST_LENGTH = 12
// const testProj = {
//     "month": "Jan",
//     "year": 999,
//     "header": "H",
//     "message": "Lorem ipsum more filler text",
//     "redirect": "R"
// }
// while (projects.length < TEST_LENGTH) 
//     projects.push({...testProj})

const sortedProjects = sortProjects(projects)

function ProjectDeck() {
    return (
        <Box className={"projects"} py={2}>
            <Typography variant={"h4"}>Projects</Typography>
            <Grid container spacing={2} py={1}>
                {sortedProjects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProjectDeck