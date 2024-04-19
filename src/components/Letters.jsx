import { useEffect, useState } from 'react';
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'
import Letter from './Letter'

const Letters = ({email}) => {
    const [letters, setLetters] = useState([]);

    const fetchLetters = async () => {   
        const lettersArray = await getDocs(collection(db, "Letters"))

        if(lettersArray) {
            const lettersDocs = lettersArray.docs.map((doc) => ({...doc.data(), id:doc.id }))
            const myDocs = lettersDocs.filter((item) => item.email !== email)
            setLetters(myDocs);
            localStorage.setItem('lettersArray', JSON.stringify(myDocs))                
        } else {
            console.log('Letters Array is empty')
        }
    }  
   
    useEffect( () => {
        fetchLetters()
    }, [])
    
    return (
        <div>

            <div>Мої звернення:</div>
            <ul>
                {letters.map( (letter) => <Letter key= {letter.id} letter={letter} />)}
            </ul>
        </div>
    )
}

export default Letters