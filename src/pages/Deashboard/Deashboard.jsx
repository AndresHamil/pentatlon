// En tus vistas, por ejemplo, Dashboard.jsx
import React from 'react';
import { useUserContext } from '../../UserContext';

const Dashboard = () => {
  const { user, greetUser } = useUserContext();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{`Usuarioss: ${user.name} (${user.email})`}</p>
      <button onClick={greetUser}>Saludar</button>
    </div>
  );
};

export default Dashboard;