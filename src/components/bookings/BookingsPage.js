import React, { useState } from 'react';
import { Box, Button, Input, Select, VStack, HStack, Grid, Center } from '@chakra-ui/react';
import ConfirmationDialog from './ConfirmationDialog';
import ReservationDetailsModal from './ReservationDetailsModal';

const BookingsPage = () => {
  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleViewClick = (booking) => {
    setSelectedBooking(booking);
    setIsViewModalOpen(true);
  };

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setIsCancelConfirmationOpen(true);
  };

  const bookings = [
    {
      bookingId: 1,
      offerId: 1,
      appartmentName: 'Luxurious apartment',
      clientName: 'John Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '123-456-790',
      systemOfBooking: 'Flatly',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
    },
    {
      bookingId: 2,
      offerId: 2,
      appartmentName: 'Studio apartment',
      clientName: 'Andrew Golota',
      email: 'johndoe@gmail.com',
      phoneNumber: '375-978-553',
      systemOfBooking: 'Officely',
      startDate: '2024-04-20',
      endDate: '2024-04-30',
    },
    {
      bookingId: 3,
      offerId: 1,
      appartmentName: 'Luxurious apartment',
      clientName: 'Jane Smith',
      email: 'janesmith@gmail.com',
      phoneNumber: '987-654-321',
      systemOfBooking: 'Flatly',
      startDate: '2024-02-15',
      endDate: '2024-02-25',
    },
    {
      bookingId: 4,
      offerId: 2,
      appartmentName: 'Studio apartment',
      clientName: 'Michael Jordan',
      email: 'michaeljordan@gmail.com',
      phoneNumber: '456-789-012',
      systemOfBooking: 'Officely',
      startDate: '2024-03-10',
      endDate: '2024-03-20',
    },
    {
      bookingId: 5,
      offerId: 1,
      appartmentName: 'Luxury Suite',
      clientName: 'Alice Johnson',
      email: 'alicejohnson@gmail.com',
      phoneNumber: '555-123-456',
      systemOfBooking: 'Flatly',
      startDate: '2024-06-01',
      endDate: '2024-06-10',
    },
    {
      bookingId: 6,
      offerId: 2,
      appartmentName: 'Modern Flat',
      clientName: 'Robert White',
      email: 'robertwhite@gmail.com',
      phoneNumber: '987-654-321',
      systemOfBooking: 'Officely',
      startDate: '2024-08-15',
      endDate: '2024-08-25',
    }
  ];

  const handleCancelConfirmation = () => {



    setIsCancelConfirmationOpen(false);
  };

  return (
    <Center>
      <VStack spacing={4} align="stretch" w="50%">

        <HStack spacing={4} w="100%">
          <Input placeholder="Search..." flex="1" />
          <Select placeholder="Sort by" flex="1">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </Select>
          <Button colorScheme="teal">Search bookings</Button>
        </HStack>

        <Grid templateColumns="1fr" gap={4} w="100%">
          {bookings.map((booking) => (
            
            <Box key={booking.bookingId} p={4} borderWidth="1px" borderRadius="md" position="relative" bg="gray.100">

              <Box>
                <strong>Apartment Name: {booking.appartmentName}</strong>
              </Box>
              <Box>
                <strong>Client Name: {booking.clientName}</strong>
              </Box>
              <Box>
                <strong>Start Date: {booking.startDate}</strong>
              </Box>
              <Box>
                <strong>End Date: {booking.endDate}</strong>
              </Box>

              <Button
                colorScheme="teal"
                position="absolute"
                bottom="55%"
                right="20px"
                w="80px"
                onClick={() => handleViewClick(booking)}
              >
                View
              </Button>

              <Button
                colorScheme="red"
                position="absolute"
                bottom="15%"
                right="20px"
                onClick={() => handleCancelClick(booking)}
              >
                Cancel
              </Button>
            </Box>
          ))}
        </Grid>
      </VStack>

      <ConfirmationDialog
        isOpen={isCancelConfirmationOpen}
        onClose={() => setIsCancelConfirmationOpen(false)}
        onConfirm={handleCancelConfirmation}
      />

      <ReservationDetailsModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        booking={selectedBooking}
      />
    </Center>
  );
};

export default BookingsPage;
