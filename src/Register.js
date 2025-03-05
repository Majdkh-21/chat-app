import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; 

function PersonalInfo() {
  // State to store form data (user's personal information)
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    password: '',
    position: '',
    role: '',
  });

  // Function to handle input changes and update the state dynamically
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Function to handle form submission (simulated save action)
  const handleSave = () => {
    alert('تم حفظ المعلومات بنجاح!'); // Show success message
  };


  return (
    <div style={styles.container}>
      {/* Back button to return to the previous page */}
      <button style={styles.backButton} onClick={() => window.history.back()}>&lt;</button>

      {/* Page title for personal information */}
      <h2 style={styles.title}>Personal information</h2>

      {/* Loop through formData keys to dynamically generate input fields */}
      {Object.keys(formData).map((field) => (
        <div key={field} style={styles.inputContainer}>

          {/* Input field for each personal information attribute */}
          <input
            type={field === 'password' ? 'password' : 'text'} // Hide password input for security
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize placeholder text
            value={formData[field]} // Bind input value to the corresponding state field
            onChange={(e) => handleChange(field, e.target.value)} // Update formData when user types
            style={styles.input}
          />

          {/* Edit icon next to each input field */}
          <FaEdit style={styles.icon} />
        </div>
      ))}

      {/* Save button to trigger form submission */}
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
};

export default PersonalInfo;