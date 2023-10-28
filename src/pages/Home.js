import {Box, Container, Divider, List, ListItem, ListItemText, Paper, Stack, styled} from "@mui/material";
import poker from "../assets/royal_flush.png";

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
                src={poker}
            / >
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
