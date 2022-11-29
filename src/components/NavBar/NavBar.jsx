import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link}>Trading</NavLink>
      <NavLink className={styles.link}>Archive</NavLink>
    </nav>
  );
}

export default NavBar;
