import React from 'react';
import { Flex, Spacer, Button, Center } from '@chakra-ui/react';

const NavigationBar = ({ currentView, onViewChange }) => {
  return (
    <Center>
      <Flex p={4} mb={4} align="center" bg="teal.500" color="white" w="50%">

        <Button
          flex="0.25"
          onClick={() => onViewChange('welcome')}
          mr={2}
          bg={currentView === 'welcome' ? 'yellow.400' : 'teal.500'}
        >
          Welcome
        </Button>


        <Button
          flex="0.25"
          onClick={() => onViewChange('offers')}
          mr={2}
          bg={currentView === 'offers' ? 'yellow.400' : 'teal.500'}
        >
          Offers
        </Button>


        <Button
          flex="0.25"
          onClick={() => onViewChange('bookings')}
          bg={currentView === 'bookings' ? 'yellow.400' : 'teal.500'}
        >
          Bookings
        </Button>


        <Spacer />


        <Button colorScheme="red">Log Out</Button>
      </Flex>
    </Center>
  );
};

export default NavigationBar;
