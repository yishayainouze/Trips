import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Trip } from './Trips';

function UpdateTrip() {
    const { id } = useParams();
  
    const [trip, setTrip] = useState<Trip | null>(null);
    const [formData, setFormData] = useState({
      name: '',
      destination: '',
      startDate: '',
      endDate: '',
      description: '',
      price: 0,
      image: '',
    });
  
    useEffect(() => {
      const fetchTripData = async () => {
        try {
          const response = await axios.get<Trip>(`http://localhost:3000/api/trips/${id}`);
          setTrip(response.data);
          setFormData({
            name: response.data.name,
            destination: response.data.destination,
            startDate: response.data.startDate,
            endDate: response.data.endDate,
            description: response.data.description || '',
            price: response.data.price || 0,
            image: response.data.image || '',
          });
        } catch (error) {
          console.error('Error fetching trip data:', error);
        }
      };
  
      fetchTripData();
    }, [id]);
  

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await axios.put<Trip>(
          `http://localhost:3000/api/trips/${id}`,
          formData
        );
  
        if (response.status === 200) {
            console.log('good');
        } else {
          console.error('Error updating trip. Status code:', response.status);
        }
      } catch (error) {
        console.error('Error updating trip:', error);
      }
    };
  
    return (
      <div>
        <div className="Nav Trip">
          <Link to="/Trips">
            <button>All Trips</button>
          </Link>
        </div>
        <h1>Update Trip</h1>
        {trip && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Update Trip</button>
          </form>
        )}
      </div>
    );
  }
  
  export default UpdateTrip;



  