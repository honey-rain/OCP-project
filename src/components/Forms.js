import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Імпортуйте Firebase
import 'firebase/compat/firestore'; // Імпортуйте модуль Firestore

const Forms = () => {
  const [appealType, setAppealType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Отримати посилання на колекцію "Letters" у вашій базі даних
    const lettersRef = firebase.firestore().collection('Letters');

    // Створіть об'єкт з даними форми
    const formData = {
      appealType,
      firstName,
      lastName,
      status,
      email,
      phoneNumber,
      text,
      file
    };

    // Додайте дані у колекцію "Letters"
    lettersRef.add(formData)
      .then(() => {
        console.log("Дані успішно додані до колекції 'Letters'");
        // Очистіть форму після успішного додавання
        setAppealType('');
        setFirstName('');
        setLastName('');
        setStatus('');
        setEmail('');
        setPhoneNumber('');
        setText('');
        setFile(null);
      })
      .catch((error) => {
        console.error("Помилка при додаванні даних:", error);
      });
  };

  return (
    <div className="content">
      <h2>Створити звернення</h2>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <label>
          Вид звернення:
          <select value={appealType} onChange={(e) => setAppealType(e.target.value)}>
            <option value="">Оберіть вид звернення</option>
            <option value="Заява">Заява</option>
            <option value="Скарга">Скарга</option>
            <option value="Пропозиція">Пропозиція</option>
          </select>
        </label>
        <label>
          Ім'я:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Прізвище:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Статус у цьому ЗВО:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          Електронна пошта:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Номер телефону:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Текст звернення:
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          Прикріпити файл:
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default Forms;
