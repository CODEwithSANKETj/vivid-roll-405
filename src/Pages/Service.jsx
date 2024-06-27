import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Spinner,
} from "@chakra-ui/react";
import "../CSS/service.css";
import Service_cart from "../Components/Service_cart";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Service = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("https://paaltoo-backend.onrender.com/service_provider/get")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <div className="mainPage">
      <Navbar />

      {/* <div className='service-img'>
        <img src='https://www.fetchpetcare.com/wp-content/uploads/2023/08/hero.png'  />
      </div> */}

      <div className="serviceDetailsSection">
        <Heading className="mheading">Pet Care Services</Heading>
        <Text id="main_text" py="2" fontSize="xl">
          At PAALTOO, we serve pets of every type, age, and phase of life
          because we truly love animals. We show it with every belly rub, long
          walk, scratch behind the ear, and treat we give. We’d love to be your
          trusted sidekick for a healthy and happy pet because we know we can
          deliver trusted, quality care and a professional, stress-free
          experience for you.
        </Text>
      </div>
      {loading ? (
        <Spinner
          id="spinner"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Service_cart {...data[id]} />
      )}

      <Footer />
    </div>
  );
};

export default Service;
