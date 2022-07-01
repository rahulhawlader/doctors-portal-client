import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='flex justify-center items-center pr-10'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-120px]' src={doctor} alt="" />

            </div>
            <div className='flex-1 px-5 py-5'>

                <h3 className='text-xl text-bold text-primary py-5'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum ea incidunt, aspernatur sed voluptatem sequi iste dolorum sit sunt unde delectus, illum ducimus consectetur nostrum voluptatum! Consequatur molestiae, autem maiores officia rerum natus quia debitis ex dolore, voluptatum saepe.</p>
                <PrimaryButton>get Starts</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;