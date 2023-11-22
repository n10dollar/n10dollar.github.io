import { Stack, TextField, Button, Box, Typography} from "@mui/material"
import { useState } from "react"

function SendEmail() {
    const [name, setName] = useState("ExName")
    const [email, setEmail] = useState("ExEmail")
    const [message, setMessage] = useState("ExMsg")

    function sendEmail() {
        console.log({name, email, message})
    }

    return (
        <Stack py={2} spacing={2} alignItemsX="flex-start">
            <Typography variant={"h4"}>Reach me here!</Typography>
            <Stack spacing={1}>
                <TextField label="Name" variant="outlined" onChange={event => setName(event.target.value)} />
                <TextField label="Email" variant="outlined" onChange={event => setEmail(event.target.value)} />
                <TextField multiline label="Message" variant="outlined" onChange={event => setMessage(event.target.value)} />
            </Stack>
            <Box display={"flex"}>
                <Button onClick={sendEmail} variant={"contained"}>Send Email</Button>
            </Box>
        </Stack>
    )
}

export default SendEmail