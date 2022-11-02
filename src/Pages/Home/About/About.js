import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 rounded-xl mb-32 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt=''/>
                    <img src={parts} className="absolute right-20 top-36 w-2/5 rounded-lg shadow-2xl border-4 border-orange-600" alt=''/>
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600 hover:underline'>About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br/> 
                        & experience <br/>
                        in this field</h1>
                    <p className="py-6 w-4/5 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-600 border-none hover:bg-orange-700">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;