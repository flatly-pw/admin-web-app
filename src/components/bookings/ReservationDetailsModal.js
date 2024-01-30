import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';

const ReservationDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!booking) {
    return null;
  }

  const {
    appartmentName,
    clientName,
    email,
    phoneNumber,
    systemOfBooking,
    startDate,
    endDate,
  } = booking;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reservation Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text>
              <strong>Apartment Name:</strong> {appartmentName}
            </Text>
            <Text>
              <strong>Name:</strong> {clientName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone Number:</strong> {phoneNumber}
            </Text>
            <Text>
              <strong>System that made the booking:</strong> {systemOfBooking}
            </Text>
            <Text>
              <strong>Start Date:</strong> {startDate}
            </Text>
            <Text>
              <strong>End Date:</strong> {endDate}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReservationDetailsModal;
