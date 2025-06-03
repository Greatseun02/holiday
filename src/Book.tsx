import React, { useState } from 'react';
import './index.css';
import { format } from 'date-fns';
import Book from './Components/Book';
import ContactDetails from './Components/ContactDetails';

interface BookingDetails {
  date: string;
  time: string;
  persons: number;
  name: string;
  email: string;
  phone: string;
}

export default function TableBookingForm() {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    date: '',
    time: '',
    persons: 1,
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    setBookingDetails((prev) => ({ ...prev, date: e.target.value }));
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleConfirm = () => {
    console.log('Booking Details:', bookingDetails);
  };

  



  return (
    <div className="booking-form-container">
      <div className="booking-card">
        {step === 1 && (
          <Book bookingDetails={bookingDetails} handleDateChange={handleDateChange} handleChange={handleChange} handleNextStep={handleNextStep}/>
        )}

        {step === 2 && (
          <ContactDetails bookingDetails={bookingDetails} handleChange={handleChange} handleConfirm={handleConfirm}/>
        )}
      </div>
    </div>
  );
}