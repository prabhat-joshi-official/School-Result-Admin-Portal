import Login from './pages/login.jsx';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />  
      </Routes>
    </>
  );
}

export default App;
