const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const postBookings = (booking) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        header: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}