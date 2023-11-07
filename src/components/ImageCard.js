import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from 'react-router-dom';

function ImageCard({imageURL, header, children}) {
    return (
        <Card variant="outlined">
            <Link to={"about"}><CardActionArea>
                <CardMedia
                    component={"img"}
                    image={imageURL}
                    alt={"image_card"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {children}
                    </Typography>
                </CardContent>
            </CardActionArea></Link>
        </Card>
    )
}

export default ImageCard
