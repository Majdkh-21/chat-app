// Imports React library to create components
import React, { useState } from 'react';

// Imports useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';

// Imports the FaEdit (edit) icon from react-icons library
import { FaEdit } from 'react-icons/fa';





// Defines the PersonalInfo component
function PersonalInfo() {

  // Initializes the navigate function to enable programmatic navigation between pages
  const navigate = useNavigate(); 

  // The setFormData function is used to update this state
  const [formData, setFormData] = useState({
    email: '',  // Stores the user's email input
    password: '', // Stores the user's password input
  });



 // Function to handle changes in input fields
const handleChange = (field, value) => {
  // Updates the formData state dynamically based on the field name
  setFormData({ ...formData, [field]: value });
};

// Function to handle the login process
const handleSave = () => {
  // Defines the correct admin user
  const adminEmail = "admin@example.com";
  const adminPassword = "12345";

  // Defines the correct doctor user
  const doctorEmail = "doctor@example.com";
  const doctorPassword = "67890";

  // Logs the entered email and password for debugging
  console.log("Entered Email:", formData.email);
  console.log("Entered Password:", formData.password);

  // Checks if the entered user match the admin's user
  if (formData.email.trim() === adminEmail && formData.password.trim() === adminPassword) {
    localStorage.setItem('userRole', 'admin'); // Saves the admin role in local storage
    alert('Logged in as Admin ✅');
  } 
  // Checks if the entered user match the doctor's user
  else if (formData.email.trim() === doctorEmail && formData.password.trim() === doctorPassword) {
    localStorage.setItem('userRole', 'doctor'); // Saves the doctor role in local storage
    alert('Logged in as Doctor 👨‍⚕️✅');
  } 
  // If user do not match admin or doctor, the user is considered a regular user
  else {
    localStorage.setItem('userRole', 'user'); // Saves the user role as a regular user
    alert('Logged in as a regular user');
  }

  // Redirects the user to the homepage after login
  navigate('/');
};


return (
  <div style={styles.container}>

    {/* Back button to return to the previous page when clicked */}
    <button style={styles.backButton} onClick={() => window.history.back()}>&lt;</button>

    {/* Page title for the login form */}
    <h2 style={styles.title}>Login</h2>

    {/* Dynamically generate input fields for email and password using formData */}
    {Object.keys(formData).map((field) => (
      <div key={field} style={styles.inputContainer}>
        
        {/* Input field for email or password, with type set to 'password' for security */}
        <input
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize the first letter of the placeholder
          value={formData[field]} // Bind input value to formData
          onChange={(e) => handleChange(field, e.target.value)} // Update formData when user types
          style={styles.input}
        />

        {/* Edit icon displayed next to the input field */}
        <FaEdit style={styles.icon} />
      </div>
    ))}

    {/* Save button for logging in */}
    <button onClick={handleSave} style={styles.saveButton}>Save</button>

    {/* Registration prompt with a clickable link to sign up */}
    <p style={styles.registerText}>
      Don't have an account? {' '}
      <span style={styles.registerLink} onClick={() => navigate('/register')}>
        Sign up now
      </span>
    </p>

  </div>
);


}

const styles = {
  container: {
    backgroundColor: '#333',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    color: 'white',
    fontSize: '32px',
    marginBottom: '20px',
  },
  backButton: {
    position: 'absolute',
    left: '10px',
    top: '10px',
    padding: '10px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#555',
    color: 'white',
    cursor: 'pointer',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    width: '400px',
  },
  input: {
    flex: 1,
    padding: '10px 15px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#ddd',
    fontSize: '16px',
    outline: 'none',
  },
  icon: {
    marginLeft: '-35px',
    color: '#555',
    cursor: 'pointer',
  },
  saveButton: {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  registerText: {
    marginTop: '15px',
    color: 'white',
    fontSize: '14px',
  },
  registerLink: {
    color: '#4CAF50',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default PersonalInfo;
