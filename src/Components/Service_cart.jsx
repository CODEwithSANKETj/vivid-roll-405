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


const Service_cart = ({title,id,image,details,price}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  return (
    <div >
     
       <Card id='service_card'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
          <Image
            objectFit='cover'
            // maxW={{ base: '50%', sm: '500px' }}
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
                        <Input ref={initialRef} placeholder='Full name' />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Date</FormLabel>
                        <Input
                          placeholder="Select Date and Time"
                          size="md"
                          type="datetime-local"
                          />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Location</FormLabel>
                        <Input placeholder="location" />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Animale Type</FormLabel>
                        <Input placeholder="Animal Type" />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Price</FormLabel>
                        <Text>{`₹ ${price}/--`}</Text>
                      </FormControl>

                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3}>
                        Save
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