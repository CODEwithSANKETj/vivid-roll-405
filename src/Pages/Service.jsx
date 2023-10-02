import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Heading, Text } from '@chakra-ui/react';
import "../CSS/service.css";
import Service_cart from '../Components/Service_cart';


const Service= () => {
 

    const [data,setData]=useState([]);

    useEffect(()=>{

       getData()

    },[])
    
      const getData=async()=>{
       await axios.get("https://dark-pink-rabbit-wear.cyclic.cloud/service_provider/get")
        .then((res)=>{
           setData(res.data)
          // console.log(res.data)
        })
          .catch((err)=>console.log(err))
      }
   console.log(data)

  return (
    <div className='mainPage'>
      <div className='service-img'>
        <img src='https://www.fetchpetcare.com/wp-content/uploads/2023/08/hero.png'  />
      </div>
      <div>
          <Heading className='heading' >Pet Care Services</Heading>
          <Text id='main_text' py='2' fontSize='xl'>At PAALTOO, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</Text>
      </div>
        {
            data.map((item)=>(
                <Service_cart key={item._id} {...item}/>
            ))
        }
    </div>
  )

}


export default Service