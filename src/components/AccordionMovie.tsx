import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const AccordionMovie = ({ title, children }: Props) => {
  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            height: '50px',
            '&.Mui-expanded': {
              minHeight: '0',
              borderBottom: '1px solid grey',
            },
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '30px 16px' }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionMovie;
