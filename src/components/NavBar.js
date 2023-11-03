import {AppBar, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";

// https://mui.com/material-ui/react-app-bar/
function NavBar() {
    const pages = ["Home", "Projects", "Music", "Food"]

    return (
        <AppBar sx={{backgroundColor: "black"}} position={"sticky"}>
            <Container>
                <Toolbar>
                    <Stack direction={"row"} spacing={2}>
                        {pages.map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Button color={"warning"}>
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
