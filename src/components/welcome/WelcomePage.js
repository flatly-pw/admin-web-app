import React from 'react';
import { Box, Button, Center, Text } from '@chakra-ui/react';

const WelcomePage = ({ onViewChange }) => {
  return (
    <Center>
      <Box p={4} mb={4} bg="white" w="50%">

        <Text align = "center" fontSize="xl" mb={4}>
          Welcome to Flatly, as an admin you are able to modify and add new offers, as well as watch over bookings
          made by our clients.
        </Text>


        <Button
          w="100%"
          colorScheme="teal"
          mb={2}
          onClick={() => onViewChange('offers')}
        >
          Offers
        </Button>
        <Button
          w="100%"
          colorScheme="teal"
          onClick={() => onViewChange('bookings')}
        >
          Bookings
        </Button>
      </Box>
    </Center>
  );
};

export default WelcomePage;
