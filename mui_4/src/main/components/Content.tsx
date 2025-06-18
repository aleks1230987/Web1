import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import AnimalCard from "C:/Users/staro/mui_lab1/src/main/components/AnimalCard";
import image1 from 'C:/Users/staro/mui_lab1/src/images/bear.jpg';
import image2 from 'C:/Users/staro/mui_lab1/src/images/lisa.jpg';
import image3 from 'C:/Users/staro/mui_lab1/src/images/nosorog.jpg';
import image4 from 'C:/Users/staro/mui_lab1/src/images/puma.jpg';
import image5 from 'C:/Users/staro/mui_lab1/src/images/racoon.jpg';
import image6 from 'C:/Users/staro/mui_lab1/src/images/ryas.jpg';
import image7 from 'C:/Users/staro/mui_lab1/src/images/slon.jpg';
import image8 from 'C:/Users/staro/mui_lab1/src/images/bear.jpg';

import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import structures from '../../data';



const imgData = structures.slice(0, -1);

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>

            {imgData.map((item, index) => (
                <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }} >
                     <AnimalCard animal={item}/>
                     <Box sx={{display: 'flex',
                        p: 3,
                        justifyContent: 'center',
                        width: '100%',}}>
                        <Link key={ index } to={ "/building/" + index }>
                            <Button 
                            size="small" 
                            sx={{
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                
                            }}
                            >
                            Подробнее
                            </Button>
                        </Link>

                     </Box>
                     
                </Grid>
            ))}
            
            </Grid>
        </Container>
    );
}
export default Content;
