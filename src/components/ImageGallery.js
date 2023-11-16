import {ImageList, ImageListItem} from "@mui/material"
import Image from "mui-image"

import parameters from "../data/parameters.json"

function ImageGallery() {
    return (
        <ImageList variant={"masonry"}>
            {parameters.aboutImages.map((image) => (
                <ImageListItem component={"Image"} key={image.src}>
                    <Image src={image.src} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ImageGallery