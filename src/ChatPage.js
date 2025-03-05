// Importing necessary dependencies from React and React Router
import React, { useState, useEffect } from 'react'; // useState for state management, useEffect for side effects
import { Link, useNavigate } from 'react-router-dom'; // Link for navigation between pages, useNavigate for programmatic navigation


function ChatPage() {
  // State for storing the user's message input
  const [message, setMessage] = useState('');

  // State for storing chat history (messages sent and received)
  const [chat, setChat] = useState([]);

  // State to check if the logged-in user is an admin
  const [isAdmin, setIsAdmin] = useState(false);

  // State to check if the logged-in user is a doctor
  const [isDoctor, setIsDoctor] = useState(false);

  // State to track if any user (admin, doctor, or regular user) is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to control the logout confirmation popup
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Hook for programmatic navigation between pages
  const navigate = useNavigate();




  useEffect(() => {
    //  Check if the user is logged in by retrieving their token from localStorage
    const userToken = localStorage.getItem('userToken'); // User authentication token
  
    //  Retrieve the user's role from localStorage (e.g., "admin", "doctor", "user")
    const userRole = localStorage.getItem('userRole'); // Check user role
  
    //  Set 'isAdmin' to true if the user role is 'admin'
    setIsAdmin(userRole === 'admin');
  
    //  Set 'isDoctor' to true if the user role is 'doctor'
    setIsDoctor(userRole === 'doctor');
  
    //  Determine if the user is logged in:
    // - If the user has a valid token OR is an admin OR is a doctor, they are considered logged in.
    setIsLoggedIn(!!userToken || userRole === 'admin' || userRole === 'doctor');
  }, []); // Runs only once when the component is mounted





const handleSendMessage = () => {
  //  Check if the message is not empty (after trimming whitespace)
  if (message.trim()) {
    
    //  Create an object representing the user's message
    const userMessage = { 
      text: message, // The message content
      sender: 'user' // Identifies the sender as the user
    };

    //  Simulate a system response (currently a placeholder message)
    const systemReply = { 
      text: 'The system is under work', // System-generated reply
      sender: 'system' // Identifies the sender as the system
    };

    //  Update the chat state by adding both the user message and the system response
    setChat([...chat, userMessage, systemReply]);

    //  Clear the input field after sending the message
    setMessage('');
  }
};

const handleLogout = () => {
  //  Remove the stored user role (admin/doctor/regular user) from local storage
  localStorage.removeItem('userRole'); 

  //  Remove the stored authentication token from local storage
  localStorage.removeItem('userToken'); 

  //  Redirect the user to the login page after logging out
  navigate('/login'); 
};


return (
  <div style={styles.container}>

    {/*  Navigation bar that displays different options based on user role */}
    <div style={styles.navbar}>

      {/* If the user is not logged in (neither admin nor doctor), show login & register options */}
      {!isLoggedIn && !isAdmin && !isDoctor && (
        <>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </>
      )}

      {/* If the user is an admin, show database authorization and file upload options */}
      {isAdmin && (
        <>
          <Link to="/authorize-db" style={styles.button}>Authorize DB</Link>
          <Link to="/add-file" style={styles.button}>Add File</Link>
        </>
      )}

      {/* If the user is a doctor, show options related to course management and work information */}
      {isDoctor && (
        <>
          <Link to="/add-course" style={styles.button}>Courses</Link>
          <Link to="/add-member" style={styles.button}>Work Information</Link>
        </>
      )}
    </div>

    {/*  Chat header */}
    <h1 style={styles.title}>Welcome to ChatFCIT</h1>

    {/*  Chat messages display area */}
    <div style={styles.chatBox}>
      {chat.map((msg, index) => (
        <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.systemMessage}>
          {msg.text}
        </div>
      ))}
    </div>

    {/*  Message input field and send button */}
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={styles.input}
        placeholder="Enter your Question"
      />
      <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
    </div>

    {/*  Logout button appears only if the user is logged in */}
    {isLoggedIn && (
      <button onClick={() => setShowLogoutConfirm(true)} style={styles.logoutButton}>Logout</button>
    )}

    {/*  Logout confirmation popup */}
    {showLogoutConfirm && (
      <div style={styles.confirmationBox}>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout} style={styles.confirmButton}>Yes</button>
        <button onClick={() => setShowLogoutConfirm(false)} style={styles.cancelButton}>Cancel</button>
      </div>
    )}
  </div>
);

}


const styles = {
  //  Main container that centers everything on the page
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


  //  Navigation bar (for login, register, admin, and doctor options)
  navbar: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    gap: '10px',
  },

  //  Button style for navigation links
  button: {
    backgroundColor: '#888',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
  },

  //  Main title (ChatFCIT heading)
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },

  //  Chat message box where messages appear
  chatBox: {
    width: '80%',
    maxWidth: '600px',
    height: '300px',
    overflowY: 'auto',
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
  },

  //  Style for user messages (right-aligned)
  userMessage: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    margin: '5px 0',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },

  //  Style for system messages (left-aligned)
  systemMessage: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    margin: '5px 0',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },

  //  Container for the input field and send button
  inputContainer: {
    display: 'flex',
    gap: '10px',
    width: '80%',
    maxWidth: '600px',
  },

  //  Input field where the user types messages
  input: {
    flex: 1,
    padding: '15px',
    fontSize: '18px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ccc',
  },

  //  Send button to submit messages
  sendButton: {
    padding: '15px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },

  //  Logout button styling
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#FF3B30',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },

  //  Confirmation popup when logging out
  confirmationBox: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },

  //  "Yes" button in the confirmation popup
  confirmButton: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },

  //  "Cancel" button in the confirmation popup
  cancelButton: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#888',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default ChatPage;
