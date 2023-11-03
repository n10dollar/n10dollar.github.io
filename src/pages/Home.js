import {
    Box,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {Image} from "mui-image";

// model website: https://www.taniarascia.com/
const listItems = ["A", "B", "C", "D"]

function Home() {
    return (
        <Container>
            <Grid container spacing={2} align={"center"} py={2}>
                <Grid item xs={12} sm={6} my={8}>
                    <Container style={{ background: '#ffff00' }}>
                        <Typography>Hey, I'm Neil!</Typography>
                        <Typography>Welcome to my digital studio.</Typography>
                        <Typography>I'm a software developer in Berkeley. I make open-source projects and write about code, design, and life. I like producing music, tennis, cooking, reading, chess, and poker.</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Image src={"/royal_flush.png"} />
                </Grid>
            </Grid>
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
