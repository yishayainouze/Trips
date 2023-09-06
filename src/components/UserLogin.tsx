import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(""); 

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        setAuthToken(response.data.responseObj.token);
        console.log(authToken);
        
        setIsLoggedIn(true);
        alert("Login successful!");

        localStorage.setItem("authToken", response.data.responseObj.token);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setAuthToken(""); 

    localStorage.removeItem("authToken");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <p>Token: {authToken}</p>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/Trips">
            <button>All Trips</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserLogin;
