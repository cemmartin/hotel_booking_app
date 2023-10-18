import { deleteBooking } from "../BookingService";

const BookingItem = ({ booking, removeBooking }) => {
  console.log(booking);
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };
  return (
    <>
      <p>{booking.name}</p>
      <p>{booking.email}</p>
      <p>{booking.checkedIn}</p>
      <button onClick={handleDelete}> DELETEEEEE! </button>
      <hr></hr>
    </>
  );
};

export default BookingItem;
