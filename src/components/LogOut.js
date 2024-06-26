import React from 'react';
import { auth } from './firebase'; 
const LogOut = () => {
  const handleLogOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogOut}>Вийти</button>
    </div>
  );
};

export default LogOut;
