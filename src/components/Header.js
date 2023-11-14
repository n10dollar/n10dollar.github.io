import {AppBar, Button, Container, Divider, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"

import parameters from "../data/parameters.json"

// https://mui.com/material-ui/react-app-bar/
function Header() {
    return (
        <AppBar sx={{backgroundColor: "black"}} position={"sticky"}>
            <Container disableGutters>
                <Container>
                    <Typography variant={"h4"} pt={2} pb={1}>
                        Neil Tendolkar
                    </Typography>
                </Container>
                <Divider color={"white"} mt={2} />
                <Toolbar>
                    <Stack direction={"row"} spacing={4}>
                        {parameters.pages.map((page, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Button 
                                key={index}
                                component={Link}
                                p={40}
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