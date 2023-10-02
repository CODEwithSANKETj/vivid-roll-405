import { Box, Button, Center, Heading } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";

const AdminPage = () => {
  return (
    <>
      <Box>
        <AdminNavbar />
        <CONTENT>
          <Center>
            <Button
              backgroundColor="#c75454"
              colorScheme="orange"
              color="white"
              fontWeight="thin"
            >
              Get Latest Sales Data
            </Button>
          </Center>
          <div className="mainContaineR">
            <Box backgroundColor="#f1b9b9" borderRadius={10} p={10}>
              <Heading as="h4" size="lg">
                Todays Sales
              </Heading>
              <Heading as="h4" size="lg">
                $ 0.00
              </Heading>
            </Box>
            <Box backgroundColor="#f1b9b9" borderRadius={10} p={10}>
              <Heading as="h4" size="lg">
                Week Sales
              </Heading>
              <Heading as="h4" size="lg">
                $ 0.00
              </Heading>
            </Box>
            <Box backgroundColor="#f1b9b9" borderRadius={10} p={10}>
              <Heading as="h4" size="lg">
                Month Sales
              </Heading>
              <Heading as="h4" size="lg">
                $ 0.00
              </Heading>
            </Box>
          </div>
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
