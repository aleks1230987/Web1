import { useParams, Link } from 'react-router-dom';
import structures from '../data';
import {
    Box,
    Typography,
    Container,
    Breadcrumbs,
    Button,
    Grid
} from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


type AnimalData = {
    title: string;
    img: string;
    description: string | string[];
};

function Animal() {
    const { id } = useParams();
    const animal: AnimalData = structures[Number(id)];

    const description = Array.isArray(animal.description)
        ? animal.description.join('\n')
        : animal.description;

    return (
        <Box>
            <Navbar active="0" />

            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ mb: 3, mt: 0 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" style={{ textDecoration: 'none'}}>
                            <Button variant="text">Главная</Button>
                        </Link>
                        <Typography color="text.primary">{animal.title}</Typography>
                    </Breadcrumbs>
                </Box>

                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    {animal.title}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img
                        src={animal.img}
                        alt={animal.title}
                        style={{
                            maxWidth: '100%',
                            maxHeight: 500,
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body1" paragraph>
                                {animal.description[0]}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body2" paragraph>
                                {animal.description[1]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}

export default Animal;