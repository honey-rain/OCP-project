import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import News from './components/News';
import Cabinet from './components/Cabinet';
import LetterPage from './components/LetterPage'
import Instruction from './components/Instruction';

const AppRouter = () => (
  <Routes> 
    <Route path="/" exact element={<AboutUs />} />
    <Route path="/instruction" exact element={<Instruction />} />
    <Route path="/news" exact element={<News />} />
    <Route path="/cabinet" exact element={<Cabinet />} />
    <Route path="/pages">
      <Route path=":id" element={<LetterPage />} />
    </Route>
  </Routes> 
)

export default AppRouter