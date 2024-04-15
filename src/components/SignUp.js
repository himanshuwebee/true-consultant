// import React, { useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faGooglePlusG,
// //   faFacebookF,
// //   faGithub,
// //   faLinkedinIn,
// // } from "@fortawesome/free-brands-svg-icons";
// import axios from 'axios';
// import './CSS/SignUp.css';

// function SignUp() {
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmpasswordError, setConfirmPasswordError] = useState('');
//   const [error, setError] = useState('');

//   const handleToggle = () => {
//     setIsSignUp((prevIsSignUp) => !prevIsSignUp);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Reset previous error messages
//     setError('');
//     setNameError('');
//     setEmailError('');
//     setPasswordError('');
//     setConfirmPasswordError('');

//     // Perform validation checks
//     if (isSignUp && !validateName(name)) {
//       setNameError('Name must start with a letter and contain only letters, numbers, hyphens, and underscores.');
//       return;
//     }
//     if (!validateEmail(email)) {
//       setEmailError('Please provide a valid email address.');
//       return;
//     }
//     if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
//       return;
//     }
//     if (isSignUp && password !== confirmpassword) {
//       setConfirmPasswordError('Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post('/register', {
//         name,
//         email,
//         password,
//         confirmpassword: isSignUp ? confirmpassword : undefined,
//       });

//       if (response.status === 201) {
//         setError(''); // Clear any previous error message
//         alert('Registration Successful');
//         console.log('Successful Registration');
//         // Handle redirection or other actions after successful registration
//       } else {
//         setError('Invalid Registration');
//         console.log('Invalid Registration');
//       }
//     } catch (error) {
//       console.log(error);
//       setError('Signup failed. Please try again.'); // Display error message
//     }
//   };

//   const validateName = (name) => {
//     const regex = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
//     return regex.test(name);
//   };

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
//   };

//   return (
//     <div className={`container ${isSignUp ? "active" : ""}`}>
//       <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
//         <form>
//           <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
//           <div className="social-icons">
//             <a href="#" className="icon">
//               {/* <FontAwesomeIcon icon={faGooglePlusG} /> */}
//             </a>
//             <a href="#" className="icon">
//               {/* <FontAwesomeIcon icon={faFacebookF} /> */}
//             </a>
//             <a href="#" className="icon">
//               {/* <FontAwesomeIcon icon={faGithub} /> */}
//             </a>
//             <a href="#" className="icon">
//               {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
//             </a>
//           </div>
//           {isSignUp && <span>or use your email for registration</span>}
//           {isSignUp && (
//             <div className="form-group">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               {nameError && <p className="error-message">{nameError}</p>}
//             </div>
//           )}
//           <div className="form-group-1">
//             <input className="email-style"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {emailError && <p className="error-message">{emailError}</p>}
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {passwordError && <p className="error-message">{passwordError}</p>}
//           </div>
//           {isSignUp && (
//             <div className="form-group">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmpassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {confirmpasswordError && (
//                 <p className="error-message">{confirmpasswordError}</p>
//               )}
//             </div>
//           )}
//           {!isSignUp && <span>or use your email password</span>}
//           {!isSignUp && <a href="#">Forget Your Password?</a>}
//           <button onClick={handleSignup}>
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </button>
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className="toggle">
//           <div
//             className={`toggle-panel toggle-left ${isSignUp ? "active" : ""}`}
//           >
//             <h1 className="wrtitten-effect-1">Welcome Back!</h1>
//             <button className="hidden" onClick={handleToggle}>
//               Sign In
//             </button>
//           </div>
//           <div
//             className={`toggle-panel toggle-right ${!isSignUp ? "active" : ""}`}
//           >
//             <h1 className="wrtitten-effect">Hello, DimeTydians!</h1>
//             <button className="hidden hidden-1" onClick={handleToggle}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import axios from "axios";
import "./CSS/SignUp.css";

function SignUp({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Perform validation checks
    if (isSignUp && !validateName(name)) {
      setNameError(
        "Name must start with a letter and contain only letters, numbers, hyphens, and underscores."
      );
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please provide a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }
    if (isSignUp && password !== confirmpassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
        confirmpassword: isSignUp ? confirmpassword : undefined,
      });

      if (response.status === 201) {
        setError(""); // Clear any previous error message
        alert("Registration Successful");
        console.log("Successful Registration");
        // Handle redirection or other actions after successful registration
      } else {
        setError("Invalid Registration");
        console.log("Invalid Registration");
      }
    } catch (error) {
      console.log(error);
      setError("Signup failed. Please try again."); // Display error message
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError("");
    setEmailError("");
    setPasswordError("");

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setError(""); // Clear any previous error message
        alert("Login Successful");
        console.log("Successful Login");

        // Call the onLogin function to update the parent component (App.js) about the successful login
        onLogin();
      } else {
        setError("Invalid Login");
        console.log("Invalid Login");
      }
    } catch (error) {
      console.log(error);
      setError("Login failed. Please try again."); // Display error message
    }
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
        <form>
          <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
          <div className="social-icons">{/* Add your social icons here */}</div>
          {!isSignUp && <span>or use your email for login</span>}
          {isSignUp && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
          )}
          <div className="form-group-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          {!isSignUp && <a href="#">Forget Your Password?</a>}
          <button onClick={isSignUp ? handleSignup : handleLogin}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${isSignUp ? "active" : ""}`}
          >
            <h1 className="wrtitten-effect-1">Welcome Back!</h1>
            <button className="hidden" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div
            className={`toggle-panel toggle-right ${!isSignUp ? "active" : ""}`}
          >
            <h1 className="wrtitten-effect">Hello, DimeTydians!</h1>
            <button className="hidden hidden-1" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
