import React, { useState } from 'react';
import { Box, Flex, Center, Button, Input, Heading, Text } from '@chakra-ui/react';

const LoginPage = ({ onLogin, onViewChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {

    const response = await loginToBackend(email, password);

    if (response.status === 200) {
      const { jwtToken } = response.data;
      localStorage.setItem('jwtToken', jwtToken);
      setErrorMessage(null);
      onViewChange('welcome');
      onLogin();
    } else {
      console.log('Login failed');
      if (response.status === 401)
      {
        setErrorMessage("Please check if the email address and password are correct");
      }
    }
  };

  const loginToBackend = async (email, password) => {
    
    const apiUrl = 'https://pwflatlyreact.azurewebsites.net/auth/login';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {

        const { jwttoken } = data;
        return { status: response.status, data: { jwtToken: jwttoken } };
      } else {

        console.log('Login failed:', data.errorMessage);
        return { status: response.status, data: null };
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      return { status: 500, data: null };
    }
  };

  return (
        <Center h="100vh">
            <Box p={8} borderWidth="1px" borderRadius="md">
            <Flex justify="center">
                <Heading mb={4}>Flatly Login</Heading>
            </Flex>
            <Input
                placeholder="Email"
                mb={4}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                mb={4}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
            <Text color="red" mb={4}>
                {errorMessage}
            </Text>
            )}
            <Flex justify="center">
                <Button colorScheme="teal" onClick={handleLogin}>
                Login
                </Button>
            </Flex>
            </Box>
        </Center>
  );
};

export default LoginPage;
