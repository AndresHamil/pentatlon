import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { UserProvider } from './UserContext';

import Dashboard from './pages/Deashboard/Deashboard.jsx';
import Login from './pages/Login/Login.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

import './App.scss';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}