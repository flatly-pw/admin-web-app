import React, { useState} from 'react';
//import ConfirmationDialog from './ConfirmationDialog';
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react';


  const OfferModal = ({ isOpen, onClose, offer, flatDetails }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % flatDetails.gallery.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? flatDetails.gallery.length - 1 : prevIndex - 1
    );
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{offer?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div style={{ position: 'relative' }}>
            <img
              src={flatDetails?.gallery[currentImageIndex]}
              alt={offer?.name}
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
            <Button
              onClick={previousImage}
              style={{ position: 'absolute', top: '50%', left: '5px' }}
            >
              Previous Picture
            </Button>
            <Button
              onClick={nextImage}
              style={{ position: 'absolute', top: '50%', right: '5px' }}
            >
              Next Picture
            </Button>
          </div>

          {flatDetails && (
            <>
              <Text>Price: ${flatDetails?.pricePerNight}</Text>
              <Text>Name (Title): {flatDetails?.title}</Text>
              <Text>Rating: {flatDetails?.rating}</Text>
              <Text>Number of Reviews: {flatDetails?.numberOfReviews}</Text>
              <Text>Area: {flatDetails?.area ?? 'N/A'}</Text>
              <Text>Beds: {flatDetails?.beds ?? 'N/A'}</Text>
              <Text>Bedrooms: {flatDetails?.bedrooms ?? 'N/A'}</Text>
              <Text>Capacity: {flatDetails?.capacity ?? 'N/A'}</Text>
              <Text>Type: {flatDetails?.type ?? 'N/A'}</Text>
              <Text>
                Facilities:
                <input
                  type="text"
                  value={flatDetails?.facilities?.join(', ') ?? 'N/A'}
                  onChange={(e) => {
                  }}
                />
              </Text>
              <Text>Street: {flatDetails?.address?.street ?? 'N/A'}</Text>
              <Text>Postal Code: {flatDetails?.address?.postalCode ?? 'N/A'}</Text>
              <Text>City: {flatDetails?.address?.city ?? 'N/A'}</Text>
              <Text>Country: {flatDetails?.address?.country ?? 'N/A'}</Text>
              <Text>Latitude: {flatDetails?.address?.latitude ?? 'N/A'}</Text>
              <Text>Longitude: {flatDetails?.address?.longitude ?? 'N/A'}</Text>
              <Text>Flat Owner Name: {flatDetails?.owner?.name ?? 'N/A'}</Text>
              <Text>Flat Owner Last Name: {flatDetails?.owner?.lastName ?? 'N/A'}</Text>
              <Text>Flat Owner Email: {flatDetails?.owner?.email ?? 'N/A'}</Text>
              <Text>Flat Owner Phone Number: {flatDetails?.owner?.phoneNumber ?? 'N/A'}</Text>
              <Text>Description: {flatDetails?.description ?? 'N/A'}</Text>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;