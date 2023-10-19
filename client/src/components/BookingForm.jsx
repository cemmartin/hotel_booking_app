import { useState } from "react";
import { postBookings } from "../BookingService";


const BookingForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        guest: "",
        email: "",
        // checkedIn: false //not 100% sure how to do this bit
    })

    const onChange = (evt) => {
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value;
        setFormData(newFormData)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        postBookings(formData).then((data) => {
            addBooking(data);
        })

        setFormData({
            name: "",
            email: ""
        })
    }


return (
    <form onSubmit={onSubmit} id="booking-form" >
        <div>
            <label htmlFor="guest">Guest Name:</label>
            <input onChange={onChange}
                type="text"
                id="guest"
                name="guest"
                value={formData.guest}
                required
            />
        </div>
        <div>
            <label htmlFor="email">E-mail:</label>
            <input onChange={onChange}
                type="text"
                id="email"
                name="email"
                value={formData.email}
                required
            />
        </div>
        {/* <div>
            <input
                type="radio"
                id="checkedIn"
                name="checkedIn"
                value={formData.checkedIn}
            />
            <label htmlFor="checkedIn">Checked In:</label>
        </div> */}
        <input type="submit" value="Save" id="save"/>
    </form>
)}

export default BookingForm;