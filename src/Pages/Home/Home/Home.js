import React from 'react';
import Benner from '../Benner/Benner';
import ContackUs from '../ContackUs/ContackUs';


import DentalCare from '../DentalCare/DentalCare';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testmonial></Testmonial>
            <ContackUs></ContackUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;