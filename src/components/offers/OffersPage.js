import React, { useState } from 'react';
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

  const handleViewClick = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleButtonAddClick = () => {
    setSelectedOffer(null);
    setIsModalOpen(true);
  };

  const offers = [
    {
      id: 1,
      name: 'Luxurious apartment',
      price: 3200,
      image: 'https://media.istockphoto.com/id/1289883686/photo/spacious-apartment-with-window-wall.jpg?s=612x612&w=0&k=20&c=u1avj_PrIxK_7TFf8rP6m0j3g7PyUyd-rgCzpF8SLao=',
      description: 'A comfortable and stylish apartment for your stay. This spacious and well-furnished apartment provides a luxurious experience with breathtaking views from every window. Perfect for those seeking tranquility and elegance during their travels.',
      addressLine1: 'Lenina',
      city: 'Moscow',
      province: 'Moscow',
      postalCode: '12-234',
      country: 'Russia',
      area: '2000',
      allowChildren: false,
      allowPets: false,
      typeOfPlace: "apartment",
      numberOfRooms: 6,
      numberOfBathrooms: 4,
      numberOfBeds: 3,
      isThereTV: true,
      isThereWIFI: true,
      isThereKitchen: false,
      isThereAC: true
    },
    {
      id: 2,
      name: 'Studio apartment',
      price: 550,
      image: 'https://media.istockphoto.com/id/863561484/photo/living-room-with-table.jpg?s=612x612&w=0&k=20&c=eO1hkbZnpjm7fgkO0F_Ea0oCh2WMoHPvJO4uluYH2oo=',
      description: 'Experience luxury in this spacious and modern loft. The studio apartment is designed with contemporary aesthetics, providing a cozy and artistic atmosphere. Ideal for individuals who appreciate unique and trendy living spaces.',
      addressLine1: 'Zielona',
      city: 'Warsaw',
      province: 'Warsaw',
      postalCode: '03-194',
      country: 'Poland',
      area: '1000',
      allowChildren: true,
      allowPets: false,
      typeOfPlace: "apartment",
      numberOfRooms: 4,
      numberOfBathrooms: 2,
      numberOfBeds: 3,
      isThereTV: true,
      isThereWIFI: true,
      isThereKitchen: true,
      isThereAC: true
    },
    {
      id: 3,
      name: 'Nice cosy flat',
      price: 750,
      image: 'https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-600nw-2154108011.jpg',
      description: 'Very nice flat, I totally recommend it, just look at my reviews! This cozy flat offers a warm and inviting ambiance, making it a perfect home away from home. Whether you are traveling for business or leisure, this flat provides a comfortable retreat.',
      addressLine1: 'Parkowa',
      city: 'Krakow',
      province: 'Lesser Poland',
      postalCode: '30-001',
      country: 'Poland',
      area: '800',
      allowChildren: true,
      allowPets: true,
      typeOfPlace: "flat",
      numberOfRooms: 3,
      numberOfBathrooms: 1,
      numberOfBeds: 2,
      isThereTV: true,
      isThereWIFI: true,
      isThereKitchen: true,
      isThereAC: false
    },
    {
      id: 4,
      name: 'Awesome place to stay',
      price: 900,
      image: 'https://images.pexels.com/photos/16103928/pexels-photo-16103928/free-photo-of-apartment-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'This is a quite big place, there is a huge TV and AC, so you will not die from heat like in other places around. Discover an awesome place to stay with modern amenities and a spacious interior. The apartment is equipped with the latest technology and offers a comfortable environment for a relaxing stay.',
      addressLine1: 'Piotrkowska',
      city: 'Lodz',
      province: 'Lodz',
      postalCode: '90-001',
      country: 'Poland',
      area: '1200',
      allowChildren: true,
      allowPets: true,
      typeOfPlace: "apartment",
      numberOfRooms: 5,
      numberOfBathrooms: 3,
      numberOfBeds: 4,
      isThereTV: true,
      isThereWIFI: true,
      isThereKitchen: true,
      isThereAC: true
    }
  ];
  

  return (
    <Center>
      <VStack spacing={4} align="stretch" w="50%">

        <HStack spacing={4} w="100%">
          <Input placeholder="Search..." flex="1" />
          <Select placeholder="Sort by" flex="1">
            <option value="priceDesc">Price: Descending</option>
            <option value="priceAsc">Price: Ascending</option>
            <option value="timeNewest">Time: Newest</option>
          </Select>
          <Button colorScheme="teal">Search offers</Button>
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
                <Image src={offer.image} alt={offer.name} w="320px" h="200px" objectFit="cover" />
                <Box position="absolute" top="5px" left="500px" p={2} bg="gray.100" color="black">
                  <strong>{offer.name}</strong>
                </Box>
                <Box position="absolute" top="44%" right="150px" p={2} bg="gray.100" color="black">
                  Price: ${offer.price}
                </Box>
                <Box position="absolute" top="50%" left="650px" transform="translate(-50%, -50%)" p={2} bg="gray.300" color="black" maxW="550px" rounded="md">
                  {offer.description}
                </Box>
                <Button colorScheme="teal" position="absolute" bottom="50%" right="20px" transform="translateY(50%)" onClick={() => handleViewClick(offer)}>
                  View
                </Button>
            </Box>

          ))}
        </Grid>


      </VStack>

      <OfferModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          offer={selectedOffer}
        />
    </Center>
  );
};

export default OffersPage;
