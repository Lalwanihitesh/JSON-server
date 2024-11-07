import { Routes, Route, Outlet } from 'react-router-dom';
import UserList from '../../Componants/UserList';
import AddUser from '../../Componants/AddUser';
import EditUser from '../../Componants/EditUser';

function Admin() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddUser />
      {/* <EditUser/> */}
    
      <UserList/>
    </div>
  );
}

function UserModule() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
    </Routes>
  );
}

export { Admin, UserModule };
