import BookingItem from "./BookingItems";

const BookingList = ({guestBookings, trashBooking}) => {

    const bookingListItem = guestBookings.map((booking) => {
        return <BookingItem booking={booking} key={booking._id} trashBooking={trashBooking} />

    // the line below makes the bookings appear
        return <li key={booking._id}>{booking.name}<br/>{booking.email}<br/>{booking.checkedIn.toString()}</li>
      })


      
    return (
        <ul>
            <p>this is the booking list</p>

            {bookingListItem}
        </ul>
     );
}
export default BookingList ;
