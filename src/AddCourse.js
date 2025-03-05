import React, { useState } from 'react';

function AddCourse() {
  // State to manage form data for adding a course
  const [formData, setFormData] = useState({
    department: '', // Department name
    courseName: '', // Course name
    time: '',       // Course schedule/time
    location: '',   // Course location
  });

  // Function to handle input changes and update formData
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Function to handle saving the course details
  const handleSave = () => {
    alert('Course added successfully!');
  };

  return (
    <div style={styles.container}>
      {/* Back button to return to the previous page */}
      <button style={styles.backButton} onClick={() => window.history.back()}>&lt;</button>

      {/* Page title for adding a new course */}
      <h2 style={styles.title}>Add Course</h2>

      {/* Dynamically generate input fields for department, course name, time, and location */}
      {Object.keys(formData).map((field) => (
        <div key={field} style={styles.inputContainer}>
          
          {/* Input field with a placeholder formatted to capitalize the first letter */}
          <input
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]} // Bind input value to formData
            onChange={(e) => handleChange(field, e.target.value)} // Update formData when user types
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

export default AddCourse;
