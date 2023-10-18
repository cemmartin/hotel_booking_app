// import { useState, useEffect } from "react";
// import './App.css';
// import {getBookings} from './BookingsService';

// function App() {

//   const [guestBookings, setGuestBookings] = useState([])
  
//   useEffect(() => {
//     getBookings().then((allBookings) => {
//       setGuestBookings(allBookings);
//     })
//   }, []);

//   //add booking
//   const addBooking = (booking) => {
//     setGuestBookings([...guestBookings, bookings]) //sets it equal to itself w/ the addition of the new bookings
//   }

//   //delete bookings
//   const deleteBooking = (id) => { //removes by id
//     const bookingsToKeep = guestBookings.filter(booking =>
//       booking.id !== id)
//     setGuestBookings(bookingsToKeep)
//   }
//   return (
//     <>
      
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './App.css';
import { getBookings } from './BookingService';
import BookingList from './components/BookingList';

function App() {

  const [guestBookings, setGuestBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);

  return (
    <>
      {/* <BookingForm addBoookings={addBoookings}/> */}
      <BookingList guestBookings={guestBookings} />
    </>
  );
}
export default App;