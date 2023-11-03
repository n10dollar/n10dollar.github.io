import {Box, Container, Divider, List, ListItem, ListItemText, Paper, Stack, styled, Typography} from "@mui/material";
import {Image} from "mui-image";

const listItems = ["A", "B", "C", "D"]

function Home() {
    return (
        <Container>
            <Box
                component={"img"}
                sx={{
                    width: "100%",
                    height: "300px"
                }}

            / >
            <Container>
                <Box>
                    <Stack>
                        <Typography>Hi!</Typography>
                        <Typography>I'm Neil</Typography>
                    </Stack>
                </Box>
                <Image src={"/royal_flush.png"} />
            </Container>
            <Stack>
                <List component="nav" aria-label="mailbox folders">
                    {listItems.map((listItem, index) => (
                        <>
                            <ListItem sx={{textAlign: "center"}}>
                                <ListItemText primary={listItem} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Stack>
        </Container>
    )
}

export default Home
