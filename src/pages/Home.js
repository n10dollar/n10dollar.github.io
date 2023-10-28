import {Box, Container, Paper, Stack, styled} from "@mui/material";
import poker from "../assets/royal_flush.png";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
                <Item>This Could be you</Item>
                <Item>This Could be you</Item>
                <Item>This Could be you</Item>
                <Item>This Could be you</Item>
            </Stack>
        </Container>
    )
}

export default Home
