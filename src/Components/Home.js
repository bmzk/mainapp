import React from 'react';
import hero from "./img/hero-img1.jpg"

export default function Home() {
    return (
        <div className="section-main">
            <div className="main">
                <div className="hero-text-box">
                    <h1 className="heading-primary">
                        Personal blog
                    </h1>
                    <p className="main-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facilis.
                    </p>
                </div>
                <div className="main-img-box">
                    <picture>
                        <img src={hero} alt="my image" className="main-img"/>    
                    </picture>
                </div>
            </div>
        </div>
    )
}
