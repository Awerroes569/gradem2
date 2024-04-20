import styles from './NavBar.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <div className={styles.container}>

            <div className={styles.column}>
                <Link to="/" className={styles.logo}>
                    <FontAwesomeIcon icon={faBarsProgress} />
                </Link>
            </div>
            <div className={clsx(styles.column, styles.auto)}></div>
            <div className={styles.column}>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">
                    Home
                </NavLink>
            </div>
            <div className={styles.column}>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/favorite">
                    Favorite
                </NavLink>
            </div>
            <div className={styles.column}>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/about">
                    About
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;