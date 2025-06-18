import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Content from "./Content";
import BoarPharagraph from "./BoarPharagraph";
import { 
  IconButton, 
  Box
} from '@mui/material';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import image1 from 'C:/Users/staro/mui_lab1/src/images/puma.jpg';
import image2 from 'C:/Users/staro/mui_lab1/src/images/lisa.jpg';
import image3 from 'C:/Users/staro/mui_lab1/src/images/nosorog.jpg';
import image4 from 'C:/Users/staro/mui_lab1/src/images/bear.jpg';
import image5 from 'C:/Users/staro/mui_lab1/src/images/racoon.jpg';

const WildAnimalsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((Next) => (Next === images.length - 1 ? 0 : Next + 1));
  };

  return (
    <div>
      
      <Navbar active="1" />

      <Box sx={{ position: 'relative', height: 400, overflow: 'hidden', mt: 2 }}>
        <Box 
          component="img"
          src={images[activeIndex]}
          sx={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            display: 'block'
          }}
          alt="Animal"
        />
        
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            transform: 'translateY(-50%)'
          }}
        >
          <ChevronLeft />
        </IconButton>
        
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 10,
            top: '50%',
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            transform: 'translateY(-50%)'
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <BoarPharagraph />

      <Content />

      <Footer />
    </div>
  );
};

export default WildAnimalsPage;