import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const adImages = [
  'https://img.freepik.com/free-vector/flat-design-medical-facebook-ad_23-2149092570.jpg',
  'https://media.istockphoto.com/id/1256196921/vector/doctor-researcher-team-vector-illustration-cartoon-flat-scientist-doctor-characters-work-at.jpg?s=612x612&w=0&k=20&c=-PEoXCqNsfs6JoD6S9ZlVfgKV0d8gvrVmTECIgLDbRw=',
  'https://cdn.vectorstock.com/i/500p/18/59/online-pharmacy-service-posters-vector-42401859.jpg',
  'https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/2767787-Market-March-T4-Nutrition-New-Olly-Vitamins-Expert-Review-Products-Pros-Cons-and-More-1296x728-Header-e1be83.jpg?w=1155&h=1528',
];

const AdSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <>
    
    <div>
    <Box mx="auto" width="40%" maxWidth="40%">
      <Slider {...settings}>
        {adImages.map((url, index) => (
          <Box key={index} component="img" src={url} alt={`ad-${index}`} width="100%" />
        ))}
      </Slider>
      </Box>
      </div>
      
      
      
   
    </>
  );
};

export default AdSlider;
