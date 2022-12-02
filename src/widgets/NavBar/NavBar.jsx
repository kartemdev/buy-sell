import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const [statePage, setStatePage] = useState(1);

  return (
    <nav className={styles.nav}>
      <NavLink
        onClick={() => setStatePage(1)}
        to="/"
        className={styles.link}
        value={statePage === 1}
      >Trading
      </NavLink>
      <NavLink
        onClick={() => setStatePage(2)}
        to="/archive"
        className={styles.link}
        value={statePage === 2}
      >Archive
      </NavLink>
    </nav>
  );
}

export default NavBar;
