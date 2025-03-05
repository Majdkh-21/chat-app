// useState for state management, useEffect for side effects
import React, { useState } from 'react';

function AddFile() {
    // State to store the selected file
    const [file, setFile] = useState(null);
    
    // State to store the name of the selected file
    const [fileName, setFileName] = useState('');
  
    // Function to handle file selection
    const handleFileChange = (event) => {
      setFile(event.target.files[0]); // Store the selected file in state
      setFileName(event.target.files[0].name); // Store the file name in state
    };
  
    // Function to handle file upload
    const handleUpload = () => {
      // Check if a file has been selected
      if (!file) {
        alert('Please select a file first.'); // Show alert if no file is chosen
        return;
      }
      
      alert(`File "${fileName}" uploaded successfully!`); // Display success message
      
      // Here, you can add code to upload the file to a server
    };
  

    return (
        <div style={styles.container}>
          
          {/* Back button to return to the previous page */}
          <button style={styles.backButton} onClick={() => window.history.back()}>&lt;</button>
          
          {/* Page title for the file upload section */}
          <h1 style={styles.title}>Upload File</h1>
          
          {/* Input field for selecting a file */}
          <input
            type="file"
            onChange={handleFileChange} // Calls handleFileChange when a file is selected
            style={styles.input}
          />
          
          {/* Upload button to trigger file upload */}
          <button onClick={handleUpload} style={styles.uploadButton}>
            Upload
          </button>
          
        </div>
      );
      
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#222',
    color: 'white',
    position: 'relative', 
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: '#444',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddFile;
