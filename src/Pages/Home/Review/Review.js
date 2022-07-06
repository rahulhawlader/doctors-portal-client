import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos omnis totam nemo animi laborum culpa rerum itaque! Facere, error?</p>
                <div className='flex items-center'>
                    <div className="avatar ">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            <img src={review.img} alt="" />
                        </div>


                    </div>
                    <div className='px-3'>
                        <h3 className='text-xl font-bold '>{review.name}</h3>
                        <p>{review.location}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Review;