import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface ComponentProps {
  animal: {
    image: string;
    name: string;
    description: string;
  };
}

const DescriptionParagraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
}));

function AnimalCard({ animal }: ComponentProps) {
  return (
    <Box 
      sx={{
        display: 'flex',
        p: 3,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box 
        sx={{
          width: { xs: '91.666%', md: '75%', xl: '70%' },
          height: 400,
          overflow: 'hidden',
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          
          <Box sx={{ width: '60%', p: 1 }}>
            <Box
              component="img"
              src={animal.image}
              alt={animal.name}
              sx={{ 
                width: '100%',
                height: 200,
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
          
          
          <Box sx={{ 
            width: '40%',
            textAlign: 'center',
            p: 2
          }}>
            <Typography 
              variant="h5" 
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '1.25rem',
              }}
            >
              {animal.name}
            </Typography>
          </Box>
        </Box>
        
       
        <Box sx={{ 
          flexGrow: 1, 
          overflowY: 'auto',
          p: 2
        }}>
          {animal.description.split('\n\n').map((paragraph, index) => (
            <DescriptionParagraph key={index} variant="body1">
              {paragraph}
            </DescriptionParagraph>
          ))}
          <Button 
            size="small" 
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Подробнее
          </Button>
        </Box>
        
      </Box>
    </Box>
  );
}

export default AnimalCard;