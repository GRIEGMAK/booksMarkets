import React from 'react';
import s from './../styles/ImageCard.module.css'

const ImageCard =(props) => {
    return (
        <div>
            <img className={s.imageItem} src={props.image}/>
        </div>
    )
}
export default ImageCard

