import { useEffect, useState } from 'react';
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'
import Letter from './Letter'

const AdminLetters = () => {
    const [letters, setLetters] = useState([]);

    const fetchLetters = async () => {
        await getDocs(collection(db, "Letters"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setLetters(newData);
                localStorage.setItem('lettersArray', JSON.stringify(newData))               
                console.log(letters, newData);
            }) 
    }  
   
    useEffect( () => {
        fetchLetters()
    }, [])
    
    return (
        <div>

            <div>Всі звернення:</div>
            <ul>
                {letters.map( (letter) => <Letter key= {letter.id} letter={letter} />)}
            </ul>
        </div>
    )
}

export default AdminLetters