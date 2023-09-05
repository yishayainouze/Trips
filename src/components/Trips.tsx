import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Delete } from "./TripCard";

export interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  // activities: string[];
}
function TripList() {
    const [trips, setTrips] = useState<Trip[] | null>(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<Trip[]>(
            "http://localhost:3000/api/trips"
          );
          setTrips(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
      // working fetchData
      console.log(trips);
    }, []);
    
    return (
      <div>
        <div className="Nav Trip">
          <Link to="/Home">
            <button>Home</button>
          </Link>
          <Link to="/NewTripsForm">
            <button>NewTrips</button>
          </Link>
        </div>
  
        <h1>Trip List</h1>
        <ul>
          {trips &&
            trips.map((trip) => (
              <Delete key={trip.id} trip={trip} context={{trips,setTrips}} />
            ))}
        </ul>
      </div>
    );
  }
  
  export default TripList;