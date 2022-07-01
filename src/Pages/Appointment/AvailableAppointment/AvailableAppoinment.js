import { format } from "date-fns";
import { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Service from "../Service/Service";


const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatement, setTreatement] = useState(null)
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <p className="text-center text-primary text-center">Available Appointment On: {format(date, 'PP')}   </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                    ></Service>)

                }
            </div>
            {treatement && <BookingModal date={date}
                treatement={treatement}
                setTreatement={setTreatement}
            ></BookingModal>}

        </div>
    );
};

export default AvailableAppoinment;