import { Box } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AdminMainNavbar from "./AdminMainNavbar";
import { Button } from "@chakra-ui/react";

function AdminUsers() {
  // const { productsData, loading, error } = state;
  const [sorting, setSorting] = useState("");
  const [searching, setSearching] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      let res = await axios.get(
        "https://dark-pink-rabbit-wear.cyclic.cloud/users/getusers"
      );
      console.log(res.data)
      setAllUsers(res.data.allusers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box pb={"50px"}>
      <AdminMainNavbar/>
      <AdminNavbar />
      <CONTENT>
        <div className="mainContainer">
          <div className="adminOptions">
            <div className="searchbarSection">
              <input placeholder="Search..." />
            </div>
            <div className="sortingSection">
              <select name="sorting" id="sorting">
                <option value="">Sort By Name</option>
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody id="package_tbody">
              {
                allUsers.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><Button colorScheme="red">Block</Button></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </CONTENT>
    </Box>
  );
}
export default AdminUsers;

const CONTENT = styled.div`
  background-color: #f8e7e7;
  height: 100vh;
`;
