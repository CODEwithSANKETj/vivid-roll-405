import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'
import { Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../Redux/store';
import { addToCart, calculate, changequantity } from '../Redux/Prod_redux/actions';
import { useToast } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';
function ProductDetails() {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const toast = useToast();
  const {id} = useParams();
  const [data,setdata] = useState(null)
  const [quantity,setquantiy] = useState(1)
  const dispatch = useDispatch()
  const cartData = useSelector((store)=>store.cart);
  console.log(cartData);
  function Addtocart(e,item){
    e.preventDefault()
    // Check if the product already exists in the cart
    //console.log(cartData.cart,'data');
  const productExists = cartData.cart.some((cartItem) => cartItem._id === item._id);

  if (productExists) {
    // Show a toast notification indicating that the product already exists
    toast({
      title: 'Product already in cart',
      description: 'This product is already in your cart.',
      status: 'info', // You can choose the toast status
      duration: 3000, // Duration for the toast
      isClosable: true,
    });
  } else {
    // If the product doesn't exist, add it to the cart
    dispatch(addToCart(item));
    toast({
      title: 'Product added to cart', // Set the title to "Product added to cart"
      status: 'success', // Use 'success' status for a green color
      duration: 3000, // Duration for the toast
      isClosable: true,
    });
    // Optionally, you can show a success toast here if needed
  }
    //console.log('Product added',item);
  }
  useEffect(()=>{
    //dispatch(calculate())
    axios.get(`https://dark-pink-rabbit-wear.cyclic.cloud/product/`)
    .then((res)=>{
      let data = res.data.data
      const product = data.find((p) => p._id === id);
      setdata(product)
    })
    .catch((err)=>{
      console.log(err);
    })
},[quantity])
  const handleMouseMove = (e) => {
    // Calculate the position of the cursor relative to the MainImageContainer
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    // Set the zoom position based on cursor position
    setZoomPosition({ x, y });
  };
  function set(value){
    //console.log('clicked');
    setquantiy((prevQuantity) => {
      const newQuantity = prevQuantity + value;
      dispatch(changequantity(newQuantity, data));
      return newQuantity; // Return the new quantity for the component's local state
    });
    
    
  }
  //console.log(quantity);
  return (
    
    <div>
      <Navbar/>
      <Div>
      <Left_div>
       
        <MainImageContainer >
          
        {data ? <Img src={`${data.image}`}/>: <Spinner
        
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  marginLeft='300px'
  marginTop='100px'
/>}
          </MainImageContainer>
          
          
      </Left_div>
      <div>
        {!data ? <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  marginRight='600px'
  marginTop='100px'
/> :<Right_div>
          <ProductTitle>{data.title}</ProductTitle>
          <Price>Rs. {data.price}</Price>
          <Desc>{data.details}</Desc>
          <p>Quantity:</p>
          <QuantityContainer>
            <QuantityButton disabled={quantity === 1} onClick={()=>set(-1)} >-</QuantityButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <QuantityButton disabled={quantity === 4} onClick={()=>set(1)} >+</QuantityButton>
          </QuantityContainer>
          <ButtonsContainer>
            <BuyNowButton>Buy Now</BuyNowButton>
            <AddToCartButton onClick={(e)=>Addtocart(e,data)}>Add to Cart</AddToCartButton>
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
        </Right_div>}
      </div>
      
    </Div>
    <Footer/>
    </div>
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
  transition: all 0.5s  ;
  overflow: hidden;
  &:hover {
    cursor: zoom-in;
    scale: 1.2;
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
`;

const Div = styled.div`
  display: flex;
  padding: 10vh;
`;

const Left_div = styled.div`  
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
  padding-bottom  :30px; ;
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
