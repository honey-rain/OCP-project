import { useEffect, useState } from 'react';
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'
import Letter from './Letter'
import { removeLocalStorageLetters, setLocalStorageLetters } from '../helpers'

const Letters = ({email}) => {
  const [letters, setLetters] = useState([]);

  const fetchLetters = async () => {   
    const lettersArray = await getDocs(collection(db, "Letters"))

    if(lettersArray) {
      const lettersDocs = lettersArray.docs.map((doc) => ({...doc.data(), id:doc.id }))
      const myDocs = lettersDocs.filter((item) => item.email === email)
      setLetters(myDocs)
      setLocalStorageLetters(myDocs)
    } else {
      console.log('Letters Array is empty')
    }
  }  
   
  useEffect( () => {
      fetchLetters()

      return (
        removeLocalStorageLetters()
      )
  }, [])

  return (
    <div className='letters'>
      <h3>Мої звернення:</h3>
      <ol>
        {letters.map( (letter) => <Letter key= {letter.id} letter={letter} />)}
      </ol>
    </div>
  )
}

export default Letters