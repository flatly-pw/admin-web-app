import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  Select,
  VStack,
  HStack,
  Grid,
  Image,
  Center,
} from '@chakra-ui/react';

import OfferModal from './OfferModal';

const OffersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [offers, setOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(0);
  const [flatDetails, setFlatDetails] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          `https://pwflatlyreact.azurewebsites.net/admin/flats?page=${currentPage}&pageSize=4&name=${searchTerm}&sort=${sortOption}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
          }
        );
  
        const data = await response.json();
  
        if (response.status === 200) {
          setOffers(data.data || []);
          setLastPage(data.last);
        } else {
          console.error('Error fetching offers:', data.errorMessage);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };
    fetchOffers();
  }, [currentPage, searchTerm, sortOption]);


  const fetchOffers = async () => {
    try {
      const response = await fetch(
        `https://pwflatlyreact.azurewebsites.net/admin/flats?page=${currentPage}&pageSize=4&name=${searchTerm}&sort=${sortOption}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setOffers(data.data || []);
        setLastPage(data.last);
      } else {
        console.error('Error fetching offers:', data.errorMessage);
      }
    } catch (error) {
      console.error('Error during fetch:', error.message);
    }
  };


  const fetchFlatDetails = async (flatId) => {
    const apiUrl = `https://pwflatlyreact.azurewebsites.net/flats/${flatId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        console.log("dzialaaaaaaa");
        setFlatDetails(data);
      } else {
        console.error('Error fetching flat details');
      }
      
    } catch (error) {
      console.error('Error during fetchFlatDetails:', error.message);
      return { status: 500, data: null };
    }
  };


  const handleViewClick = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);

    fetchFlatDetails(offer.id);

  };

  const handleButtonAddClick = () => {
    setSelectedOffer(null);
    setIsModalOpen(true);
  };

  const handleNextPage = () => {
    if (!lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const defaultThumbnail = 'https://i.pinimg.com/originals/db/96/eb/db96eb8fb839502b5654e10cbcd6f626.jpg';

  return (
    <Center>
      <VStack spacing={4} align="stretch" w="50%">

        <HStack spacing={4} w="100%">
          <Input
              placeholder="Search..."
              flex="1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            placeholder="Sort by"
            flex="1"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value={0}>Price: Descending</option>
            <option value={1}>Price: Ascending</option>
            <option value={2}>Time: Newest</option>
          </Select>
          <Button colorScheme="teal" onClick={fetchOffers}>
            Search offers
          </Button>
        </HStack>
        
        <Button
          w="100%"
          colorScheme="teal"
          onClick={handleButtonAddClick}
          isDisabled={false} 
        >
          Create New Offer
        </Button>


        <Grid templateColumns="1fr" gap={4} w="100%">
          {offers.map((offer) => (
            <Box key={offer.id} p={4} borderWidth="1px" borderRadius="md" position="relative" bg="gray.100">
              <Image src={offer.thumbnail || defaultThumbnail} alt={offer.title} w="320px" h="200px" objectFit="cover" />
              <Box position="absolute" top="5px" left="500px" p={2} bg="gray.100" color="black">
                <strong>{offer.title}</strong>
              </Box>
              <Box position="absolute" top="44%" right="150px" p={2} bg="gray.100" color="black">
                Price: ${offer.pricePerNight}
              </Box>

              <Button colorScheme="teal" position="absolute" bottom="50%" right="20px" transform="translateY(50%)" onClick={() => handleViewClick(offer)}>
                View
              </Button>
            </Box>
          ))}
        </Grid>

        <HStack spacing={4} w="100%" justify="space-between">
          <Button onClick={handlePreviousPage} isDisabled={currentPage === 0}>
            Previous
          </Button>
          <Button onClick={handleNextPage} isDisabled={lastPage}>
            Next
          </Button>
        </HStack>


      </VStack>

      <OfferModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          offer={selectedOffer}
          flatDetails={flatDetails}
        />
    </Center>
  );
};

export default OffersPage;
