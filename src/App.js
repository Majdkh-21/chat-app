import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChatPage from './ChatPage';
import Login from './Login';
import Register from './Register';
import AddCourse from './AddCourse'; 
import AddMember from './AddMember';
import AddFile from './AddFile';
import AuthorizeDB from './AuthorizeDB';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/add-file" element={<AddFile />} />
        <Route path="/add-file" element={<AddFile />} /> 
        <Route path="/authorize-db" element={<AuthorizeDB />} />
      </Routes>
    </Router>
  );
}

export default App;

