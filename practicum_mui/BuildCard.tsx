import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface ComponentProps {
  building: {
    img: string;
    title: string;
    description: string[];
  };
  cardNumber: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  lineHeight: 1.6,
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

function BuildCard({ building, cardNumber }: ComponentProps) {
  const isEven = cardNumber % 2 === 0;

  return (
    <Card sx={{ 
      display: 'flex',
      flexDirection: {
        xs: isEven ? 'row-reverse' : 'row',
        md: isEven ? 'row-reverse' : 'row'
      },
      height: '100%',
      boxShadow: 3,
      overflow: 'hidden'
    }}>
      <Box sx={{
        width: { xs: '50%', md: '40%' },
        flexShrink: 0
      }}>
        <CardMedia
          component="img"
          alt={building.title}
          image={building.img}
          sx={{
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </Box>

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        p: { xs: 1, sm: 2, md: 3 }
      }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h6"
            sx={{ 
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            {building.title}
          </Typography>
          
          {building.description.map((item, ind) => (
            <StyledTypography 
              key={ind} 
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '0.9rem' } }}
            >
              {item}
            </StyledTypography>
          ))}
        </CardContent>

        <CardActions sx={{ 
          justifyContent: isEven ? 'flex-start' : 'flex-end',
          pt: 1,
          pb: { xs: 0, md: 1 }
        }}>
          <Button 
            size="small" 
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Подробнее
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default BuildCard;