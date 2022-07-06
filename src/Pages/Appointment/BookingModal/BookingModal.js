import React from 'react';
import { format } from "date-fns";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatement, date, setTreatement }) => {
    const { _id, name, slots } = treatement;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot)

        setTreatement(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    {/* <p className="py-4">{slots}</p> */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}


                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" required value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" required value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="number" placeholder="phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingModal;