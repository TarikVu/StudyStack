
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Login';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UsersList';



function App() {
  return (
    <Routes>

      {/* Route Heiarchy */}
      <Route path="/" element={<Layout />} >


        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />


        <Route path="dash" element={<DashLayout />} >

          {/* /dash */}
          <Route index element={<Welcome />} />

          {/* /dash/notes */}
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          {/* /dash/users */}
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route> {/* End dash */}

      </Route>
    </Routes>
  );
}

export default App;
