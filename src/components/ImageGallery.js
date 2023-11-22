import {ImageList, ImageListItem, Box} from "@mui/material"
import Image from "mui-image"

import parameters from "../data/parameters.json"

function ImageGallery() {
    return (
        <ImageList variant={"masonry"}>
            {parameters.aboutImages.map((image) => (
                <ImageListItem component={Box} key={image.src}>
                    <Image src={image.src} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ImageGallery