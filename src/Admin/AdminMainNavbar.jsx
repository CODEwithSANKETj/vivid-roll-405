import { Button } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import "../Components/Navbar.css";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AdminMainNavbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="logoSection" onClick={() => navigate("/admin")}>
        <img src={logo} alt="PAALTOO Logo" />
      </div>

      <div className="adminGreeting">
        <Heading> Welcome Admin!</Heading>
      </div>

      <div className="nav-buttons">
        <Button colorScheme="red">Log out</Button>
      </div>
    </div>
  );
}

export default AdminMainNavbar;
