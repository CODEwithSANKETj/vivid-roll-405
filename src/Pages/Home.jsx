import styled from 'styled-components'
import heroDog from '../Images/cutedog.png'
import petgrooming from '../Images/pet-grooming.png'
import veternary from '../Images/veternary.png'
import allpets from '../Images/allpets.jpg'
import { Button, Heading } from '@chakra-ui/react'
function Home() {
  return (
    <HOME className='homePage'>

      {/*  --------Hero Section Start-------- */}
      <div className='heroSection'>
        <div className='heroLeft'>
          <Heading as={'h1'}>For your pets natural life and care</Heading>
          <div className='hero-buttons'>
          <Button colorScheme='orange'>Our Services</Button>
          <Button colorScheme='green'>Book Appointment</Button>
          </div>
        </div>
        <div className='heroRight'>
          <img src={heroDog } alt="" />
        </div>
      </div>

      {/*---------Services Section Start----------*/}
      <div className='servicesSection'>

        <div className='service'>
          <img src={ petgrooming} alt="" />
          <Heading as={'h3'}>Pet Grooming</Heading>
          <p>Lorem ipsum dolor sit amet consectetur adfacere saepe dolore natus et nam, perferendis at rem.</p>
        </div>

        <div className='service'>
          <img src={ veternary } alt="" />
          <Heading as={'h3'}>Veternary Care</Heading>
          <p>Lorem ipsum dolor sit amet con numquam dicta facere saepe dolore natus et nam, perferendis at rem.</p>
        </div>

                <div className='service'>
          <img src={ petgrooming} alt="" />
          <Heading as={'h3'}>Service 3</Heading>
          <p>Lorem ipsum dolor sit amet consdicta facere saepe dolore natus et nam, perferendis at rem.</p>
        </div>

        <div className='service'>
          <img src={ veternary} alt="" />
          <Heading as={'h3'}>Service 4</Heading>
          <p>Lorem ipsum dolor sit amet cona numquam dicta facere saepe dolore natus et nam, perferendis at rem.</p>
        </div>  
      </div>
      { /*---------Services Section End----------*/ }
      <div className=''></div>
    </HOME>
  )
}

export default Home

const HOME = styled.div`


width: 100vw;
margin: auto;
padding: 20px 10%;
color: #611243;

.heroSection{
  display: flex;
  justify-content: space-around;
  font-family: 'Signika', sans-serif;
  padding: 0 10%;
  background-color: #ebdee0;
  border-radius: 40px;
}

.heroLeft{
  text-align: center;
  width: 60%;
  background-color: ;
  display: flex;
  flex-direction: column;
}

.hero-buttons{
  display: flex;
  gap: 10px;
  justify-content: center;
}

.heroLeft h1{
  font-family: 'Signika', sans-serif;
  font-size: 50px;
  margin-top: 15%;
}

.heroRight img{
width: 70%;
margin: auto;
transform: scale(1.2);
filter: drop-shadow(0.5px 0.3px 15px #e0cb70);
}

.servicesSection{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding: 40px;
  gap: 30px;
}

.service{
  padding:20px;
  background-color: #f7e7e7;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  transition: all ease-in 0.3s;
}

.service img{
  width: 90%;
  background:linear-gradient( rgba(27, 91, 163, 0.5), rgba(2, 0, 0, 0.5));
  padding: 5px;
  border-radius: 50%;
  
}

.service h3{
  font-family: 'Signika', sans-serif;
  font-size: 25px;
}

.service:hover{
  /* background-color: #ff9900; */
  transform: scale(1.01);
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${allpets});
  color:white
}

`