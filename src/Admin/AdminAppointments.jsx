import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import axios from "axios";

function AdminAppointments() {
  // const { productsData, loading, error } = store;
  const [sorting, setSorting] = useState("");

  const [allAppointments, setAllAppointments] = useState([]);

  const getAllAppointments = async () => {
    try {
      let res = await axios.get(
        "https://dark-pink-rabbit-wear.cyclic.cloud/service/",
        {
          headers: {},
        }
      );
      console.log(res.data);
      setAllAppointments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  return (
    <Box pb={"50px"}>
      <AdminNavbar />
      <CONTENT>
        <div className="mainContainer">
          <div className="adminOptions">
            <div className="sortingSection">
              <select value={sorting}>
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
                <th>Service</th>
                <th>Fees</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="package_tbody">
              {
                //We'll map appointments over here
              }
            </tbody>
          </table>
        </div>
      </CONTENT>
    </Box>
  );
}
export default AdminAppointments;

const CONTENT = styled.div`
  background-color: #f8e7e7;
  min-height: 100vh;
`;
