import {Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material"
import {Link} from "react-router-dom"

function ProjectCard({month, year, header, message, redirect}) {
    return (
        <Card variant="outlined">
            <CardActionArea component={Link} to={redirect}>
                <CardContent>
                    <Typography gutterBottom variant="body" component="div">
                        {`${month} ${year}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {message}
                    </Typography>
                </CardContent>
            </CardActionArea>   
        </Card>
    )
}

export default ProjectCard