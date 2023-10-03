
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useToast } from '@chakra-ui/react';

import dog_pic from '../Images/Dog.png'
import bird_pic from '../Images/bird.png'
import toys_pic from '../Images/toys.png'
import cart_pic from '../Images/cart.png'
import cat_pic from '../Images/cat.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Prod_redux/actions'
import store from '../Redux/store'
import { Link, useSearchParams } from 'react-router-dom'
import { Skeleton, Spinner } from '@chakra-ui/react'
import Footer from '../Components/Footer';
function Product_list() {
  const toast = useToast();

    let [data,setdata] = useState([])
    let [refresh,setrefresh] = useState(true)
    let [isloading,setisloading] = useState(false)
    const itemsPerPage = 9;
    ///////PAGINATION////
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)
    //////////////////
    ///////Search Params///////
    const [searchParams , setSearchparams] = useSearchParams()
    const handleFilterClick = (category) => {
      // Update the 'category' query parameter when a button is clicked
      setSearchparams({ category });
      setCurrentPage(1);
    };
    const handleAllClick = () => {
      // If "All" is clicked, set the 'category' query parameter to an empty string
      setSearchparams({ category: '' });
      setCurrentPage(1);
    };
    //////////////////////////
    const dispatch = useDispatch()
    const cartData = useSelector((store)=>store.cart);
    console.log(cartData);
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

    function addtocart(e,item){
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
    }
    function filter(e){
      e.preventDefault()
      if(data.length>0){
        const FilteredData = data.slice();
        if(e.target.value!=='All'){
          const final_data = FilteredData.filter((item)=>{
            if(item.brand === e.target.value){
              return true
            }
            return false
          })
          setdata(final_data)
        }
        else{
          setrefresh(!refresh)
        }
        

      }
    }
  
  function sort(e) {
    e.preventDefault();
    if (data.length > 0) {
      const sortedData = data.slice();
      if (e.target.value == "Asc") {
        sortedData.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (e.target.value == "Des") {
        sortedData.sort((a, b) => {
          return b.price - a.price;
        });
      }

      setdata(sortedData);
    }
  }
  useEffect(() => {
    setisloading(true);
    const queryParams = new URLSearchParams();
    queryParams.append("page", currentPage);
    queryParams.append("limit", 9);
    const category = searchParams.get("category");
    if (category) {
      queryParams.append("category", category);
    }
    const queryString = queryParams.toString();
    console.log(queryString);
    axios
      .get(`https://dark-pink-rabbit-wear.cyclic.cloud/product/?${queryString}`)
      .then((res) => {
        setisloading(false);
        console.log(res.data.total);
        setTotalItems(res.data.total);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh, currentPage, searchParams]);

  return (
    <Main_Div>
      {/* //Filter Ribbon Starts here */}
      <Filter_Ribbon>
        <Filter_option onClick={handleAllClick}>
          <Filter_icon src={bird_pic} />
          All Types
        </Filter_option>
        <Filter_option onClick={() => handleFilterClick("cat")}>
          <Filter_icon src={cat_pic} />
          Cat Food
        </Filter_option>
        <Filter_option onClick={() => handleFilterClick("dog")}>
          <Filter_icon src={dog_pic} />
          Dog Food
        </Filter_option>

        <Filter_option onClick={() => handleFilterClick("dog_toy")}>
          <Filter_icon src={toys_pic} />
          Toys
        </Filter_option>
      </Filter_Ribbon>
      {/* Filter Ribbon Ends Here */}

      {/* Products div starts here */}
      <Product_div>
        {/* ---------------------Filter Section Insite Products Div */}
        <Product_filter_div>
          <FilterSection>
            <FilterLabel>Filter by Price:</FilterLabel>
            <Select onChange={sort}>
              <option value="">Select</option>
              <option value="Asc">Asc</option>
              <option value="Des">Des</option>
            </Select>
          </FilterSection>
          <FilterSection>
            <FilterLabel>Filter by Brand:</FilterLabel>
            <Select onChange={filter}>
              <option value="All">All</option>
              <option value="PAWSINDIA">PAWSINDIA</option>
              <option value="WHISKAS">WHISKAS</option>
              <option value="ROYAL CANIN">ROYAL CANIN</option>
              <option value="Wiskers">Wiskers</option>
              <option value="VET LIFE">VET LIFE</option>
            </Select>
          </FilterSection>
        </Product_filter_div>
        {/* --------------------------Filter Section Ends */}

        <Product_list_view_div>
          {isloading ? (
            <Spinner
              width="200px"
              height="200px"
              thickness="50px"
              speed="0.65s"
              emptyColor="gray.200"
              color="pink.500"
              size="xl"
              marginLeft='300px'
            />
          ) : (
            data.length > 0 &&
            data.map((data, index) => {
              return (
                <Link
                  key={index}
                  to={`/product_details/${data._id}`}
                  className="mainItemWrapper"
                >
                  <Product_item_div>
                    <Product_img src={data.image} />
                    <Product_detail>
                      <Brand>
                        <p>{data.brand}</p>
                      </Brand>
                      <Title>{data.title}</Title>
                      <ProductPriceContainer>
                        <Price>₹ {data.price}</Price>
                        <CartIconContainer onClick={(e) => addtocart(e, data)}>
                          <CartIcon src={cart_pic} alt="Cart Icon" />
                        </CartIconContainer>
                      </ProductPriceContainer>
                    </Product_detail>
                  </Product_item_div>
                </Link>
              );
            })
          )}
          {}
        </Product_list_view_div>
      </Product_div>

      {/* Products div end here */}

      <Pagination>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationInfo>
          Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
        </PaginationInfo>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= totalItems}
        >
          Next
        </PaginationButton>
      </Pagination>
      <Footer/>
    </Main_Div>
  );
}

export default Product_list;
const Title = styled.div`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;

const Brand = styled.div`
  justify-content: center;
  margin-left: 50px;
`;
const ProductPriceContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-top: -20px;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  gap: 5px;
  margin-bottom: 4px;
`;

const Price = styled.p`
  margin: 0;
  margin-left: 10px;
  color: orange;
  border: 1px solid orange;
  background-color: #f9f1e8;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 8px;
`;

const CartIconContainer = styled.div`
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #da7b7b;
  }
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Product_detail = styled.div`
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #d4a8a2;
`;

const Product_img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const Product_item_div = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  width: 200px;
  height: 275px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  box-shadow: 1px 1px 5px grey;
`;
const Filter_icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Filter_option = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  width: 100px;
  justify-content: center;
  border-radius: 10px;
  background-color: #e7cae1;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
const Product_list_view_div = styled.div`
  max-width: 1100px;
  margin: auto;
  border-radius: 30px;
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  .mainItemWrapper {
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Product_filter_div = styled.div`
  text-align: center;
  background-color: #ebafb9;
  padding: 100px 20px;
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  left: 0;
  top: 10%;
  height: 100vh;
`;
const Product_div = styled.div`
  margin-left: 16%;
  padding: 30px 50px;
`;

const Filter_Ribbon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px 20%;
  background-color: #ebafb9;
`;

const Main_Div = styled.div`
  background-color: white;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 5px;

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

const PaginationInfo = styled.span`
  font-size: 14px;
  margin: 0 10px;
`;