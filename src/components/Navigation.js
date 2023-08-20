import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navbar'>
      <Link className='navbar-link' to='/'>Home</Link>
      <Link className='navbar-link' to='/projects'>Projects</Link>
      <Link className='navbar-link' to='contact'>Contact</Link>
    </div>
  );
};

export default Navigation;
