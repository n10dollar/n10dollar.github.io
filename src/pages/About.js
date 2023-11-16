import {Container, Grid, Typography} from "@mui/material";
import {useState, useEffect} from "react"

import URL from "../data/text/about_me.txt"
import ImageGallery from "../components/ImageGallery";

function About() {
    const [aboutMe, setAboutMe] = useState("")

    useEffect(() => {
        fetch(URL)
            .then(response => response.text())
            .then(textContext => {
                setAboutMe(textContext)
                console.log(textContext)
            })
            .catch(error => console.log(error))
    }, [])

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
