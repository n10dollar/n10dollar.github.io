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
                            <Button component={Link} to={page.toLowerCase()} color={"warning"}>
                                <Typography sx={{fontWeight: 'bold'}}>{page}</Typography>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
