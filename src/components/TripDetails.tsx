import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Trip>(
          `http://localhost:3000/api/trips/${id}`
        );
        setTrip(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Trip Details</h2>
      <p>Trip ID: {id}</p>
      {trip && (
        <div>
          <h3>{trip.name}</h3>
          <p>Destination: {trip.destination}</p>
          <p>Description: {trip.description}</p>
          <p>
            Dates: {trip.startDate} - {trip.endDate}
          </p>
          <p>Price: ${trip.price}</p>
          <div className="card-activities">
            <strong>Activities:</strong>
            <ul>
              {trip.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
          <img src={trip.image} alt={trip.name} width={"500px"} />
          
        </div>
      )}
    </div>
  );
}

export default TripDetails;
