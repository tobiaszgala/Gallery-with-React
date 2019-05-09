import React from 'react';

const GalleryItem = (props) => {
    return (
        <li>
            <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
        </li>
    );
}

export default GalleryItem;