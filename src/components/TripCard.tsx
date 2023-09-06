import { Link } from "react-router-dom";
import axios from "axios";
import { Trip } from "./Trips";
// import { useContext, useEffect, useState } from "react";

interface DeleteProps {
  trip: Trip;
  context: {
    trips: Trip[];
    setTrips: React.Dispatch<React.SetStateAction<Trip[] | null>>;
  };
}

export const Delete: React.FC<DeleteProps> = ({
  trip,
  context,
}): JSX.Element => {
  const { trips, setTrips } = context;
  const authToken = localStorage.getItem('authToken');
console.log(authToken);

  const headers = {
    authorization: authToken,
  };
  const axiosDeleteTrip = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/trips/${trip.id}`, {headers}
      );

      if (response.status === 200) {
        console.log("deleted");
        console.log(trips);

        const updatedTrips = trips.filter((t) => t.id !== trip.id);

        setTrips(updatedTrips);
      } else {
        console.error("Error deleting trip. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  // if (deleted) {
  //   return (
  //     <div>
  //       <p>Trip with ID {id} has been successfully deleted.</p>
  //       <Link to="/trips">Back to Trips</Link>
  //     </div>
  //   );
  // }

  return (
    <div
      className="card"
      style={{ width: "200px", margin: "10px", border: "solid" }}
    >
      <Link to={`/trip/${trip.id}`}>
        <img
          src={trip.image}
          alt={trip.name}
          width={"200px"}
          height={"200px"}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">{trip.name}</h2>
          <p className="card-destination">{trip.destination}</p>
          {/* <p className="card-description">{trip.description}</p> */}
          <p className="card-dates">
            Dates: {trip.startDate} - {trip.endDate}
          </p>
          {/* <p className="card-price">Price: ${trip.price}</p> */}
        </div>
      </Link>
      <Link to="/Trips">
        <button onClick={axiosDeleteTrip}>Delete</button>
      </Link>
      <Link to={`/UpdateTrip/` + trip.id}>
        <button>Update Trip</button>
      </Link>
    </div>
  );
};
