import React from 'react';
import GalleryItem from './GalleryItem';
import Message from './Message';

const Gallery = ({query, images}) => {
    // check for results
    const hasResults = () => {
        if (images.length > 0) {
            return (<ul>
                        {images.map(image => <GalleryItem key={image.id} farm={66} server={image.server} id={image.id} secret={image.secret} title={image.title} />)}
                    </ul>);
        } else {
            return <Message text="No results found" />
        }
    }
    return (
        <div className="photo-container">
            <h2>Results for {query}</h2>
                {hasResults()}
        </div>
    );
}

export default Gallery;