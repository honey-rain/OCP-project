import React, { useState } from 'react';
import { auth } from './firebase'; // імпортуємо об'єкт auth з firebase

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Помилка входу:', error);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Електронна пошта" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleLogIn}>Увійти</button>
    </div>
  );
};

export default LogIn;
