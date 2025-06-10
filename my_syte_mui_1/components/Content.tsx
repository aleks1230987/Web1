import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import AnimalCard from "./AnimalCard";
import image1 from 'C:/Users/staro/mui_lab1/src/images/bear.jpg';
import image2 from 'C:/Users/staro/mui_lab1/src/images/lisa.jpg';
import image3 from 'C:/Users/staro/mui_lab1/src/images/nosorog.jpg';
import image4 from 'C:/Users/staro/mui_lab1/src/images/puma.jpg';
import image5 from 'C:/Users/staro/mui_lab1/src/images/racoon.jpg';
import image6 from 'C:/Users/staro/mui_lab1/src/images/ryas.jpg';
import image7 from 'C:/Users/staro/mui_lab1/src/images/slon.jpg';
import image8 from 'C:/Users/staro/mui_lab1/src/images/bear.jpg';

const animals = [
    { name: 'Медведь', image: image1, description: 'Бурый медведь (или обыкновенный медведь) — млекопитающее семейства медвежьих; один из самых крупных наземных хищников...' },
    { name: 'Лиса', image: image2, description: 'Лисы — это мелкие или средние хищные млекопитающие из семейства псовых (Canidae)...' },
    { name: 'Носорог', image: image3, description: 'Носороги — это крупные млекопитающие, принадлежащие к семейству носороговых (Rhinocerotidae)...' },
    { name: 'Пума', image: image4, description: 'Пума выглядит сильной кошкой, у нее очень гибкое тело, с длинным мускулистым хвостом...' },
    { name: 'Енот', image: image5, description: 'Еноты — это небольшие млекопитающие из семейства енотовых (Procyonidae)...' },
    { name: 'Рысь', image: image6, description: 'Рыси — род хищных млекопитающих семейства кошачьих, наиболее близкий к роду кошек...' },
    { name: 'Слон', image: image7, description: 'Слоны — это крупнейшие наземные млекопитающие, относящиеся к семейству слоновых...' },
    { name: 'Медведь', image: image8, description: 'Бурый медведь (или обыкновенный медведь) — млекопитающее семейства медвежьих...' },
    { name: 'Медведь', image: image8, description: 'Бурый медведь (или обыкновенный медведь) — млекопитающее семейства медвежьих...' },
  ];

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>

            {animals.map((item, index) => (
                <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }} >
                     <AnimalCard animal={item}/>
                </Grid>
            ))}
            
            </Grid>
        </Container>
    );
}
export default Content;
