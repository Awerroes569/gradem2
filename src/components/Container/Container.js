import styles from './Container.module.scss';

const Container = (props) => {
    return (
        <div className={styles.main_container}>
            {props.children}
        </div>
    );
};

export default Container;