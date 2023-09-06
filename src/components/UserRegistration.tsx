import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserRegistration() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = async () => {
    if (email.trim() !== "" && password.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            email: email,
            password: password,
            role: "admin",
          }
        );

        if (response.status === 201) {
          setIsRegistered(true);
          alert("Registration successful!");
        } else {
          setIsRegistered(false);

          if (response.status === 400) {
            alert("User already exists. Please try a different email.");
          } else {
            alert("Registration failed. Please try again.");
          }
        }
      } catch (error) {
        console.error("Registration error:", error);

        setIsRegistered(false);

        alert(`Registration failed: ${error.response.status}`);
      }
    } else {
      alert("Please fill in both email and password fields.");
    }
  };
  const handleReset = () => {
    setemail("");
    setPassword("");
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <h2>Registration Successful</h2>
          <p>Your email: {email}</p>
          <button onClick={handleReset}>Register Another User</button>
          <Link to="/Trips">
            <button>All Trips</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>Register User</h2>
          <div>
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
          <button onClick={handleRegistration}>Register</button>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;
