import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const initState = {
  'firstName': '',
  'lastName': '',
  'text': ''
}

const LetterPage = () => {
  const { id }  = useParams()
  const [letter, setLetter] = useState(initState)

  useEffect(() => {
    const lettersArray = JSON.parse(localStorage.getItem('lettersArray'))
    const _letter = lettersArray.find((element) => element.id === id)
    console.log('_letter', _letter)
    setLetter(_letter)
  }, [])
  
  return (
    <ul>
      <li>{letter.firstName} {letter.lastName}</li>
      <li>{letter.text}</li>
    </ul>
  )
}

export default LetterPage