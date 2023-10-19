import { deleteBooking } from "../BookingService";

const BookingItem = ({ booking, trashBooking }) => {

    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            trashBooking(booking._id);
        });
    };

    return (
        <>
            <p>ID: {booking._id}</p>
            <p>Name: {booking.name}</p> 
                {/* the name & email are not appearing */}
            <p>Email: {booking.email}</p>
            {/* <p>{booking.checkedIn}</p> */}
            <button onClick={handleDelete}> DELETEEEEE! </button>
        <hr></hr>
        </>
    );
};

export default BookingItem;
