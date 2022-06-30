import React from 'react';
import Benner from '../Benner/Benner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Benner></Benner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;