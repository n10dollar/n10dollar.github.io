import {AppBar, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom"

import parameters from "../data/parameters.json"

function Footer() {
    return (
        <AppBar sx={{backgroundColor: "black"}} position={"relative"}>
            <Container disableGutters>
                <Toolbar sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        width: '100%'
                    }}>
                    <Stack direction={"row"} spacing={2}>
                        {parameters.footerLinks.map((link, index) => (
                            // https://mui.com/material-ui/guides/routing/#link
                            <Button 
                                key={index} 
                                component={Link} 
                                to={link.URL} 
                                color={"warning"}>
                                <Typography sx={{fontWeight: 'bold'}}>{link.service}</Typography>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer