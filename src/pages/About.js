import {Container, Grid, Typography} from "@mui/material";
import {useState, useEffect} from "react"

const URL = "../data/text/about_me.txt"

function About() {
    const [aboutMe, setAboutMe] = useState("")

    useEffect(() => {
        const fetchText = async () => {
            try {
                const response = await fetch(URL)
                if (!response.ok) 
                    throw new Error("Error!")
                const textContext = await response.text()
                setAboutMe(textContext)
                console.log(textContext)
            } catch(error) {
                console.error(error)
            }
        }

        fetchText()
    }, [])

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Typography variant={"body1"}>
                        {aboutMe}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About
