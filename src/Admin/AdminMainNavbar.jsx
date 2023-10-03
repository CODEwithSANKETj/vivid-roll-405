import { Button, useDisclosure } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import "../Components/Navbar.css";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function AdminMainNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Button colorScheme="red" onClick={onOpen}>
          Log out
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to logout?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 1000);
              }}
            >
              Yes
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AdminMainNavbar;
