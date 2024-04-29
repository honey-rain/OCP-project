import { useEffect, useState } from 'react';
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'
import Letter from './Letter'
import { removeLocalStorageLetters, setLocalStorageLetters } from '../helpers'

const AdminLetters = () => {
  const [letters, setLetters] = useState([]);

  const fetchLetters = async () => {
    await getDocs(collection(db, "Letters"))
      .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        setLetters(newData);
        setLocalStorageLetters(newData)               
      }) 
  }  
   
  useEffect( () => {
    fetchLetters()
    
    return (
        removeLocalStorageLetters()
      )
  }, [])
    
  return (
    <div className='letters'>
      <div>Всі звернення:</div>
      <ol>
        {letters.map( (letter) => <Letter key= {letter.id} letter={letter} />)}
      </ol>
    </div>
  )
}

export default AdminLetters