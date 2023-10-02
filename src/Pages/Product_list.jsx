import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import dog_pic from '../Images/Dog.png'
import bird_pic from '../Images/bird.png'
import toys_pic from '../Images/toys.png'
import cart_pic from '../Images/cart.png'
import cat_pic from '../Images/cat.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Prod_redux/actions'
import store from '../Redux/store'
import { Link } from 'react-router-dom'
function Product_list() {
    let [data,setdata] = useState([])
    let [refresh,setrefresh] = useState(true)
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const cartData = useSelector((store)=>store.cart);
    //console.log(cartData);
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
    function addtocart(e,item){
      e.preventDefault()
      dispatch(addToCart(item))
      //console.log('Product added',item);
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
    function sort(e){
      e.preventDefault()
      if(data.length>0){
        const sortedData = data.slice();
        if(e.target.value=="Asc"){
          sortedData.sort((a,b)=>{
            return a.price - b.price
          })
        }
        if(e.target.value=='Des'){
          sortedData.sort((a,b)=>{
            return b.price - a.price
          })
        }
        setdata(sortedData)
      }
    }
    useEffect(()=>{
        axios.get(`https://dark-pink-rabbit-wear.cyclic.cloud/product/`)
        .then((res)=>{
          console.log(res.data.data);
          setdata(res.data.data)
        })
        .catch((err)=>{
          console.log(err);
        })
    },[refresh])
  return (
    <Main_Div>
        <Filter_div>
            <Filter_option>
                <Filter_icon src={cat_pic}/>
                Cat Food
            </Filter_option>
            <Filter_option>
            <Filter_icon src={dog_pic}/>
                Dog Food
            </Filter_option>
            <Filter_option>
            <Filter_icon src={bird_pic}/>
                Bird Food
            </Filter_option>
            <Filter_option>
            <Filter_icon src={toys_pic}/>
                Toys
            </Filter_option>
        </Filter_div>
        <Product_div>
            <Product_filter_div>
            <FilterContainer>
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
                </FilterContainer>
          </Product_filter_div>
    <Product_list_view_div>
    {data.length>0 && data.map((data,index)=>{
        return <Link key={index} to={`/product_details/${data._id}`} >
          <Product_item_div >
        <Product_img src={data.image}/>
        
        <Product_detail>
            <Brand>
            <p>{data.brand}</p>
            </Brand>
            <Title>{data.title}</Title>
          <ProductPriceContainer>
            <Price>₹ {data.price}</Price>
            <CartIconContainer onClick={(e)=>addtocart(e,data)}>
                <CartIcon src={cart_pic} alt="Cart Icon" />
            </CartIconContainer>
          </ProductPriceContainer>
          </Product_detail>
      </Product_item_div>
        </Link>
    })}
          
            
    </Product_list_view_div>

        </Product_div>

        <Pagination>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationInfo>
          Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
        </PaginationInfo>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= data.length}
        >
          Next
        </PaginationButton>
      </Pagination>
    </Main_Div>
  )
}

export default Product_list
const Title = styled.div`
 max-width: 200px; /* Adjust the value as needed */

/* Add ellipsis (...) for text overflow */
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-bottom: 20px;
`

const Brand =styled.div`
justify-content: center;
margin-left: 50px;

`
const ProductPriceContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-top: -20px;
  //border: 1px solid red;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  gap: 5px;
  margin-bottom: 4px;
  /* Other styles for the container */
`;

const Price = styled.p`
  margin: 0; /* Remove default margin */
  margin-left: 10px;
  color: orange;
  border: 1px solid orange;
  background-color: #f9f1e8;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 8px;
  /* Other styles for the price text */
`;

const CartIconContainer = styled.div`
  cursor: pointer; /* Change cursor to pointer on hover */
  /* Other styles for the cart icon container */
  margin-right: 10px;
  &:hover {
    /* Add hover styles for the cart icon container here */
    background-color: lightgray; /* Example background color change on hover */
  }
`;

const CartIcon = styled.img`
  width: 20px; /* Adjust the icon size as needed */
  height: 20px;
  /* Other styles for the icon */
`;
const Product_detail = styled.div`
justify-content: center;
align-items: center;
//border: 1px solid red;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
background-color: #fddab8;
`

const Product_img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
    
    
`
const Product_item_div = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    //padding-bottom: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    width: 200px;
    height: 275px;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
const Filter_icon = styled.img`
  width: 20px; /* Adjust the icon size as needed */
  height: 20px;
  
  /* Other styles for the icon */
`;

const Filter_option = styled.div`
    display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  width: 100px;
  justify-content: center;

  border-radius: 10px;
  background-color: white;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: lightgray; /* Change the background color on hover */
    /* Add other hover effects if needed */
  } 
`
const Product_list_view_div = styled.div`
background-color: #fafafa;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 columns */
  gap: 70px;
  margin-top: 50px;
  margin-bottom: 50px;
`
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
 gap: 50px;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  height: auto;
    

`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Product_filter_div = styled.div`
border: 1px solid red;
display: flex;
flex-direction: row;
margin-top: 50px;
height: 300px;
margin-right: 100px;
position: sticky; /* Make the filter container sticky */
  top: 0; /* Position it at the top of its containing element */
  align-self: flex-start;
//position: absolute;
top: 0;

`
const Product_div = styled.div`
  background-color: #ffffff;
  display: flex;

  /* Additional styles for grid items if needed */
`;

const Filter_div = styled.div`
display: flex;
justify-content: space-around;
background-color: #ffffff;
width: 80%;
`

const Main_Div = styled.div`
border: 1px solid black;
background-color: #ffffff;
display: flex;
align-items: center;
flex-direction: column;

`

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