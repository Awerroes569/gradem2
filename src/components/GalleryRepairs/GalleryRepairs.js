import React from 'react';
import Image from 'react-bootstrap/Image';
import settings from '../../settings/settings';
import './GalleryRepairs.css'; // Import your CSS file

const images = settings.images.carouselRepairs;

const FlexGallery = (props) => {
    return (
        <div className="flex-gallery">
            {images.map((image, index) => (
                <div key={index} className="flex-gallery-item">
                    <Image src={image} className="gallery-image" />
                </div>
            ))}
        </div>
    );
};

export default FlexGallery;
