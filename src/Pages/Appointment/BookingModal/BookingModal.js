import React from 'react';
import { format } from "date-fns";

const BookingModal = ({ treatement, date, setTreatement }) => {
    const { _id, name, slots } = treatement;

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot)

        setTreatement(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    {/* <p class="py-4">{slots}</p> */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}


                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="number" placeholder="phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingModal;