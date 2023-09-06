import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';
import TripDetails from './TripDetails';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import NewTrip from './NewTripForm';
import UpdateTrip from './UpdateTrip';
function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Home" element={<Home nav={function (): void {
                        throw new Error('Function not implemented.');
                    } }/>} />
                    <Route path="/Trips" element={<Trips/>} />
                    <Route path="/trip/:id" element={<TripDetails />} />
                    <Route path="/UserLogin" element={<UserLogin/>} />
                    <Route path="/UserRegistration" element={<UserRegistration/>} />
                    <Route path="/NewTripForm" element={<NewTrip/>} />
                    <Route path="/UpdateTrip/:id"element={<UpdateTrip/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter