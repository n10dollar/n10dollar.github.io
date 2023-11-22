import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import {Link} from "react-router-dom"

function ProjectCard({month, year, header, message, redirect}) {
    let optionalProps = redirect ? {component: Link, to: redirect}: {}

    return (
        <Card variant="outlined">
            <CardActionArea {...optionalProps}>
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