import styled from "styled-components";
import heroDog from "../Images/cutedog.png";
import petgrooming from "../Images/pet-grooming.png";
import veternary from "../Images/veternary.png";
import dogwithcat from "../Images/dogwithcat.jpg";
import heartPaw from "../Images/heartPaw.png";
import groomer1 from "../Images/groomer1.jpg";
import groomer2 from "../Images/groomer2.jpg";
import groomer3 from "../Images/groomer3.jpg";
import groomer4 from "../Images/groomer4.jpg";
import { Button, Heading } from "@chakra-ui/react";
function Home() {
  return (
    <HOME className="homePage">
      {/*  --------Hero Section Start-------- */}
      <div className="heroSection">
        <div className="heroLeft">
          <Heading as={"h1"} mb={"5"}>
            For your pets natural life and care
          </Heading>
          <div className="hero-buttons">
            <Button colorScheme="orange" borderRadius={"full"}>
              Our Services
            </Button>
            <Button colorScheme="green" borderRadius={"full"}>
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="heroRight">
          <img src={heroDog} alt="" />
        </div>
      </div>

      {/*---------Services Section Start----------*/}
      <div  className="servicesSection">
        <Heading as="h1" size={"sm"} color={"red"}>
          Care your your Pets
        </Heading>
        <Heading as="h1" size={"lg"}>
          What we do?
        </Heading>

        <div className="services">
          <div className="service">
            <img src={petgrooming} alt="" />
            <Heading as={"h3"}>Pet Grooming</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adfacere saepe dolore natus
              et nam, perferendis at rem.
            </p>
          </div>

          <div className="service">
            <img src={veternary} alt="" />
            <Heading as={"h3"}>Veternary Care</Heading>
            <p>
              Lorem ipsum dolor sit amet con numquam dicta facere saepe dolore
              natus et nam, perferendis at rem.
            </p>
          </div>

          <div className="service">
            <img src={petgrooming} alt="" />
            <Heading as={"h3"}>Service 3</Heading>
            <p>
              Lorem ipsum dolor sit amet consdicta facere saepe dolore natus et
              nam, perferendis at rem.
            </p>
          </div>

          <div className="service">
            <img src={veternary} alt="" />
            <Heading as={"h3"}>Service 4</Heading>
            <p>
              Lorem ipsum dolor sit amet cona numquam dicta facere saepe dolore
              natus et nam, perferendis at rem.
            </p>
          </div>
        </div>
      </div>
      {/*---------Services Section End----------*/}

      {/*---------------------About Section Start----------------------*/}
      <div className="aboutSection">
        <div className="aboutLeft">
          <img src={dogwithcat} alt="" />
        </div>
        <div className="aboutRight">
          <Heading as={"h1"}>Get the best for your Furry Friends!</Heading>
          <div className="normalInfo"></div>
          <div className="bulletInfo">
            <p>
              {
                "Discover top-quality veterinary care and expert pet grooming services at PAALTOO. We're dedicated to keeping your beloved pets happy, healthy, and well-cared for. Your furry friends deserve the best!"
              }
            </p>
            <ul>
              <li>
                <img src={heartPaw} alt="" className="bullet" />
                {
                  "Comprehensive Veterinary Care: From check-ups to surgeries, we've got it covered."
                }
              </li>
              <li>
                <img src={heartPaw} alt="" className="bullet" />
                {
                  "Experienced Veterinarians: Our caring experts prioritize your pet's well-being."
                }
              </li>
              <li>
                <img src={heartPaw} alt="" className="bullet" />
                {
                  "State-of-the-Art Grooming: Spoil your pets with our modern grooming techniques."
                }
              </li>
            </ul>
          </div>
          <div className="about-buttons">
            <Button colorScheme="orange">Our Services</Button>
          </div>
        </div>
      </div>

      {/*-----------------About Section End----------------*/}

      {/*--------------------Groomers Section Start---------------------*/}
      <div className="groomersSection">
        <Heading as={"h1"}>Meet Our Groomers</Heading>
        <div className="groomers">
          <div className="groomer">
            <img src={groomer1} alt="groomer1" />
            <Heading as="h1">Name Of Person</Heading>
            <Heading as="h3"> Designation</Heading>
          </div>

          <div className="groomer">
            <img src={groomer2} alt="groomer2" />
            <Heading as="h1">Name Of Person</Heading>
            <Heading as="h3"> Designation</Heading>
          </div>

          <div className="groomer">
            <img src={groomer3} alt="groomer3" />
            <Heading as="h1">Name Of Person</Heading>
            <Heading as="h3"> Designation</Heading>
          </div>

          <div className="groomer">
            <img src={groomer4} alt="groomer4" />
            <Heading as="h1">Name Of Person</Heading>
            <Heading as="h3"> Designation</Heading>
          </div>
        </div>
      </div>

      {/*--------------------Groomers Section End---------------------*/}
    </HOME>
  );
}

export default Home;

const HOME = styled.div`
  width: 100vw;
  margin: auto;
  padding: 20px 10%;
  color: #611243;

  .heroSection {
    display: flex;
    justify-content: space-around;
    font-family: "Signika", sans-serif;
    padding: 0 10%;
    border-radius: 40px;
  }

  .heroLeft {
    text-align: center;
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  .hero-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .heroLeft h1 {
    font-family: "Signika", sans-serif;
    font-size: 50px;
    margin-top: 15%;
  }

  .heroRight img {
    width: 70%;
    margin: auto;
    transform: scale(1.2);
    filter: drop-shadow(0.5px 0.3px 15px #e0cb70);
    transition: all ease-in 0.3s;
  }

  .heroRight img:hover {
    /* filter: drop-shadow( 0.5px 0.3px 15px #c25757); */
    filter: drop-shadow(0.5px 0.3px 60px #c99f2e);
  }

  .servicesSection {
    margin-top: 50px;
    padding: 40px;
    border-radius: 30px;
    background-color: #f1dce0;
    text-align: center;
  }

  .servicesSection h1 {
    font-family: "Signika", sans-serif;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 10px 50px;
  }

  .service {
    padding: 20px;
    background-color: #f7e7e7;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
    transition: all ease-in 0.3s;
  }

  .service img {
    width: 90%;
    background: linear-gradient(rgba(27, 91, 163, 0.5), rgba(2, 0, 0, 0.5));
    padding: 5px;
    border-radius: 50%;
  }

  .service h3 {
    font-family: "Signika", sans-serif;
    font-size: 25px;
  }

  .service:hover {
    background-color: rgba(153, 58, 137, 0.9);

    transform: scale(1.01);
    color: white;
  }

  .aboutSection {
    display: flex;
    margin-top: 40px;
    font-family: "Signika", sans-serif;
    padding-left: 10%;
  }
  .aboutLeft {
    width: 35%;
    padding: 20px;
  }
  .aboutLeft img {
    width: 90%;
    filter: drop-shadow(1px 1px 20px #e2b3dc);
    transform: rotate(5deg);
    border-radius: 30%;
    transition: all 0.5s;
  }

  .aboutLeft img:hover {
    filter: drop-shadow(1px 1px 100px pink);
    transform: rotate(-10deg);
  }

  .aboutRight {
    width: 60%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .aboutRight h1 {
    font-family: "Signika", sans-serif;
    margin-bottom: 20px;
  }

  .aboutRight p {
    margin-bottom: 20px;
  }

  .aboutRight ul {
    text-align: left;
    margin-bottom: 20px;
  }

  .aboutRight li {
    list-style: none;
    display: flex;
    padding: 3px;
  }

  .aboutRight li img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .groomersSection {
    margin-top: 50px;
    text-align: center;
    background-color: #f1dce0;
    padding: 2%;
    border-radius: 30px;
  }

  .groomers {
    margin-top: 30px;
    padding: 0 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3%;
  }

  .groomer {
    padding: 10%;
    background-color: #ffefef;
    border-radius: 120px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .groomer img {
    border-radius: 100px;
  }

  .groomer h1 {
    font-size: 20px;
    color: black;
  }

  .groomer h3 {
    font-size: 15px;
    color: orange;
  }
`;
