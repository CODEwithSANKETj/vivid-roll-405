import React from 'react';
import { Card, CardHeader, CardBody,Image,Stack,Heading,Text,Button, CardFooter } from '@chakra-ui/react'
import "./service.css";

const Service = () => {
  return (
    <div>
      <div className='service-img'>
        <img src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/dogwalking.jpg'  />
      </div>
      <div className='intro'>
          <h1 id='title'>Pet Care Services</h1>
          <p>At PAALTOO, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</p>
      </div>
        
              <Card 
                className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
             >
          <Image
            objectFit='cover'
            // maxW={{ base: '5%', sm: '50px' }}
            width={500}
            src='https://www.fetchpetcare.com/wp-content/uploads/2023/04/Img1-4.jpg'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Consistent Puppy-Sitting Services</Heading>

              <Text py='2'>
              If you want to help your puppy learn and grow just as fast as they can, you’re going to need to give them lots of attention and a consistent routine. While work and other responsibilities can be a struggle to balance, we are here to make sure the “consistent” part of in-home puppy care happens. Our local puppy sitters can assist you in creating a customized feeding, exercise, and potty schedule that makes sense for both you and your dog.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>

              <Card
               className='card'
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

          <Stack>
            <CardBody>
              <Heading size='md'>Dog Walking Services</Heading>

              <Text py='2'>
              Your dog needs daily exercise, but fitting a couple of thirty-minute walks into your daily schedule isn’t always easy. For the times when life is a little too chaotic to head home on your lunch break or walk around the neighborhood between work and dinner, we can help. We’ll make sure your dog gets to take their daily stroll so they can bark at all the local squirrels, smell all of the bushes, and, yes, even visit all the hydrants. We’ll even take photos along the way so you never miss a moment.

              Whether your pup has lots of energy and needs a long, leisurely stroll or needs a quick walk around the neighborhood for a bathroom break, we’ve got you covered. Our team of Fetch! Pet Care local dog walkers are here to ensure your pup gets the attention they need during their daily strolls. What’s more, all of our dog walkers are insured and bonded so you can rest easy knowing your pup is in good hands
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>

              <Card
               className='card'
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

          <Stack>
            <CardBody>
              <Heading size='md'>Overnight Pet Care Services</Heading>

              <Text py='2'>
              We all hate leaving our pets behind when heading out of town, but one way to make sure they’re as comfortable as possible is to provide them care in their familiar environment. With Fetch! in-home overnight pet care, we’ll have one of our highly-trained and background-checked sitters stay the night to take care of your pet’s food, water, bathroom, and exercise needs.

              With our “almost” overnight pet care, the sitter stops by your home later in the evening to make sure your pet has everything they need for a night at home alone. Then, the sitter will stop by again in the morning to tend to your pet’s needs. Your pet will be happy to stay in their comfortable, familiar home, and you can relax knowing they are taken care of.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>

              <Card
               className='card'
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

          <Stack>
            <CardBody>
              <Heading size='md'>Pet Medical Administration Services</Heading>

              <Text py='2'>
              Receiving medicine can be an undesirable and sometimes scary experience for a pet. But we can make it a little easier. Our medical administrators are experienced in more than just giving medicine. They take care to make sure your pet feels comfortable and safe throughout the experience. So whether your pet has been recently neutered, diagnosed with an illness, or just needs its monthly heartworm medication, leave it to us to get them their prescribed medication as scheduled.

              Along with our medical administration services, we offer numerous other pet care services, including daily walks, pet transportation, pet sitting, and overnight stays. Our team of trained professionals will ensure that all of your pet’s needs are taken care of and provide the best care and comfort for your pet.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
              </Card>
    </div>
  )
}

export default Service