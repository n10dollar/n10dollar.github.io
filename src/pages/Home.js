import {Box} from "@mui/material";
import poker from "../assets/royal_flush.png";

function Home() {
    return (
        <Box
            component={"img"}
            sx={{
                width: "100%",
                height: "300px"
            }}
            src={poker}
        / >
    )
}

export default Home
