import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Banner = () => {
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (
        <div className=" h-[80vh] bg-cover bg-center " style={{ backgroundImage: "url('/img/banner.jpg')" }}>
            <div className='h-[80vh] max-w-[1440px]  mx-auto flex justify-center items-center'>
                <div data-aos="fade-down">
                    <h1 className="flex justify-center items-center text-[35px] lg:text-[70px] font-extrabold  text-red-500">LET'S ENJOY THE TASTE OF </h1>
                    <h1 className="flex justify-center items-center text-[35px] lg:text-[70px] font-extrabold text-white">VICTORY TOGETHER </h1>
                    <div className="flex justify-center items-center gap-5">
                        <p className="border-0 btn bg-[red] text-white hover:text-black">READ MORE</p>
                        
                        <p className="border-0 btn bg-[red] text-white hover:text-black">SEE MORE</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;