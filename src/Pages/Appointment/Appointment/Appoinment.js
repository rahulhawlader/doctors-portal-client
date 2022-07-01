import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import AppoinmentBenner from '../AppoinmentBenner/AppoinmentBenner';
import AvailableAppoinment from '../AvailableAppointment/AvailableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBenner date={date} setDate={setDate}></AppoinmentBenner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;