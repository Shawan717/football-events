import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const WorldCup = ({ winner }) => {
    const { id, image, season, winner_info, final, date, fild_name } = winner || {}

    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (


        <div className="card card-compact  bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[20px] font-bold py-1">{winner_info}</h2>
                <p className="text-[15px] font-semibold text-gray-500">{season}</p>
                <p className="text-[14px] font-semibold text-gray-500">{final}</p>
                <p className="text-[14px] font-semibold text-gray-500">{fild_name}</p>
                <p className="text-[14px] font-semibold text-gray-500">{date}</p>
              
                
            </div>
        </div>

    );
};

export default WorldCup;