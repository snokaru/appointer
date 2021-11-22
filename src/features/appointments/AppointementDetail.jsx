import React from 'react'
import { Box, IconButton,Button, useBreakpointValue, Heading, List, ListItem, ListIcon, Stack } from '@chakra-ui/react'
import { ChevronLeftIcon as LeftIcon, ChevronRightIcon as RightIcon } from '@chakra-ui/icons'
import { GoLocation, GoStar, } from 'react-icons/go'
import { AiOutlineInstagram } from 'react-icons/ai'

import Slider from 'react-slick'

import ContentBox from '../../components/ContentBox'

const settings = {
  dots: true, arrows: false, fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};



const AppointementDetail = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/7697401/pexels-photo-7697401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];
    const appointment = {
        id: 1,
        name: "John's Barber Shop",
        image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        dateStart: new Date('2021-04-18T11:00:00Z'),
        dateEnd: new Date('2021-04-18T12:00:00Z'),
        service: 'Basic Haircut',
        price: 50
    }

    return (
        <Box minH='90vh' padding={10}>
          <ContentBox mx={{base: 10, lg: 300}}>
          <Box
            width={'full'}
            overflow={'hidden'}
            position='relative'
          >
          <IconButton
            aria-label="left-arrow"
            borderRadius="full"
            colorScheme="blue"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()} icon={<LeftIcon />} />
          <IconButton
            aria-label="right-arrow"
            colorScheme="blue"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()} icon={<RightIcon />} />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            borderTopRadius={'lg'}
            key={index}
            height={'lg'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
    <Heading m={3} textAlign='center'>{appointment.name}</Heading>
    <List padding={10}>
      <ListItem>
        <ListIcon as={GoLocation} color='blue.400'/>
        Str. Tineretului, nr. 14
      </ListItem>
      <ListItem>
        <ListIcon as={GoStar} color='blue.400'/>
        4.75 / 5
      </ListItem>
      <ListItem>
        <ListIcon as={AiOutlineInstagram} color='blue.400'/>
        JohnTheBarber
      </ListItem>
    </List>
    </ContentBox>
    </Box>
        
    )
}



export default AppointementDetail
