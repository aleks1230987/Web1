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

type BuildingData = {
    title: string;
    img: string;
    description: string | string[];
};

function Building() {
    const { id } = useParams();
    const building: BuildingData = structures[Number(id)];

    const description = Array.isArray(building.description)
        ? building.description.join('\n')
        : building.description;

    return (
        <Box>
            <Navbar active="0" />

            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ mb: 3, mt: 12 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" style={{ textDecoration: 'none'}}>
                            <Button variant="text">Главная</Button>
                        </Link>
                        <Typography color="text.primary">{building.title}</Typography>
                    </Breadcrumbs>
                </Box>

                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    {building.title}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <img
                        src={building.img}
                        alt={building.title}
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
                                {building.description[0]}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body2" paragraph>
                                {building.description[1]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}

export default Building;