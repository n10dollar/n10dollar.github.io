import { Box, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import parameters from "../data/parameters.json"

function AboutFacts() {
    return (
        <Box>
            {parameters.aboutFacts.map(fact => (
                <Accordion elevation={8}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{fact.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{fact.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default AboutFacts