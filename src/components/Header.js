import {AppBar, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"

import parameters from "../data/parameters.json"

// https://mui.com/material-ui/react-app-bar/
function Header() {
    return (
        <AppBar sx={{backgroundColor: "black"}} position={"sticky"}>
            <Container disableGutters>
                <Toolbar>
                    <Stack direction={"row"} spacing={2}>
                        {parameters.pages.map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Button 
                                key={index} 
                                component={Link} 
                                to={page.toLowerCase()} 
                                color={"warning"}>
                                <Typography sx={{fontWeight: 'bold'}}>{page}</Typography>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header