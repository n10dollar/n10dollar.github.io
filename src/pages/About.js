import {Container, Stack, Box, Typography} from "@mui/material";
import {useState, useEffect} from "react"

import ImageGallery from "../components/ImageGallery";
import {fetchText} from "../utils/general"
import AboutFacts from "../components/AboutFacts";

function About() {
    const [aboutMe, setAboutMe] = useState("")
    useEffect(() => fetchText("about_me.txt", setAboutMe), [aboutMe])

    return (
        <Container>
            <Stack py={2} spacing={4}>
                <Typography variant={"body1"}>{aboutMe}</Typography>
                <AboutFacts /> 
                <ImageGallery />
            </Stack>
        </Container>
    )
}

export default About
