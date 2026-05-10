import { NavLink } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <h1>Page Not Found</h1>
      <p>The page you tried to open does not exist.</p>
      <NavLink to="/" className="homeLink">Back to dashboard</NavLink>
    </div>
  )
}

export default NotFound