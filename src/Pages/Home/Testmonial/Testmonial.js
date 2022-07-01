import React from 'react';
import icons from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testmonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "sdds dsd sdsdsd  dsd d dsdds  dsdsd  sds d",
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "sdds dsd sdsdsd  dsd d dsdds  dsdsd  sds d",
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "asas sasas sasa s saas as ssas sasa ",
            location: 'california',
            img: people3
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testmonial</h3>
                    <h1 className='text-3xl'>What Our Patients says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={icons} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testmonial;