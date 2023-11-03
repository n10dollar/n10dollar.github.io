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

const listItems = ["A", "B", "C", "D"]

function Home() {
    return (
        <Container>
            <Grid container spacing={0}>
                <Grid xs={12} sm={6}>
                    <Container style={{ background: '#ffff00' }}>
                        <Typography>Hi!</Typography>
                        <Typography>I'm Neil</Typography>
                    </Container>
                </Grid>
                <Grid xs={12} sm={6} >
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
