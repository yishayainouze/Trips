import { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "./TripCard";

export interface Trip {
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
      <h1>Trip List</h1>
      <ul>
        {trips &&
          trips.map((trip) => (
            <>
              {/* <li key={trip.id}>{trip.name}</li>
            <li>hello</li> */}
              <TripCard trip={trip} />
            </>
          ))}
      </ul>
    </div>
  );
}

export default TripList;
