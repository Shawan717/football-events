import { useEffect } from 'react';
import facebook from '../../../../public/img/facebook_5968764.png'
import instragram from '../../../../public/img/instagram_2111463.png'
import twitter from '../../../../public/img/twitter_4494477.png'


import AOS from "aos";
import "aos/dist/aos.css"

const Blog = ({blog}) => {
  
    const {image,heading,title}=blog || {}
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (
        <div>
            <div className="md:flex lg:flex lg:gap-12 md:gap-12 lg:py-12 py-6" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img className="md:w-[400px] lg:w-[400px]" src={image} alt="" />
                <div>
                    <h3 className=" text-[30px] md:text-[35px] lg:text-[35px] font-bold">{heading}</h3>
                    <p className="py-3 lg:py-5 md:py-5 text-gray-500 text-[16px] font-medium">{title}</p>
                    <div className='flex gap-2 items-center '>
                        <img className='w-[20px] h-[20px]' src={facebook} alt="facebook" />
                        <img className='w-[20px] h-[20px]' src={instragram} alt="instragram" />
                        <img className='w-[20px] h-[20px]' src={twitter} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;