import {AppBar, Button, Container, Divider, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"

import parameters from "../data/parameters.json"

// https://mui.com/material-ui/react-app-bar/
function Header() {
    return (
        <AppBar sx={{backgroundColor: "black"}} position={"sticky"}>
            <Container disableGutters>
                <Container>
                    <Button
                        component={Link}
                        to={"home"}
                        color={"warning"}
                        sx={{px: 0, minWidth:0}}>
                        <Typography variant={"h4"} pt={2} pb={1}>
                            Neil Tendolkar
                        </Typography>
                    </Button>
                </Container>
                <Divider color={"white"} mt={2} />
                <Toolbar>
                    <Stack direction={"row"} spacing={4}>
                        {parameters.pages.slice(1).map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            // excludes first page to avoid duplicate with name
                            <Button 
                                key={index}
                                component={Link}
                                to={page.toLowerCase()}
                                color={"warning"}
                                sx={{px: 0, minWidth:0}}>
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