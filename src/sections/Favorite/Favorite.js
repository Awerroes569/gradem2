import PageTitle from '../../components/PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import styles from './Favorite.module.scss';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Favorite = (props) => {

    const navigate = useNavigate();
    const favoriteCards = useSelector(state => getFavoriteCards(state));
    const favoriteCardsLength = favoriteCards.length;

    useEffect(() => {
        if (favoriteCardsLength === 0) {
            navigate('/');
        }
    }, [favoriteCardsLength, navigate]);
    
    return (
        <>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map(card => (
                    <Card key={card.id} title={card.title} id={card.id} />
                ))}
            </ul>
        </>        
    );   
};

export default Favorite;