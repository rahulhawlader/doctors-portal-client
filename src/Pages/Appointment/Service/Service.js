import React from 'react';

const Service = ({ service, setTreatement }) => {
    const { _id, name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'> try another Date</span>
                } </p>

                <p>{slots.length} {slots.length > 1 ? 'Spaces Available' : 'Space Available'}</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatement(service)}
                        for="booking-modal" className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Appointment Booking</label>
                </div>
            </div>
        </div>
    );
};

export default Service;