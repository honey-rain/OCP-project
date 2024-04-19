import { Link } from 'react-router-dom'

const Letter = ({letter}) => (
  <li>
    <Link to={`/pages/${letter.id}`}>{letter.firstName} {letter.lastName}</Link>
  </li>
)

export default Letter