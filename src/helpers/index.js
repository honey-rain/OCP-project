import { LETTERS_KEY } from './constants'

export const removeLocalStorageLetters = () => localStorage.removeItem(LETTERS_KEY)

export const getLocalStorageLetters = () => JSON.parse(localStorage.getItem(LETTERS_KEY))

export const setLocalStorageLetters = (arr) => localStorage.setItem(LETTERS_KEY, JSON.stringify(arr)) 
