import React, { useState } from 'react';

function AddMember() {
  // State to store form data for update member
  const [formData, setFormData] = useState({
    name: '',          // Member's name
    department: '',    // Member's department
    building: '',      // Building where the office is located
    office: '',        // Office number
    officeHours: '',   // Office hours availability
    fieldOfInterest: '' // Member's field of interest
  });

  // Function to update formData when user types in an input field
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Function to handle saving the member's data
  const handleSave = () => {
    console.log("Member update successfully:", formData);
    alert("Member update successfully!");
  };

  return (
    <div style={styles.container}>
      {/* Back button to navigate to the previous page */}
      <button style={styles.backButton} onClick={() => window.history.back()}>&lt;</button>
  
      {/* Page title */}
      <h2 style={styles.title}>Work Information</h2>
  
      {/* Loop through formData keys to dynamically generate input fields */}
      {Object.keys(formData).map((field) => (
        <div key={field} style={styles.inputContainer}>
  
          {/* Input field for each form field */}
          <input
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize first letter of placeholder
            value={formData[field]} // Bind value to formData
            onChange={(e) => handleChange(field, e.target.value)} // Update formData on user input
            style={styles.input}
          />
        </div>
      ))}
  
      {/* Save button to submit the form */}
      <button onClick={handleSave} style={styles.saveButton}>Save</button>
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
};

export default AddMember;
