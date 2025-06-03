export default function Book({bookingDetails, handleDateChange, handleChange, handleNextStep}){
    return(
        <div className="form-step">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                className="form-input"
                value={bookingDetails.date}
                onChange={handleDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                className="form-input"
                value={bookingDetails.time}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="persons">Number of Persons</label>
              <input
                id="persons"
                name="persons"
                type="number"
                min="1"
                className="form-input"
                value={bookingDetails.persons}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleNextStep} className="form-button">
              Book Now
            </button>
          </div>
    )
  }