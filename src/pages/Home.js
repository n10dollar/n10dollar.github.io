import {
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
const listItems = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function Home() {
    return (
        <Container>
            <Grid container spacing={2} py={4}>
                <Grid item xs={12} sm={6} my={{xs: 0, sm: 5}}>
                    <Container>
                        <Typography variant={"h3"}>Hey, I'm Neil!</Typography>
                        <Divider sx={{ marginY: 1 }} />
                        <Typography variant={"h4"}>And welcome to my digital studio.</Typography>
                        <Typography variant={"body1"}>
                            I'm a software developer in Berkeley.
                            I make open-source projects and write about code, design, and life.
                            I like producing music, tennis, cooking, reading, chess, and poker.</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Image src={"/neiltendolkar.png"} />
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
