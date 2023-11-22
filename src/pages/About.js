import {Container, Stack, Grid, Typography} from "@mui/material";
import {useState, useEffect} from "react"

import ImageGallery from "../components/ImageGallery";
import {fetchText} from "../utils/general"

function About() {
    const [aboutMe, setAboutMe] = useState("")
    useEffect(() => fetchText("about_me.txt", setAboutMe), [aboutMe])

    return (
        <Container>
            <Stack py={2}>
                <Typography variant={"body1"}>
                    {aboutMe}
                </Typography>
                <ImageGallery />
            </Stack>
        </Container>
    )
}

export default About
