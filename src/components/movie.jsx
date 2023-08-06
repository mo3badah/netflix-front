import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Play from "./PlayerComponent";


const video = (props) => {
    const {video, index, type} = props;
    const handleMouseEnter = (index) => {
        // videos[index].play();
    }
    const handleMouseLeave = (index) => {
        // videos[index].pause();
    }

    return (
        <div
            key={`div-video-${type}-${index}`}
            className="video video-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ position: 'relative', width: '400px', height: '300px' }}
        >
            <video
                width="100%"
                height="100%"
                loop
                // ref={(videoRef) => (videos[index] = videoRef)}
                className="mylist-img p-r-10 p-t-10 "
                poster={video.posterUrl}
            >
                <source src={video.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Link to={`/play/${video._id}`} className="video-link">
            <div className="video-description d-flex flex-end direction-column">
                <div className="play-button">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 4l15 8-15 8z" fill="black"></path>
                    </svg>
                </div>
                <div>
                    <h4 className="heading f-w-8 text-shadow">{video.seriesTitle}</h4>
                </div>
                <div className="info d-flex flex-middle flex-no-wrap">
                    <p className="rated text-shadow">
                        <strong>{video.certificate}</strong>
                    </p>
                    <p className="season-count text-shadow">{video.runtime}</p>
                </div>
                <div className="genere d-flex flex-no-wrap text-shadow">
                    {video.genre.split(',').map((genre, idx) => (
                        <p key={idx}>{genre.trim()}</p>
                    ))}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default video;