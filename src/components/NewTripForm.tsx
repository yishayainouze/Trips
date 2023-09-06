import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewTrip(): JSX.Element {
  const [tripData, setTripData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    image: "",
    activities: [],
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value,
    });
  };
  const removeActivity = (index: number) => {
    const updatedActivities = [...tripData.activities];
    updatedActivities.splice(index, 1);
    setTripData({
      ...tripData,
      activities: updatedActivities,
    });
  };
  const addMoreFields = () => {
    setTripData({
      ...tripData,
      activities: [...tripData.activities, ""],
    });
    console.log(tripData.activities);
  };
  const axiosAddTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/trips/",
        tripData,
        {
          headers: { authorization: "test-token" },
        });
      if (response) {
        console.log("Trip added successfully:", response.data);
        setTripData({
            name: "",
            destination: "",
            startDate: "",
            endDate: "",
            image: "",
            activities: [],
          });
      } else {
        console.error("Trip not added. Status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <form onSubmit={axiosAddTrip}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={tripData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleInputChange}
            placeholder="Enter destination"
            id="destination"
          />
        </div>
        <div>
          <label htmlFor="startDate">startDate:</label>
          <input
            type="text"
            name="startDate"
            value={tripData.startDate}
            onChange={handleInputChange}
            placeholder="Enter startDate"
            id="startDate"
          />
        </div>
        <div>
          <label htmlFor="endDate">endDate:</label>
          <input
            type="text"
            name="endDate"
            value={tripData.endDate}
            onChange={handleInputChange}
            placeholder="Enter endDate"
            id="endDate"
          />
        </div>
        <div>
          <label htmlFor="image">image:</label>
          <input
            type="text"
            name="image"
            value={tripData.image}
            onChange={handleInputChange}
            placeholder="Enter image"
            id="image"
          />
        </div>
        <div>
          <label htmlFor="activities">Activities:</label>
          {tripData.activities.map((activity, index) => (
            <div key={index}>
              <input
                type="text"
                value={activity}
                onChange={(e) => {
                  const updatedActivities = [...tripData.activities];
                  updatedActivities[index] = e.target.value;
                  setTripData({
                    ...tripData,
                    activities: updatedActivities,
                  });
                }}
                placeholder="Enter activity"
              />
              <button type="button" onClick={() => removeActivity(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addMoreFields}>
            Add More
          </button>
        </div>
        <button type="submit">Add Trip</button>
      </form>
      <Link to="/Trips">
        <button>Show all trips</button>
      </Link>
    </div>
  );
}
