import styles from './Card.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}<FavoriteButton id={props.id} isFavorite={props.isFavorite}/></li>
    );
};

export default Card;


