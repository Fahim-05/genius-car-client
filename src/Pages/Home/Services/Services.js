import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600 hover:underline'>Services</p>
                <h2 className='my-5 text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-1/2 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure saepe asperiores, architecto similique pariatur! Accusantium, nemo! Perspiciatis, corrupti recusandae.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;