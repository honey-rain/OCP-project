import React from 'react';
import { auth, googleAuthProvider } from './firebase'; // Імпорт Firebase аутентифікації

const Login = () => {
  // Функція для входу за допомогою Google
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Авторизація</h2>
      <button onClick={signInWithGoogle}>Увійти за допомогою Google</button>
    </div>
  );
};

export default Login;
