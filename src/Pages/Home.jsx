import styled from "styled-components";
import "./Home.css";
import { Link } from "react-scroll";
import heroDog from "../Images/cutedog.png";
import petgrooming from "../Images/pet-grooming.png";
import veternary from "../Images/veternary.png";
import dogwithcat from "../Images/dogwithcat.jpg";
import heartPaw from "../Images/heartPaw.png";
import groomer1 from "../Images/groomer1.jpg";
import groomer2 from "../Images/groomer2.jpg";
import groomer3 from "../Images/groomer3.jpg";
import groomer4 from "../Images/groomer4.jpg";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import github from "../Images/github.png";
import { PhoneIcon, EmailIcon, LinkIcon } from "@chakra-ui/icons";
import { Button, Heading } from "@chakra-ui/react";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <HOME className="homePage">
        {/*  --------Hero Section Start-------- */}
        <div className="heroSection">
          <div className="heroLeft">
            <Heading as={"h1"} mb={"5"}>
              For your pets natural life and care
            </Heading>
            <div className="hero-buttons">
              <Link
                to="servicesSectionContainer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button colorScheme="orange" borderRadius={"full"}>
                  Our Services
                </Button>
              </Link>
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
        <div className="servicesSectionContainer" id="servicesSectionContainer">
          <div className="servicesSection" id="servicesSection">
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
                  Lorem ipsum dolor sit amet consectetur adfacere saepe dolore
                  natus et nam, perferendis at rem.
                </p>
              </div>

              <div className="service">
                <img src={veternary} alt="" />
                <Heading as={"h3"}>Veternary Care</Heading>
                <p>
                  Lorem ipsum dolor sit amet con numquam dicta facere saepe
                  dolore natus et nam, perferendis at rem.
                </p>
              </div>

              <div className="service">
                <img src={petgrooming} alt="" />
                <Heading as={"h3"}>Service 3</Heading>
                <p>
                  Lorem ipsum dolor sit amet consdicta facere saepe dolore natus
                  et nam, perferendis at rem.
                </p>
              </div>

              <div className="service">
                <img src={veternary} alt="" />
                <Heading as={"h3"}>Service 4</Heading>
                <p>
                  Lorem ipsum dolor sit amet cona numquam dicta facere saepe
                  dolore natus et nam, perferendis at rem.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*---------Services Section End----------*/}
        {/*---------------------About Section Start----------------------*/}
        <div className="aboutSectionContainer">
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
        {/*--------------------- Contact Section Start ---------------------*/}
        <div className="contactSectionContainer">
          <div className="contactSection" id="contactSection">
            <div className="contactLeft">
              <Heading as={"h1"} size={"xl"}>
                Have a Suggesstion? Feel free to Drop a Message
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                voluptas dignissimos nulla quis quos dolores laboriosam animi
                quisquam blanditiis magnam? Nemo facere doloribus dolore
                exercitationem?
              </p>

              <div className="contactDetailsSection">
                <div>
                  <PhoneIcon />
                  <Heading as={"h3"}>Phone:</Heading>
                  <p>+91 9899988989</p>
                </div>
                <div>
                  <EmailIcon />
                  <Heading as={"h3"}>Email:</Heading>
                  <p>info@paaltoo.com</p>
                </div>
                <div>
                  <LinkIcon />
                  <Heading as={"h3"}>Address:</Heading>
                  <p>123 Main St, Bangalore, Karnataka, India</p>
                </div>
              </div>
              <div className="contactLinksSection">
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={github} alt="" />
              </div>
            </div>

            <div className="contactRight">
              <form className="contactInfo">
                <label>
                  <Heading as={"h3"} size={"l"}>
                    Name
                  </Heading>
                  <input type="text" placeholder="e.g Saurabh Maske" />
                </label>
                <label>
                  <Heading as={"h3"} size={"l"}>
                    Email
                  </Heading>
                  <input
                    type="email"
                    placeholder="e.g saurabhmaske@gmail.com"
                  />
                </label>
                <label>
                  <Heading as={"h3"} size={"l"}>
                    Phone
                  </Heading>
                  <input type="number" placeholder="Phone Number" />
                </label>
                <label>
                  <Heading as={"h3"} size={"l"}>
                    Description
                  </Heading>
                  <textarea
                    type="text"
                    placeholder="Write description or a message"
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  className="contactSectionsubmitButton"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </form>
            </div>
          </div>
        </div>
        {/*--------------------- Contact Section End ---------------------*/}
      </HOME>
      <Footer />
    </>
  );
}

export default Home;

const HOME = styled.div`
  width: 100vw;
  margin: auto;
  padding: 20px 10%;
  color: #611243;
  font-family: "Signika", sans-serif;
  background-color: #f8e7e7;
`;
