import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 bottom-0 top-1/2">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 bottom-0 top-3/4 w-2/5">
                <p className='text-white text-xl'>Here are a short text about the car doctor service. You can enjoy with by using our service</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-0 gap-8 top-3/5 w-2/5">
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-8">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;