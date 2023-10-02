import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminNavbar = () => {
  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="space-around"
      alignItems="baseline"
      boxShadow="md"
      backgroundColor="#f1b9b9"
    >
      <NAVOPTIONS>
        <Link to="/admin">Sales</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/appointments">Appointments</Link>
        {/* <Link to="/admin/addnew">All Admins</Link> */}
      </NAVOPTIONS>
    </Box>
  );
};

export default AdminNavbar;

const NAVOPTIONS = styled.div`
  background-color: #f8e7e7;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 50px;

  a {
    background-color: #f1b9b9;
    border-radius: 30px;
    padding: 5px;
    width: 8rem;
    text-align: center;
    transition: all 0.3s;
  }

  a:hover {
    background-color: #d48686;
    color: white;
  }

  a:active {
    background-color: grey;
  }
`;
