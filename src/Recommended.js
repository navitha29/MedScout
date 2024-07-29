import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import './Recommended.css';

const tablets = [
  {
    name: "Ibuprofen",
    image: "https://apr.com.gr/wp-content/uploads/2021/11/file-20200319-22610-18gca3.jpg",
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used for relieving pain, reducing inflammation, and lowering fever.",
    alternative: {
      name: "Aspirin",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg",
      description: "Aspirin is a medication used to reduce pain, fever, or inflammation. It is also used in low doses to reduce the risk of a heart attack or stroke."
    }
  },
  {
    name: "Paracetamol",
    image: "https://meds.myupchar.com/99030/calpol-500-tablet-15-0.webp",
    description: "Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. It is typically used for mild to moderate pain relief.",
    alternative: {
      name: "Paraveganio",
      image: "https://axunio.eu/wp-content/uploads/2021/07/Paraveganio_Verpackung_04-1.png",
      description: "Paraveganio is a vegan alternative to paracetamol, offering similar pain and fever relief without animal-derived ingredients."
    }
  },
  {
    name: "Vomidin",
    image: "https://www.drdpharma.in/wp-content/uploads/2020/11/VOMIDIN-TAB..jpeg",
    description: "Vomidin is an antiemetic medication used to prevent nausea and vomiting. It is often prescribed for motion sickness or after surgery.",
    alternative: {
      name: "Vomistop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRVKcaLJdduROoVzs1mwiWXtvHsEsyPRGJA&s",
      description: "Vomistop is used to treat nausea and vomiting caused by various conditions. It works by blocking certain signals in the brain that trigger nausea and vomiting."
    }
  }
];

function Recommended() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlipClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom className="recommended-title">
        Most Bought Tablets
      </Typography>
      <Grid container spacing={4}>
        {tablets.map((tablet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={`recommended-card ${flippedCard === index ? 'flipped' : ''}`}>
              <CardContent className="recommended-card-front">
                <CardMedia
                  component="img"
                  height="140"
                  image={tablet.image}
                  alt={tablet.name}
                  className="recommended-card-media"
                />
                <Typography gutterBottom variant="h5" component="div" className="recommended-card-title">
                  {tablet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="recommended-card-description">
                  {tablet.description}
                </Typography>
                <Box mt={2}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className="recommended-button" 
                    onClick={() => handleFlipClick(index)}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
              <CardContent className="recommended-card-back">
                <CardMedia
                  component="img"
                  height="140"
                  image={tablet.alternative.image}
                  alt={tablet.alternative.name}
                  className="recommended-card-media"
                />
                <Typography gutterBottom variant="h5" component="div" className="recommended-card-title">
                  {tablet.alternative.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="recommended-card-description">
                  {tablet.alternative.description}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="secondary" className="recommended-button">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Recommended;
