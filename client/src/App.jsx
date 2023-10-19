import { useState, useEffect } from 'react';
import './App.css';

import { getBookings } from './BookingService';
import BookingList from './components/BookingList';
import BookingForm from './components/BookingForm';

function App() {

  const [guestBookings, setGuestBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setGuestBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    setGuestBookings([...guestBookings, booking]);
  }

  const trashBooking = (id) => {
    const bookingsToKeep = guestBookings.filter(booking => booking._id !== id)
    setGuestBookings(bookingsToKeep)
  }


  return (
    <>
      <BookingForm addBooking={addBooking}/>
      <BookingList guestBookings={guestBookings} trashBooking={trashBooking}/>
    </>
  );
}
export default App;