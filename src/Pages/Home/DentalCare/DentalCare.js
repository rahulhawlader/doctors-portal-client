import React from 'react';
import treatement from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen bg-base-200  py-10">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{ width: "400px", height: "400px" }} src={treatement} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care On Your Terms!</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores, unde voluptate voluptatum aliquid tempore distinctio nulla voluptatibus, exercitationem ratione repudiandae! Incidunt minima itaque sunt quia in tempore natus cum consequuntur deserunt temporibus facere ab iste exercitationem, perferendis aspernatur inventore.</p>
                    <PrimaryButton>get Starts</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;