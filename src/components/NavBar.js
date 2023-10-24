import {AppBar, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {MenuBook} from "@mui/icons-material"

// https://mui.com/material-ui/react-app-bar/
function NavBar() {
    const pages = ["Home", "About", "Chess"]

    return (
        <AppBar color={"primary"} position={"sticky"}>
            <Container>
                <Toolbar>
                    <IconButton>
                        <MenuBook/>
                    </IconButton>
                    <Stack direction={"row"} spacing={2}>
                        {pages.map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Button color={"warning"}>
                                <Typography>{page}</Typography>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
)
}

export default NavBar
