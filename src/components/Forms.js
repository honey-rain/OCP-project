import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Імпортуйте Firebase
import 'firebase/compat/firestore'; // Імпортуйте модуль Firestore
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

const Forms = () => {
  // const [appealType, setAppealType] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [status, setStatus] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [text, setText] = useState('');
  // const [file, setFile] = useState(null);

   const [imgUrl, setImgUrl] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { appealType, firstName, lastName, phoneNumber, email, status, text, file} = event.target
    // console.log('appealType', appealType.value)
    // console.log('firstName', firstName.value)
    const _file = file?.files[0]




    // Отримати посилання на колекцію "Letters" у вашій базі даних
    const lettersRef = firebase.firestore().collection('Letters');

    // Створіть об'єкт з даними форми
    const formData = {
      appealType: appealType.value,
      firstName: firstName.value,
      lastName: lastName.value,
      status: status.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      text: text.value,
      imgUrl
    };

    const storageRef = ref(storage, `files/${_file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, _file);

    uploadTask.on("state_changed",
      (snapshot) => {
        console.log('file is uploaded')
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );

    // Додайте дані у колекцію "Letters"
    lettersRef.add(formData)
      .then(() => {
        
        console.log("Дані успішно додані до колекції 'Letters'");
      })
      .catch((error) => {
        console.error("Помилка при додаванні даних:", error);
      });
  };

  return (
    <div className="form">
      <h3>Створити звернення</h3>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="form-column">
          <label>
            Вид звернення:
            <select name='appealType'>
              <option value="">Оберіть вид звернення</option>
              <option value="Заява">Заява</option>
              <option value="Скарга">Скарга</option>
              <option value="Пропозиція">Пропозиція</option>
            </select>
          </label>
          <label>
            Ім'я:
            <input name='firstName' type="text" />
          </label>
          <label>
            Прізвище:
            <input name='lastName' type="text" />
          </label>
          <label>
            Статус у цьому ЗВО:
            <input name='status' type="text" />
          </label>
        </div>
        <div className="form-column">
          <label>
            Email:
            <input name='email' type="email" />
          </label>
          <label>
            Номер телефону:
            <input name='phoneNumber' type="tel" />
          </label>
          <label>
            Текст звернення:
            <textarea name='text' />
          </label>
          <label>
            Прикріпити файл:
            <input name='file' type="file" />
          </label>
        </div>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default Forms;
