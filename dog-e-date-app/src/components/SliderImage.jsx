import React from 'react'
import './SliderImage.css'

export default function SliderImage(props) {
    return (
        <div className="slider-image" style={{ background: `url("${props.dog.image}")` }} >
            <h1 className="slider-image-title">{props.dog.name}</h1>
        </div>
    )
}
