import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getLocalStorageLetters } from '../helpers'

const initState = {
  'firstName': '',
  'lastName': '',
  'text': ''
}

const LetterPage = () => {
  const { id }  = useParams()
  const [letter, setLetter] = useState(initState)

  useEffect(() => {
    const lettersArray = getLocalStorageLetters()
    const _letter = lettersArray.find((element) => element.id === id)
    setLetter(_letter)
  }, [id])
  
  return (
    <ul>
      <li>{letter.firstName} {letter.lastName}</li>
      <li>{letter.text}</li>
    </ul>
  )
}

export default LetterPage