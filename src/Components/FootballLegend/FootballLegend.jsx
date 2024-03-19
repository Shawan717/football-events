import Ftlgnd from '../../../public/img/football_legends.png'
import { FaRightLong } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const FootballLegend = () => {
 
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (
        <div className=' max-w-[1440px] mx-auto pt-16 pb-6'>
            <h1 className='text-center text-[40px] font-bold pb-6'>These are <span className='text-[red]'>FOOTBALL</span> legends</h1>
            <div className=" lg:flex gap-10">
                <div className='lg:w-[50%]' data-aos="fade-right">
                    <img className='rounded-lg' src={Ftlgnd} alt="" />
                </div>
                <div className=' lg:w-[50%]' data-aos="fade-left">
                    <h3 className='text-[19px] pb-6'>Football boasts a rich history filled with iconic players who have left an indelible mark on the sport. Legends like Pelé, often regarded as one of the greatest players of all time, mesmerized fans with his incredible skill and prolific goal-scoring ability. Diego Maradona, renowned for his exceptional dribbling and 'Hand of God' goal, remains a revered figure in football history. Lionel Messi and Cristiano Ronaldo, contemporaries who have dominated the sport in the 21st century, continually push the boundaries of excellence with their remarkable talent and numerous records. Other notable figures such as Johan Cruyff, Zinedine Zidane, and Michel Platini have also left an enduring legacy through their contributions to the game, inspiring generations of footballers around the world.</h3>
                    <div>
                        <div className="flex items-center gap-1">
                            <FaRightLong className='text-[red]'></FaRightLong>
                            <h3 className='flex gap-1 text-gray-500'>Football is a global phenomenon, captivating millions with its blend of skill and strategy</h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRightLong className='text-[red] '></FaRightLong>
                            <h3 className='flex gap-1 text-gray-500'>The sport fosters camaraderie and friendships, both on and off the pitch</h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRightLong className='text-[red] '></FaRightLong>
                            <h3 className='flex gap-1 text-gray-500'>It is played on a rectangular field with a goal at each end</h3>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRightLong className='text-[red] '></FaRightLong>
                            <h3 className='flex gap-1 text-gray-500'>Players showcase agility, precision, and teamwork as they navigate the pitch.</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRightLong className='text-[red] '></FaRightLong>
                            <h3 className='flex gap-1 text-gray-500'>Fans' passion is palpable in stadiums worldwide, creating an electrifying atmosphere</h3>
                        </div>
                      
                      
                      
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FootballLegend;