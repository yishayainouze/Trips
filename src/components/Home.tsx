import { Link } from "react-router-dom";
import { currentView } from "../App";
import "./Home.css"; // Import the CSS file

interface HomeProps {
  nav: (cur: currentView) => void;
}

function Home({ nav }: HomeProps) {
  return (
    <>
      <Link to="/Trips">
        <button onClick={() => nav(currentView.Trips)}>All Trips</button>
      </Link>
      <Link to="/UserLogin">
        <button onClick={() => nav(currentView.LogIn)}>Log In</button>
      </Link>
      <Link to="/UserRegistration">
        <button onClick={() => nav(currentView.SignIn)}>Sign In</button>
      </Link>
    </>
  );
}

export default Home;





