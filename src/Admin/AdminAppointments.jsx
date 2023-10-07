import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import axios from "axios";
import AdminMainNavbar from "./AdminMainNavbar";

function AdminAppointments() {
  // const { productsData, loading, error } = store;
  const [sorting, setSorting] = useState("");

  const [allAppointments, setAllAppointments] = useState([]);

  const getAllAppointments = async () => {
    try {
      let res = await axios.get(
        "https://dark-pink-rabbit-wear.cyclic.cloud/service/getappointment"
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
      <AdminMainNavbar/>
      <AdminNavbar />
      <CONTENT>
        <div className="mainContainer">
          <div className="adminOptions">
            <div className="sortingSection">
              <select >
                <option value="">Sort By Fees</option>
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
                <th>Pet Type</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody id="package_tbody">
              {
                allAppointments.map((appointment, index) => {
                  return (
                    <tr key={index}>
                      <td>{appointment._id}</td>
                      <td>{appointment.ServiceType}</td>
                      <td>{appointment.Price}</td>
                      <td>
                        { appointment.animalType}
                      </td>
                      <td>
                        {appointment.Name}
                      </td>
                    </tr>
                  );
                })
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
