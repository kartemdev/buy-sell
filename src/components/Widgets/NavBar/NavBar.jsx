import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setNavbarState } from '../../../redux/slices/uiSlices/navbarStateSlice';
import styles from './NavBar.module.css';

function NavBar() {
  const { state } = useSelector((store) => store.navabrState);

  const dispatch = useDispatch();

  return (
    <nav className={styles.nav}>
      <NavLink
        onClick={() => dispatch(setNavbarState(1))}
        to="/"
        className={styles.link}
        value={state === 1}
      >Trading
      </NavLink>
      <NavLink
        onClick={() => dispatch(setNavbarState(2))}
        to="/archive"
        className={styles.link}
        value={state === 2}
      >Archive
      </NavLink>
    </nav>
  );
}

export default NavBar;
