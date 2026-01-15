import Login from './pages/login.jsx';
import AdminDashboard from './pages/admin-dashboard.jsx';
import AddStudents from './pages/add-students.jsx';
import ViewStudents from './pages/view-students.jsx';
import MarksEntry from './pages/marks-entry.jsx';
import Results from './pages/result.jsx';

import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/add-students" element={<AddStudents />} />
        <Route path="/view-students" element={<ViewStudents />} />
        <Route path="/marks-entry" element={<MarksEntry />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
