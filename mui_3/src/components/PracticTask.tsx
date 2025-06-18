import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DataItem {
  [key: string]: React.ReactNode;
}

interface CheckTitleProps {
  data: DataItem[];
}

const CheckTitle = ({ data }: CheckTitleProps) => {
  const [opened, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
};

  return (
    <div>
      {data.map((item, index) => {
        const title = Object.keys(item)[0];
        const content = item[title];
        const panelId = `panel-${index}`;

        return (
          <Accordion
            key={index}
            expanded={opened === panelId}
            onChange={(e, expanded) => handleChange(panelId, expanded)}
            sx={{ 
              mb: 2,
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '4px',
              '&:before': {
                display: 'none'
              }
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: opened === panelId ? 'action.selected' : 'background.paper',
                minHeight: '48px',
                '& .MuiAccordionSummary-content': {
                  my: 1
                }
              }}
            >
              <Typography variant="subtitle1" fontWeight={500}>
                {title}
              </Typography>
            </AccordionSummary>
            
            <AccordionDetails 
              sx={{ 
                borderTop: '1px solid', 
                borderColor: 'divider',
                backgroundColor: 'background.default'
              }}
            >
              <Typography component="div" variant="body1">
                {content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CheckTitle;