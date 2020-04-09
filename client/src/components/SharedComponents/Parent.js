import React from "react";
import styled from "styled-components";
import StyledCard from "./StyledCard";

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
  background: "white";
  color: "black";
`;

const Parent = () => {
  const price = "$5.00";

  return (
    <StyledContainer>
      <StyledCard
        title="The Benefits of Green Apples"
        price={price}
        description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
      />
    </StyledContainer>
  );
};

export default Parent;
