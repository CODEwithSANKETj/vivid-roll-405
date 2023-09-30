import React, { useState } from 'react';
import styled from 'styled-components';
// 
function ProductDetails() {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Calculate the position of the cursor relative to the MainImageContainer
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    // Set the zoom position based on cursor position
    setZoomPosition({ x, y });
  };
  return (
    <Div>
      <Left_div>
       
        <MainImageContainer >
          
        <Img src='https://pawsindia.com/cdn/shop/products/1_ee00a414-7e44-4ab6-8129-aadda2f19498.png?v=1685797240' />
          </MainImageContainer>
          
        
      </Left_div>
      <div>
        <Right_div>
          <ProductTitle>Royal Canin - Shih Tzu Adult Dry Food</ProductTitle>
          <Price>Rs. 300</Price>
          <Desc>Suitable for dogs over 10 months old, ROYAL CANIN® Shih Tzu Adult is specially formulated with all the nutritional needs of your adult Shih Tzu in mind.</Desc>
          <p>Quantity:</p>
          <QuantityContainer>
            <QuantityButton >-</QuantityButton>
            <QuantityDisplay>1</QuantityDisplay>
            <QuantityButton >+</QuantityButton>
          </QuantityContainer>
          <ButtonsContainer>
            <BuyNowButton>Buy Now</BuyNowButton>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ButtonsContainer>
          <Logo_Container>
            <img src="https://cdn.shopify.com/s/files/1/1199/8502/files/secured-payment-icon.png?v=1666161113" alt="" />
            
            <img src="https://cdn.shopify.com/s/files/1/1199/8502/files/COD-icon.png?v=1666161113" alt="" />
            
            <img src="https://cdn.shopify.com/s/files/1/1199/8502/files/exchange-icon.png?v=1666161113" alt="" />
            
          </Logo_Container>
          <Logo_text>
            <p>Secure payments</p>
            <p>COD Available</p>
            <p>Easy return</p>
          </Logo_text>
        </Right_div>
      </div>
    </Div>
  );
}
const ProductTitle = styled.h1`
  font-family: 'Roboto', sans-serif; /* Use your preferred font */
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold;
  color: #333; /* Text color */
  /* Add additional styles such as text-transform, letter-spacing, etc. */
`;

const Desc = styled.p`
  font-family: 'Roboto', sans-serif; /* Use your preferred font */
  font-size: 16px; /* Adjust the font size as needed */
  font-weight: normal;
  `
const MainImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: zoom-in;
  }
`
MainImageContainer

const MainImg = styled.img`
  width: 60%;
  height: 110%;
  
  transition: transform 0.2s; /* Add a smooth transition effect */
  transform-origin: 0 0;
`;
const ZoomedImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: zoom-out; /* Add cursor style to indicate zoom-out */

`;
const ZoomedImage = styled.img`
  position: absolute;
  max-width: 300%;
  transform-origin: 0 0;
  transform: scale(1);
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;

  ${MainImageContainer}:hover & {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Price = styled.p`
  color: #f33e5c;
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold;
  font-family: 'FontName', sans-serif;
`
const Logo_text = styled.div`
  width: 80%;
  height: 30px;
  color: grey;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`
const Logo_Container = styled.div`
  width: 80%;
  height: 50px;
  
  display: flex;
  margin: auto;
  margin-top: 10px;
  justify-content: space-between;
  
`
const Img = styled.img`
  width: 60%;
  height: 110%;
  align-items: center;
  margin-left: 100px;
  border: 1px solid brown;
`;

const Div = styled.div`
  display: flex;
`;

const Left_div = styled.div`
  border: 1px solid grey;
  width: 90%;
`;

const Right_div = styled.div`
  
  margin-left: 20px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85px;
  border: 1px solid grey;
  border-left: none;
  border-right: none;
`;

const QuantityButton = styled.button`
  color: #8c8b8b;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  //border: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;

`;

const QuantityDisplay = styled.div`
  margin: 0 10px;
  font-size: 18px;
  color: #090909;
`;

const ButtonsContainer = styled.div`
  display: flex; /* Add this line to make the buttons align horizontally */

  width: 80%;
  gap: 10px;
  margin-top: 20px;
  
  
`;

const BuyNowButton = styled.button`
  background-color: #ea5993; /* Green color for Buy Now button */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 45%;
  border-radius: 8px;
  height: 45px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  background-color: #030303; /* Blue color for Add to Cart button */
  color: white;
  padding: 10px 20px;
  border: none;
  width: 45%;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px;
  height: 45px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-weight: bold;
`;

export default ProductDetails;