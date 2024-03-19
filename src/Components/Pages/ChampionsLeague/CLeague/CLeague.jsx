import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const CLeague = ({ winner }) => {
    const { id, image, title, season, winning_club, country_name, final, date, fild_name } = winner || {}
    useEffect(() => {
        AOS.init({ duration: "1000", delay: "1" })
    }, [])
    return (
        <div className="card card-compact  bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[20px] font-bold py-1">{winning_club}</h2>
                <p className="text-[15px] font-semibold text-gray-500">{title} <span>{season}</span></p>       
                <p className="text-[14px] font-semibold text-gray-500">{final}</p>
                <p className="text-[14px] font-semibold text-gray-500">{date}</p>
                <p className="text-[14px] font-semibold text-gray-500">{fild_name}</p>

            </div>
        </div>
    );
};

export default CLeague;