import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const NationalT = ({ nations }) => {
    const { image, name, heading, title } = nations || {}
    useEffect(() => {
        AOS.init({ duration: "1000", delay: "1" })
    }, [])
    return (
        <div>
            <div className="card card-compact h-[450px]  bg-base-100 shadow-xl" data-aos="zoom-in-up">
                <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-[20px] font-bold">{name}</h2>
                    <p className="text-[16px] font-medium py-1">{heading}</p>
                    <p className="text-gray-500">{title}</p>


                </div>
            </div>
        </div>
    );
};

export default NationalT;