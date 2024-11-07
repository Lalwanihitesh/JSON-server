import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './Componants/UserList';
import AddUser from './Componants/AddUser';
import EditUser from './Componants/EditUser';
import ViewUser from './Componants/ViewUser';
import { Admin } from './pages/admin/Admin';


function App() {
  return (
    <Router>
      <div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
            <Route path="/user/view/:id" element={<ViewUser/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
