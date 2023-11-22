import {Container, Grid, Typography} from "@mui/material";
import {useState, useEffect} from "react"

import URL from "../data/text/about_me.txt"
import ImageGallery from "../components/ImageGallery";
import {fetchText} from "../utils/general"

function About() {
    const [aboutMe, setAboutMe] = useState("")
    fetchText(useEffect, aboutMe, setAboutMe, URL)

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant={"body1"}>
                        {aboutMe}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant={"body1"}>
                        {aboutMe}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant={"body1"}>
                        {aboutMe}
                    </Typography>
                </Grid>
            </Grid>
            <ImageGallery />
        </Container>
    )
}

export default About
