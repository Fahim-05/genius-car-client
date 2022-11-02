import React from 'react';

const ServiceCard = ({service}) => {
    const {img, price, title} = service;
    return (
        <div className="card card-compact bg-base-300 border border-orange-500 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;