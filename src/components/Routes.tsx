import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Trips from './Trips';
function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter