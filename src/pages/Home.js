import {Box} from "@mui/material";

function Home() {
    return (
        <Box
            component={"img"}
            sx={{
                width: "100%",
                height: "300px"
            }}
            src={"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"}
        / >
    )
}

export default Home
