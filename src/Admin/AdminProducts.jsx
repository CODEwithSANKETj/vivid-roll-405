import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import "./admin.css";
import axios from "axios";
import AdminMainNavbar from "./AdminMainNavbar";

function AdminProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log("rendered",allProducts)

  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        "https://dark-pink-rabbit-wear.cyclic.cloud/product/"
      );
      setAllProducts(()=>res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  function sortingFunction(e) { 
    const sorting = e.target.value;
    let sorted = allProducts.slice();
    if(sorting === "asc"){
      sorted = sorted.sort((a, b) => a.price - b.price);
    }
    if(sorting === "desc"){
      sorted = sorted.sort((a, b) => b.price - a.price)
    }
    console.log(sorted);
    setAllProducts((prev)=>sorted);
  }

  useEffect(() => {
    getAllProducts();
  },[]);

  return (
    <Box pb={"50px"}>
      <AdminMainNavbar/>
      <AdminNavbar />
      <CONTENT>
        <div className="mainContainer">
          <div className="adminOptions">
            <div className="searchbarSection">
              <input placeholder="Search..."   />
            </div>
            <div className="sortingSection">
              <select name="sorting"  onChange={sortingFunction}>
                <option value="">Sort By Price</option>
                <option value="asc">Low To High</option>
                <option value="desc">High To Low</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="package_tbody">
              {allProducts.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.brand}</td>
                    <td>{product.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CONTENT>
    </Box>
  );
}
export default AdminProducts;

const CONTENT = styled.div`
  background-color: #f8e7e7;
  min-height: 100vh;
`;
