export default function ContactDetails({bookingDetails, handleChange, handleConfirm}){
    
    return(
        <div className="form-step">
            <div className="summary">
              <p><strong>Date:</strong> {bookingDetails.date}</p>
              <p><strong>Time:</strong> {bookingDetails.time}</p>
              <p><strong>Persons:</strong> {bookingDetails.persons}</p>
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                value={bookingDetails.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                value={bookingDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                value={bookingDetails.phone}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleConfirm} className="form-button">
              Confirm Reservation
            </button>
          </div>
    )
  }