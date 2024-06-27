import { Box, Button, Center, Heading } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import AdminMainNavbar from "./AdminMainNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {

  const [allorders,setAllorders] = useState([]);
const getAllOrders = async () => {
  try {
    let res = await axios.get("https://paaltoo-backend.onrender.com/product/getorder");
    console.log(res.data);
    setAllorders(res.data);

  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
    getAllOrders();
  },[])

  return (
    <>
      <Box>
        <AdminMainNavbar/>
        <AdminNavbar />
        <CONTENT>
          <div className="mainContaineR">
            <Box backgroundColor="#f1b9b9" borderRadius={10} p={10}>
              <Heading as="h4" size="lg">
                Total Revenue
              </Heading>
              <Heading as="h4" size="lg">
                Rs. {allorders.reduce((acc, curr) => {
                  return acc+curr.price
                 }, 0)}
              </Heading>
            </Box>
            <Box backgroundColor="#f1b9b9" borderRadius={10} p={10}>
              <Heading as="h4" size="lg">
                Total Number of Orders
              </Heading>
              <Heading as="h4" size="lg">
                {allorders.length }
              </Heading>
            </Box>

          </div>
          <table>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody id="package_tbody">
              {
                allorders.map((order, index) => {
                  return (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.title}</td>
                      <td>{order.price}</td>
                      <td>{order.brand}</td>
                      <td>{order.category}</td>
                      <td>{order.userID}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </CONTENT>
      </Box>
    </>
  );
};

export default AdminPage;

const CONTENT = styled.div`
  background-color: #f8e7e7;
  height: 100vh;
  padding-top: 50px;

  .mainContaineR {
    width: 70%;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
`;
