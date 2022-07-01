import React from 'react';

const Service = ({ service, setTreatement }) => {
    const { _id, name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'> try another Date</span>
                } </p>

                <p>{slots.length} {slots.length > 1 ? 'Spaces Available' : 'Space Available'}</p>
                <div class="card-actions justify-end">

                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatement(service)}
                        for="booking-modal" class="btn btn-secondary text-white uppercase">Appointment Booking</label>
                </div>
            </div>
        </div>
    );
};

export default Service;