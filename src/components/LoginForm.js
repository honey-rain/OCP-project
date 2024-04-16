import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ваша логіка для перевірки даних та входу користувача
    // Наприклад, можна викликати функцію onLogin після успішного входу
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я користувача:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Увійти</button>
    </form>
  );
};

export default LoginForm;
