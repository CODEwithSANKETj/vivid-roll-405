import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody,Image,Stack,Heading,Text,Button, CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure,Input,FormControl,FormLabel } from '@chakra-ui/react'
import "../CSS/service.css";
import axios from 'axios';
import { useSelector } from 'react-redux';


const Service_cart = ({title,id,image,details,price}) => {
  

  const token=useSelector((state)=>state.auth);
  // const cartData = useSelector((store)=>store.cart);
  console.log(token)
  

  const { isOpen, onOpen, onClose,  } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

   const [name,setName]=useState("");
   const [date,setDate]=useState("");
   const [location,setLocation]=useState("");
   const [type,setType]=useState("");

     const handleBooking=async()=>{
       const service={Name:name,Price:price,address:location,date:date,animalType:type};
       console.log(service)
       
       try {
        await  axios.post("https://dark-pink-rabbit-wear.cyclic.cloud/service/register",service)
                .then((res)=>{
                  console.log(res)
                })
                .catch((err)=>console.log(err))
      } catch (error) {
            console.log(error)
      }

           
       
          
     }
 
  



  return (
    <div >
     
       <Card id='service_card'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
          <Image
            objectFit='cover'
            width={500}
            src={image}
            alt='Caffe Latte'
          />

          <Stack className='service_body'>
            <CardBody>
              <Heading className='heading' size='lg'>{title}</Heading>

              <Text className='text' fontSize='lg' py='2'>
              {details}
              </Text>
            </CardBody>

            <CardFooter className='card_footer'>
              <Button className='button' onClick={onOpen} variant='solid' colorScheme='teal' size='lg'>
                Book Service
              </Button>
                        <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{`Book for ${title}`}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Full name</FormLabel>
                        <Input ref={initialRef} placeholder='Full name' onChange={(e)=>setName(e.target.value)} />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Date</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="datetime-local"
                          onChange={(e)=>setDate(e.target.value)}
                          />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Location</FormLabel>
                        <Input placeholder="location" onChange={(e)=>setLocation(e.target.value)} />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Animale Type</FormLabel>
                        <Input placeholder="Animal Type" onChange={(e)=>setType(e.target.value)} />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Price</FormLabel>
                        <Text>{`₹ ${price}/--`}</Text>
                      </FormControl>

                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={handleBooking} colorScheme='blue' mr={3}>
                        process to book
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </CardFooter>
          </Stack>
              </Card>

             
    </div>
  )
}

export default Service_cart