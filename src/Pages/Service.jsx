import React from 'react';
import { Card, CardHeader, CardBody,Image,Stack,Heading,Text,Button, CardFooter } from '@chakra-ui/react'

import "../CSS/service.css";

const Service = () => {
  return (
    <div className='mainPage'>
      <div className='service-img'>
        <img src='https://www.fetchpetcare.com/wp-content/uploads/2023/08/hero.png'  />
      </div>

      <div>
          <Heading className='heading' >Pet Care Services</Heading>
          <Text id='main_text' py='2' fontSize='xl'>At PAALTOO, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</Text>
      </div>
        
              <Card id='service_card'

                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
             >
          <Image
            objectFit='cover'
            // maxW={{ base: '50%', sm: '500px' }}
            width={500}
            src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/Img1-4.jpg'
            alt='Caffe Latte'
          />

          <Stack className='service_body'>
            <CardBody>
              <Heading className='heading' size='lg'>Consistent Puppy-Sitting Services</Heading>

              <Text className='text' fontSize='lg' py='2'>
              If you want to help your puppy learn and grow just as fast as they can, you’re going to need to give them lots of attention and a consistent routine. While work and other responsibilities can be a struggle to balance, we are here to make sure the “consistent” part of in-home puppy care happens. Our local puppy sitters can assist you in creating a customized feeding, exercise, and potty schedule that makes sense for both you and your dog.
              </Text>
            </CardBody>

            <CardFooter className='card_footer'>
              <Button className='button' variant='solid' colorScheme='teal' size='lg'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>


              <Card id='service_card'

                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
        >
          <Image
            objectFit='cover'
            width={500}
            src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/Img2-5.jpg'
            alt='Caffe Latte'
          />

          <Stack className='service_body'>
            <CardBody>
              <Heading className='heading' size='lg'>Dog Walking Services</Heading>

              <Text  className='text' fontSize='lg' py='2'>
              Your dog needs daily exercise, but fitting a couple of thirty-minute walks into your daily schedule isn’t always easy. For the times when life is a little too chaotic to head home on your lunch break or walk around the neighborhood between work and dinner, we can help. We’ll make sure your dog gets to take their daily stroll so they can bark at all the local squirrels, smell all of the bushes, and, yes, even visit all the hydrants. We’ll even take photos along the way so you never miss a moment.

              </Text>
            </CardBody>

            <CardFooter className='card_footer'>
              <Button className='button' variant='solid' colorScheme='teal' size='lg'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>


              <Card id='service_card'

                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
        >
          <Image
            objectFit='cover'
            width={500}
            src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/img4.jpg'
            alt='Caffe Latte'
          />

          <Stack className='service_body'>
            <CardBody>
              <Heading className='heading' size='lg'>Overnight Pet Care Services</Heading>

              <Text className='text' fontSize='lg' py='2'>
              We all hate leaving our pets behind when heading out of town, but one way to make sure they’re as comfortable as possible is to provide them care in their familiar environment. With Fetch! in-home overnight pet care, we’ll have one of our highly-trained and background-checked sitters stay the night to take care of your pet’s food, water, bathroom, and exercise needs.

              </Text>
            </CardBody>

            <CardFooter className='card_footer'>
              <Button className='button' variant='solid' colorScheme='teal' size='lg'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>


              <Card id='service_card'

                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
        >
          <Image
            objectFit='cover'
            width={500}
            src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/img6.jpg'
            alt='Caffe Latte'
          />

          <Stack className='service_body'>
            <CardBody>
              <Heading className='heading' size='lg'>Pet Medical Administration Services</Heading>

              <Text className='text' fontSize='lg' py='2'>
              Receiving medicine can be an undesirable and sometimes scary experience for a pet. But we can make it a little easier. Our medical administrators are experienced in more than just giving medicine. They take care to make sure your pet feels comfortable and safe throughout the experience. So whether your pet has been recently neutered, diagnosed with an illness, or just needs its monthly heartworm medication, leave it to us to get them their prescribed medication as scheduled.

              </Text>
            </CardBody>

            <CardFooter className='card_footer'>
              <Button className='button' variant='solid' colorScheme='teal' size='lg'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>  
              </Card>
    </div>
  )
}

export default Service