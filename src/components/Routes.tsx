import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';
import TripDetails from './TripDetails';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
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
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter