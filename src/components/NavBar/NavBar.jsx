import { NavLink } from 'react-router-dom';
import styles from './.NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <NavLink>Trading</NavLink>
      <NavLink>Archive</NavLink>
    </nav>
  );
}

export default NavBar;
