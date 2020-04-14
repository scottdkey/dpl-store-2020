import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const StyledContainer = styled.div`
  padding: 25px 12px 18px;
  background: 'red';
  };
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Price = styled.p`
  color: #fff;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;



const StyledCard = ({ title, description, price, main_image, alt_images }) => (
  <StyledContainer>
    {/* <Grid.Column>
      <MainImage>{main_image}</MainImage>
      <AltImages>{alt_images}</AltImages>
    </Grid.Column> */}
    <Grid.Column>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Grid.Column>
  </StyledContainer>
);

export default StyledCard;
