import Login from './pages/login.jsx';
import AdminDashboard from './pages/admin-dashboard.jsx';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      </Routes>
    </>
  );
}

export default App;
