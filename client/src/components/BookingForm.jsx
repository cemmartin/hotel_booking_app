import { useState } from "react";

const BookingForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        guest: "",
        email: "",
        // checkedIn: false //not 100% sure how to do this bit
    })


return (
    <form>
        <div>
            <label htmlFor="guest">Guest Name:</label>
            <input
                type="text"
                id="guest"
                name="guest"
                value={formData.guest}
                required
            />
        </div>
        <div>
            <label htmlFor="email">E-mail:</label>
            <input
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