import { Trip } from "./Trips";

interface TripCardProps {
  trip: Trip;
}

function TripCard({ trip }: TripCardProps) {
  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{trip.name}</h2>
        <p className="card-destination">{trip.destination}</p>
        <p className="card-description">{trip.description}</p>
        <p className="card-dates">
          Dates: {trip.startDate} - {trip.endDate}
        </p>
        <p className="card-price">Price: ${trip.price}</p>
        {/* <div className="card-activities"> */}
          {/* <strong>Activities:</strong>
          <ul>
            {trip.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default TripCard;
