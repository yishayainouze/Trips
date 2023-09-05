import { useState } from "react";

function UserRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setIsRegistered(true);
      alert("Registration successful!");
    } else {
      alert("Please fill in both username and password fields.");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <h2>Registration Successful</h2>
          <p>Your username: {username}</p>
          <button onClick={handleReset}>Register Another User</button>
        </div>
      ) : (
        <div>
          <h2>Register User</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
