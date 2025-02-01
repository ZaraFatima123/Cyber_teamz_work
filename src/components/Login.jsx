import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const checkPasswordStrength = (password) => {
  const strongPasswordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return strongPasswordPattern.test(password);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false); 
  const [passwordSuggestion, setPasswordSuggestion] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); 
  const [userData, setUserData] = useState(null); 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setLoggedIn(true);
      setUserData(storedUser);
      setError(null);
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (!checkPasswordStrength(password)) {
      setError("Password is too weak. Please enter a stronger password.");
      setPasswordSuggestion(
        "Try a password with at least 8 characters, one number, and one special character."
      );
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setLoggedIn(true);
    setUserData(newUser);
    alert("Registration successful! Please log in.");
    setIsRegistering(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="container mt-5">
      {loggedIn ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-4">Account Details</h3>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
                <button className="btn btn-danger w-100" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-4">
                  {isRegistering ? "Register" : "Login"}
                </h3>
                <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {passwordSuggestion && (
                    <div className="alert alert-info">{passwordSuggestion}</div>
                  )}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <button type="submit" className="btn btn-primary w-100">
                    {isRegistering ? "Register" : "Login"}
                  </button>
                </form>
                <div className="text-center mt-3">
                  {isRegistering ? (
                    <p>
                      Already have an account?{" "}
                      <button
                        onClick={() => setIsRegistering(false)}
                        className="btn btn-link"
                      >
                        Login here
                      </button>
                    </p>
                  ) : (
                    <p>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setIsRegistering(true)}
                        className="btn btn-link"
                      >
                        Register here
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
