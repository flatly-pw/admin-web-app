import React, { useState, useRef, useEffect } from 'react';
import ConfirmationDialog from './ConfirmationDialog';
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Radio,
    Textarea,
    Flex,
    RadioGroup,
    Image,
    Box} from '@chakra-ui/react';


  const OfferModal = ({ isOpen, onClose, offer }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const fileInputRef = useRef(null);


  useEffect(() => {

    setSelectedImage(null);

    if (offer && offer.image) {
      setSelectedImage(offer.image);
    }
  }, [isOpen, offer]);

  const handleClose = () => {
    setSelectedImage(null);
    onClose();
  };

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleConfirm = () => {

    


    setIsConfirmationOpen(false);
  };



  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{offer ? `Edit Offer: ${offer.name}` : 'Create New Offer'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

        {selectedImage ? (
  <Flex align="flex-end">
    <Image src={selectedImage} alt="Offer Preview" w="450px" h="300px" objectFit="cover" />
    <Box ml={4}>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input type="number" defaultValue={offer?.price} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" defaultValue={offer?.name} />
      </FormControl>
    </Box>
  </Flex>
) : (
  <Box>
    <Button
      w="450px"
      h="300px"
      bg="teal.500"
      color="white"
      fontSize="lg"
      onClick={() => {

        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      }}
    >
      {selectedImage ? 'Edit Image' : 'Select Image'}
    </Button>

    <Input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      ref={fileInputRef}
      style={{ display: 'none' }}
    />
  </Box>
)}

          <FormControl mt={4}>
            <FormLabel>Address Line 1</FormLabel>
            <Input type="text" defaultValue={offer?.addressLine1} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>City</FormLabel>
            <Input type="text" defaultValue={offer?.city} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Province</FormLabel>
            <Input type="text" defaultValue={offer?.province} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Postal Code</FormLabel>
            <Input type="text" defaultValue={offer?.postalCode} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Country</FormLabel>
            <Input type="text" defaultValue={offer?.country} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Area</FormLabel>
            <Input type="number" defaultValue={offer?.area} />
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>Allow Children:</FormLabel>
              <Checkbox defaultChecked={offer?.allowChildren} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>Allow Pets:</FormLabel>
              <Checkbox defaultChecked={offer?.allowPets} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Type of Place</FormLabel>
            <RadioGroup defaultValue={offer?.typeOfPlace}>
              <Flex>
                <Radio value="apartment" mr={3}>Apartment</Radio>
                <Radio value="house" mr={3}>House</Radio>
                <Radio value="room">Room</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number of Rooms</FormLabel>
            <Input type="number" defaultValue={offer?.numberOfRooms} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number of Bathrooms</FormLabel>
            <Input type="number" defaultValue={offer?.numberOfBathrooms} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number of Beds</FormLabel>
            <Input type="number" defaultValue={offer?.numberOfBeds} />
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>TV:</FormLabel>
              <Checkbox defaultChecked={offer?.isThereTV} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>WiFi:</FormLabel>
              <Checkbox defaultChecked={offer?.isThereWIFI} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>Kitchen:</FormLabel>
              <Checkbox defaultChecked={offer?.isThereKitchen} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4} display="flex" alignItems="center">
            <Flex>
              <FormLabel marginRight={2}>Air Conditioning:</FormLabel>
              <Checkbox defaultChecked={offer?.isThereAC} marginTop="-6px" />
            </Flex>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea defaultValue={offer?.description} />
          </FormControl>


        </ModalBody>

        <ModalFooter>

          {offer !== null ? (
            <>
              <Button colorScheme="teal" mr={3} onClick={() => setIsConfirmationOpen(true)}>
                Edit
              </Button>
              <Button colorScheme="red" mr={3} onClick={() => setIsConfirmationOpen(true)}>
                Delete
              </Button>
            </>
          ) : (
            <Button colorScheme="teal" mr={3} onClick={() => setIsConfirmationOpen(true)}>
              Confirm
            </Button>
          )}
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>

      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleConfirm}
      />
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;