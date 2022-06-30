import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import markar from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
            <InfoCard cartTitle="Opening Ours" bgClass="bg-primary" img={clock}></InfoCard>
            <InfoCard cartTitle="Ours Locations" bgClass="bg-accent" img={markar}></InfoCard>
            <InfoCard cartTitle="Contack Us" bgClass="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;