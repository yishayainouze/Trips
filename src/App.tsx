import './App.css';
// import Home from './components/Home';
// import TripList from './components/Trips';
import Ruoter from './components/Routes';
// import './styles.css';
// import UserLogin from './Components/UserLogin';
export enum currentView {
  Home = "home",
  AllTrips = "allTrips",
  LogIn = "login",
  SignIn = 'signIn',
  Trips = 'trips'
}
function App(): JSX.Element {
  return (
    <>
    <Ruoter/>
    </>
  )
}
export default App

