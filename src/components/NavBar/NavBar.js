import styles from './NavBar.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <a
                    href="/"
                    className={styles.logo}
                >
                    <FontAwesomeIcon icon={faBarsProgress} />
                </a>
            </div>
            <div className={clsx(styles.column, styles.auto)}></div>
            <div className={styles.column}>
                <a
                    href="/"
                    className={styles.link}
                >
                    Home
                </a>
            </div>
            <div className={styles.column}>
                <a
                    href="favorite"
                    className={styles.link}
                >
                    Favorite
                </a>
            </div>
            <div className={styles.column}>
                <a
                    href="/about"
                    className={styles.link}
                >
                    About
                </a>
            </div>
        </div>
    );
};

export default NavBar;