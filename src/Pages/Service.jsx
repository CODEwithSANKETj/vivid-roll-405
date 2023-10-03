
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody,Image,Stack,Heading,Text,Button,
  CardFooter,Spinner } from '@chakra-ui/react'
import "../CSS/service.css";
import Service_cart from '../Components/Service_cart';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Service= () => {
    const {id} = useParams()

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{

       getData()

    },[])
    
      const getData=async()=>{
        setLoading(true)
       await axios.get("https://dark-pink-rabbit-wear.cyclic.cloud/service_provider/get")
        .then((res)=>{
           setData(res.data)
           setLoading(false)
          // console.log(res.data)
        })
          .catch((err)=>console.log(err))
          setLoading(false)
      }
  //  console.log(data)

  return (
    <div className='mainPage'>
       <Navbar/>
      <div className='service-img'>
        <img src='https://www.fetchpetcare.com/wp-content/uploads/2023/08/hero.png'  />
      </div>

      <div>
          <Heading className='heading' >Pet Care Services</Heading>
          <Text id='main_text' py='2' fontSize='xl'>At PAALTOO, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</Text>
      </div>
      { loading ? ( 
        
                   <Spinner 
                        id='spinner'
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                      />
                      ):(
                        
                          // data.map((item)=>(
                          //     <Service_cart key={item._id} {...item}/>
                          // ))
                          <Service_cart {...data[id]}/>
                      
                      )}
       

                <Footer/>
       

     
    </div>
  )

}


export default Service