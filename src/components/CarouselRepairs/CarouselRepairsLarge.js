import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import settings from '../../settings/settings';

const images = settings.images.carouselRepairs;

const CarouselRepairsLarge = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}>
            {images.map((image, index) => (
                <div key={index} className="carousel-item">
                    <img src={image} alt={`Carousel ${index}`} style={{ height: '300px', width: 'auto' }} />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselRepairsLarge;
