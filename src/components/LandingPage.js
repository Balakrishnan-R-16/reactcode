

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";
import {useNavigate} from 'react-router-dom';

const BusTicketBooking = () => {
  const [fromDistrict, setFromDistrict] = useState('');
  const [toDistrict, setToDistrict] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState(1);
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState(false);
   const navigate=useNavigate();

  const districts = [
    "Chennai", "Coimbatore", "Madurai", "Salem", "Trichy", 
    "Tirunelveli", "Thanjavur", "Vellore", "Erode", "Tiruppur"
  ]; // Random districts from Tamil Nadu
  const availableBuses = [
    // Chennai to Coimbatore
    {
      id: 1,
      name: 'Essar Travels',
      fromDistrict: 'Chennai',
      toDistrict: 'Coimbatore',
      departureTime: '8:00 AM',
      arrivalTime: '2:00 PM',
      duration: '6 hours',
      amenities: ['WiFi', 'AC'],
      fare: 600,
      ratings: 4.6,
      reviews: 'Comfortable and smooth ride.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    {
      id: 2,
      name: 'KPN Travels',
      fromDistrict: 'Chennai',
      toDistrict: 'Coimbatore',
      departureTime: '9:30 AM',
      arrivalTime: '3:30 PM',
      duration: '6 hours',
      amenities: ['WiFi', 'Sleeper', 'AC'],
      fare: 650,
      ratings: 4.5,
      reviews: 'Very punctual and clean buses.',
      cancellationPolicy: 'Free cancellation 1 hour before departure.'
    },
    // Coimbatore to Madurai
    {
      id: 3,
      name: 'SRS Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Madurai',
      departureTime: '7:00 AM',
      arrivalTime: '11:00 AM',
      duration: '4 hours',
      amenities: ['Non-AC', 'Water Bottle'],
      fare: 500,
      ratings: 4.3,
      reviews: 'Affordable for regular commuters.',
      cancellationPolicy: 'Free cancellation 3 hours before departure.'
    },
    {
      id: 4,
      name: 'SRM Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Madurai',
      departureTime: '6:00 PM',
      arrivalTime: '10:00 PM',
      duration: '4 hours',
      amenities: ['WiFi', 'AC', 'Sleeper'],
      fare: 700,
      ratings: 4.7,
      reviews: 'Best comfort for long distances.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    // Salem to Madurai
    {
      id: 5,
      name: 'Parveen Travels',
      fromDistrict: 'Salem',
      toDistrict: 'Madurai',
      departureTime: '5:00 PM',
      arrivalTime: '11:00 PM',
      duration: '6 hours',
      amenities: ['AC', 'Charging Point'],
      fare: 550,
      ratings: 4.5,
      reviews: 'Smooth ride with good drivers.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    {
      id: 6,
      name: 'National Travels',
      fromDistrict: 'Salem',
      toDistrict: 'Madurai',
      departureTime: '9:00 AM',
      arrivalTime: '3:00 PM',
      duration: '6 hours',
      amenities: ['Non-AC', 'Water Bottle'],
      fare: 450,
      ratings: 4.2,
      reviews: 'Good for budget travel.',
      cancellationPolicy: 'No free cancellation.'
    },
    // Chennai to Salem
    {
      id: 7,
      name: 'ABT Express',
      fromDistrict: 'Chennai',
      toDistrict: 'Salem',
      departureTime: '10:00 AM',
      arrivalTime: '2:00 PM',
      duration: '4 hours',
      amenities: ['WiFi', 'AC'],
      fare: 620,
      ratings: 4.4,
      reviews: 'Comfortable and fast service.',
      cancellationPolicy: 'Free cancellation 1 hour before departure.'
    },
    {
      id: 8,
      name: 'VRL Travels',
      fromDistrict: 'Chennai',
      toDistrict: 'Salem',
      departureTime: '11:00 AM',
      arrivalTime: '3:00 PM',
      duration: '4 hours',
      amenities: ['AC', 'Charging Point'],
      fare: 550,
      ratings: 4.3,
      reviews: 'Good value for money.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    // Madurai to Chennai
    {
      id: 9,
      name: 'KSRTC',
      fromDistrict: 'Madurai',
      toDistrict: 'Chennai',
      departureTime: '12:00 PM',
      arrivalTime: '6:00 PM',
      duration: '6 hours',
      amenities: ['Non-AC'],
      fare: 400,
      ratings: 4.1,
      reviews: 'Government bus, simple and budget-friendly.',
      cancellationPolicy: 'No free cancellation.'
    },
    {
      id: 10,
      name: 'VRL Luxury',
      fromDistrict: 'Madurai',
      toDistrict: 'Chennai',
      departureTime: '6:00 AM',
      arrivalTime: '12:00 PM',
      duration: '6 hours',
      amenities: ['AC', 'WiFi', 'Sleeper'],
      fare: 680,
      ratings: 4.6,
      reviews: 'Highly recommended for a luxury ride.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    // Chennai to Trichy
    {
      id: 11,
      name: 'Rajesh Travels',
      fromDistrict: 'Chennai',
      toDistrict: 'Trichy',
      departureTime: '8:30 AM',
      arrivalTime: '2:30 PM',
      duration: '6 hours',
      amenities: ['AC', 'WiFi'],
      fare: 600,
      ratings: 4.5,
      reviews: 'Nice travel experience.',
      cancellationPolicy: 'Free cancellation 1 hour before departure.'
    },
    {
      id: 12,
      name: 'SRS Travels',
      fromDistrict: 'Chennai',
      toDistrict: 'Trichy',
      departureTime: '7:00 AM',
      arrivalTime: '1:00 PM',
      duration: '6 hours',
      amenities: ['Non-AC', 'Water Bottle'],
      fare: 500,
      ratings: 4.3,
      reviews: 'Affordable for regular commuters.',
      cancellationPolicy: 'Free cancellation 3 hours before departure.'
    },
    // Coimbatore to Trichy
    {
      id: 13,
      name: 'Essar Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Trichy',
      departureTime: '8:00 AM',
      arrivalTime: '12:00 PM',
      duration: '4 hours',
      amenities: ['WiFi', 'AC'],
      fare: 550,
      ratings: 4.5,
      reviews: 'Comfortable for day trips.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    {
      id: 14,
      name: 'Parveen Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Trichy',
      departureTime: '5:00 PM',
      arrivalTime: '9:00 PM',
      duration: '4 hours',
      amenities: ['AC', 'Charging Point'],
      fare: 530,
      ratings: 4.3,
      reviews: 'Good for frequent travelers.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    // Salem to Trichy
    {
      id: 15,
      name: 'SRM Travels',
      fromDistrict: 'Salem',
      toDistrict: 'Trichy',
      departureTime: '6:00 PM',
      arrivalTime: '10:00 PM',
      duration: '4 hours',
      amenities: ['WiFi', 'AC', 'Sleeper'],
      fare: 700,
      ratings: 4.7,
      reviews: 'Best comfort for long distances.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    {
      id: 16,
      name: 'National Travels',
      fromDistrict: 'Salem',
      toDistrict: 'Trichy',
      departureTime: '9:00 AM',
      arrivalTime: '1:00 PM',
      duration: '4 hours',
      amenities: ['Non-AC', 'Water Bottle'],
      fare: 450,
      ratings: 4.2,
      reviews: 'Good for budget travel.',
      cancellationPolicy: 'No free cancellation.'
    },
    // Madurai to Trichy
    {
      id: 17,
      name: 'ABT Express',
      fromDistrict: 'Madurai',
      toDistrict: 'Trichy',
      departureTime: '10:00 AM',
      arrivalTime: '2:00 PM',
      duration: '4 hours',
      amenities: ['WiFi', 'AC'],
      fare: 620,
      ratings: 4.4,
      reviews: 'Comfortable and fast service.',
      cancellationPolicy: 'Free cancellation 1 hour before departure.'
    },
    {
      id: 18,
      name: 'VRL Travels',
      fromDistrict: 'Madurai',
      toDistrict: 'Trichy',
      departureTime: '11:00 AM',
      arrivalTime: '3:00 PM',
      duration: '4 hours',
      amenities: ['AC', 'Charging Point'],
      fare: 550,
      ratings: 4.3,
      reviews: 'Good value for money.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    },
    // Coimbatore to Salem
    {
      id: 19,
      name: 'KPN Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Salem',
      departureTime: '9:30 AM',
      arrivalTime: '12:30 PM',
      duration: '3 hours',
      amenities: ['WiFi', 'Sleeper', 'AC'],
      fare: 400,
      ratings: 4.5,
      reviews: 'Very punctual and clean buses.',
      cancellationPolicy: 'Free cancellation 1 hour before departure.'
    },
    {
      id: 20,
      name: 'Parveen Travels',
      fromDistrict: 'Coimbatore',
      toDistrict: 'Salem',
      departureTime: '6:00 PM',
      arrivalTime: '9:00 PM',
      duration: '3 hours',
      amenities: ['AC', 'Charging Point'],
      fare: 450,
      ratings: 4.2,
      reviews: 'Good service and quick travel.',
      cancellationPolicy: 'Free cancellation 2 hours before departure.'
    }
  ];
  
  const handleSearch = () => {
    if (!fromDistrict || !toDistrict || !date) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Filter buses based on user input
    const filteredBuses = availableBuses.filter(
      (bus) => bus.fromDistrict === fromDistrict && bus.toDistrict === toDistrict
    );

    if (filteredBuses.length === 0) {
      alert('No buses available for the selected route.');
    }

    setBuses(filteredBuses);
  };

  const handleBusSelection = (bus) => {
    setSelectedBus(bus);
    alert(`
      Bus Name: ${bus.name}
      From: ${bus.fromDistrict}
      To: ${bus.toDistrict}
      Departure: ${bus.departureTime}
      Arrival: ${bus.arrivalTime}
      Duration: ${bus.duration}
      Amenities: ${bus.amenities.join(', ')}
      Fare: ₹${bus.fare}
      Ratings: ${bus.ratings} / 5
      Reviews: "${bus.reviews}"
      Cancellation Policy: ${bus.cancellationPolicy}
    `);
  };

  const handlePassengerDetails = (index, name) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index] = name;
    setPassengerDetails(updatedDetails);
  };

  const handlePayment = () => {
    setPaymentStatus(true);
    navigate('/payment')
  };

  return (
    <div className="full">
      <Header />

      <div className="container">
        <h1>Bus Ticket Booking</h1>

        {/* District selection */}
        <select value={fromDistrict} onChange={(e) => setFromDistrict(e.target.value)}>
          <option value="">From</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>

        <select value={toDistrict} onChange={(e) => setToDistrict(e.target.value)}>
          <option value="">To</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max="45"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        {/* Bus selection */}
        {buses.length > 0 && (
          <div>
            <h2>Available Buses</h2>
            {buses.map((bus) => (
              <div key={bus.id} className="bus-option" onClick={() => handleBusSelection(bus)}>
                <h3>{bus.name}</h3>
                <p>From: {bus.fromDistrict}</p>
                <p>To: {bus.toDistrict}</p>
                <p>Departure: {bus.departureTime}</p>
                <p>Arrival: {bus.arrivalTime}</p>
                <p>Duration: {bus.duration}</p>
                <p>Amenities: {bus.amenities.join(', ')}</p>
                <p>Fare: ₹{bus.fare}</p>
                <p>Ratings: {bus.ratings} / 5</p>
                <p>Reviews: "{bus.reviews}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Passenger details */}
        {selectedBus && (
          <div>
            <h2>Passenger Details</h2>
            {Array.from({ length: seats }).map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Passenger ${index + 1}`}
                onChange={(e) => handlePassengerDetails(index, e.target.value)}
              />
            ))}
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BusTicketBooking;
