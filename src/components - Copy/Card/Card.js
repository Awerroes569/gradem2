import styles from './Card.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import DeleteButton from '../DeleteButton/DeleteButton';

const Card = props => {
    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <FavoriteButton id={props.id} isFavorite={props.isFavorite}/>
                <DeleteButton id={props.id} />
            </div>
        </li>
    );
};

export default Card;


