import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './Login';
import CabinetContent from './CabinetContent';

const Cabinet = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Спостереження за змінами статусу авторизації
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Якщо користувач авторизований, встановлюємо його дані в стан
        setUser(user);
      } else {
        // Якщо користувач не авторизований, очищаємо дані користувача в стані
        setUser(null);
      }
    });

    // Прибирання підписки при виході з компонента
    return () => unsubscribe();
  }, []);

  return (
    <div className="cabinet">
      <h1>Кабінет</h1>
      {user ? <CabinetContent user = {user} /> : <Login />}
    </div>
  );
};

export default Cabinet;
