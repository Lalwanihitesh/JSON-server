import React, { useState } from 'react';
import { addUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';

function AddUser() {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user.firstName || !user.lastName || !user.email) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addUser(user);
      navigate('/user'); 
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setUser({ firstName: '', lastName: '', email: '' }); 
  };

  return (
    <div>
      <button onClick={openModal}>Add User</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={user.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <button type="submit">Add User</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddUser;
