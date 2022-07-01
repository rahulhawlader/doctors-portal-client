import chaire from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppoinmentBenner = ({ date, setDate }) => {

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chaire} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>

            </div>
        </div>
    );
};

export default AppoinmentBenner;