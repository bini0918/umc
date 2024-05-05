import React from 'react';
import './details.css';

export default function MovieDetail({title, overview }) {
    return (
        <div className='movie-detail-container'>
            <h2>{title}</h2>
            <p><strong></strong> {overview}</p>
        </div>
    );
}