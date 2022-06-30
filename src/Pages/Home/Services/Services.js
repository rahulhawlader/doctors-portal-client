import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatement",
            Description: "s sdds dsds  dsdsds dsds ds sds sdsd",
            img: fluride

        },
        {
            _id: 2,
            name: "cavity Treatement",
            Description: "lorem asa sas sas ddsd  dsd ddsds dsds ",
            img: cavity

        },
        {
            _id: 3,
            name: "whitening Treatement",
            Description: "sdsd  dsd sd dsd sd dsds dsds",
            img: whitening

        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;