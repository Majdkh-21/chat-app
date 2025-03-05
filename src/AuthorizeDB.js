// Imports React library to create components
import React, { useState } from 'react';

// Link for navigation between pages, useNavigate for programmatic navigation
import { Link } from 'react-router-dom';

function AuthorizeDB() {

    // State for storing the search term entered by the user
    const [searchTerm, setSearchTerm] = useState('');
  
    // State for storing the list of users with their details (id, name, role, email, gender, and active status)
    const [users, setUsers] = useState([
      { id: 1, name: 'Ali Ahmed', role: 'Admin', email: 'ali@example.com', gender: 'Male', active: true },
      { id: 2, name: 'Sara Mohamed', role: 'User', email: 'sara@example.com', gender: 'Female', active: true },
      { id: 3, name: 'Khalid Abdullah', role: 'User', email: 'khalid@example.com', gender: 'Male', active: true },
    ]);
  
    // Function to deactivate or activate a user by toggling their "active" status
    const handleDeactivate = (id) => {
      setUsers(users.map(user => 
        user.id === id ? { ...user, active: !user.active } : user // Toggle active status
      ));
    };
  
    // Filter users based on the search term (matches name, email, or role)
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

    return (
        <div style={styles.container}>
          {/* Back button to navigate to the homepage */}
          <Link to="/" style={styles.backButton}>&lt;</Link>
          
          {/* Page title */}
          <h1 style={styles.title}>Authorize DB</h1>
    
          <div style={styles.tableContainer}>
            <div style={styles.header}>
              {/* Section title */}
              <h3>Authorized users</h3>
    
              {/* Search input field to filter users by name, role, or email */}
              <input
                type="text"
                placeholder="Search user"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
                style={styles.searchInput}
              />
            </div>
    
            {/* Table to display the list of users */}
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>#</th>        {/* Column for user index */}
                  <th>Name</th>     {/* Column for user name */}
                  <th>Role</th>     {/* Column for user role (Admin/User) */}
                  <th>Email</th>    {/* Column for user email */}
                  <th>Gender</th>   {/* Column for user gender (Male/Female) */}
                  <th>Action</th>   {/* Column for action button (Activate/Deactivate) */}
                </tr>
              </thead>
              <tbody>
                {/* Loop through filteredUsers and render each user in a table row */}
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td> {/* Display user index starting from 1 */}
                    <td>{user.name}</td> {/* Display user name */}
                    <td>{user.role}</td> {/* Display user role */}
                    <td>{user.email}</td> {/* Display user email */}
                    <td>{user.gender}</td> {/* Display user gender */}
                    <td>
                      {/* Button to activate or deactivate the user */}
                      <button
                        style={user.active ? styles.deactivateButton : styles.activateButton}
                        onClick={() => handleDeactivate(user.id)} // Toggle user active status
                      >
                        {user.active ? 'Deactivate' : 'Activate'} {/* Display button label based on user status */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '20px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  title: {
    fontSize: '30px',
    marginBottom: '20px',
  },
  tableContainer: {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '700px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  searchInput: {
    padding: '8px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#444',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #555',
  },
  deactivateButton: {
    padding: '5px 10px',
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activateButton: {
    padding: '5px 10px',
    backgroundColor: '#5cb85c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AuthorizeDB;
