import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
// style={{ backgroundImage: "url('./image/banner.jpg')" }}
const Banner = () => {
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (
        <div className=" h-[80vh] bg-sky-200" >
            <div className='h-[80vh] border max-w-[1440px]  mx-auto flex justify-center items-center'>
                <div data-aos="fade-down">
                    <h1 className="flex justify-center items-center text-[35px] lg:text-[70px] font-extrabold">LET'S ENJOY THE TASTE OF </h1>
                    <h1 className="flex justify-center items-center text-[35px] lg:text-[70px] font-extrabold">VICTORY TOGETHER </h1>
                    <div className="flex justify-center items-center gap-5">
                        <p className="border rounded-lg py-2 lg:py-3 px-3 lg:px-5 hover:bg-[red]">READ MORE</p>
                        <p className="border rounded-lg py-2 lg:py-3 px-3 lg:px-5 hover:bg-[red]">SEE MORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;