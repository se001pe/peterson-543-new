"use client";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import React from 'react';

const AccordionUI: React.FC = () => {
return (
<div>
<Accordion>
<AccordionSummary
expandIcon={<MdOutlineArrowCircleDown />}
aria-controls="panel1-content"
id="panel1-header"
>
<Typography component="span">Accordion 1</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary
expandIcon={<MdOutlineArrowCircleUp />}
aria-controls="panel2-content"
id="panel2-header"
>
<Typography component="span">Accordion 2</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>
</div>
);
};
export default AccordionUI;

