import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';


function Footer() {
  return (
    <Box 
        component="footer" 
            sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) => theme.palette.grey[200]
        }}>
        <Container maxWidth="xl">
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                © 2025 Старовойтов Алексей Валерьевич Б9122-09.03.04
            </Typography>
            <Box>
                <Link href="#" sx={{ mx: 1 }}>Политика конфиденциальности</Link>
                <Link href="#" sx={{ mx: 1 }}>Условия использования</Link>
            </Box>
            </Box>
        </Container>
    </Box>
  );
}

export default Footer;