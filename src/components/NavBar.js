import {AppBar, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"

// https://mui.com/material-ui/react-app-bar/
function NavBar() {
    const pages = ["Home", "Projects", "Music", "Food"]

    return (
        <AppBar sx={{backgroundColor: "black"}} position={"sticky"}>
            <Container disableGutters>
                <Toolbar>
                    <Stack direction={"row"} spacing={2}>
                        {pages.map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Link to={"about"}>
                                <Button color={"warning"}>
                                    <Typography sx={{fontWeight: 'bold'}}>{page}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
