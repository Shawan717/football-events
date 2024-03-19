import facebook from '../../../public/img/facebook_5968764.png'
import instragram from '../../../public/img/instagram_2111463.png'
import twitter from '../../../public/img/twitter_4494477.png'

const Footer = () => {
    return (
        <div className="bg-black p-10 lg:p-0 md:p-0 lg:py-10 md:py-10">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-5 pb-4">
                <div className="lg:col-span-2 ">
                    <h1 className=" font-bold text-[25px] text-white pb-4 text-center lg:text-left md:text-left "><span className='text-[red]'>FOOTBALL </span> HISTORY</h1>
                </div>
                <div className="lg:col-span-3 ">
                    <div className="grid grid-cols-2 lg:grid-cols-4 ">
                        <div className="text-white">
                            <h3 className='text-[16px] font-bold pb-2'>PRODUCT</h3>
                            <p className='text-[14px]'>Football</p>
                            <p className='text-[14px]'>Jerseys</p>
                            <p className='text-[14px]'>Boots</p>
                            <p className='text-[14px]'>Trophy</p>
                        </div>
                        <div className="text-white">
                            <h3 className='text-[16px] font-bold pb-2'>COMPANY</h3>
                            <p className='text-[14px]'>Adidas</p>
                            <p className='text-[14px]'>Nike</p>
                            <p className='text-[14px]'>Puma</p>
                            <p className='text-[14px]'>HP</p>
                            <p className='text-[14px]'>Samsung</p>
                            <p className='text-[14px]'>Reebok</p>
                            <p className='text-[14px]'>Vans</p>
                        </div>
                        <div className="text-white">
                            <h3 className='text-[16px] font-bold pb-2'>FOOTBALL LEAGUE</h3>
                            <p className='text-[14px]'>UEFA Champions League</p>
                            <p className='text-[14px]'>UEFA Euro League</p>
                            <p className='text-[14px]'>Laliga</p>
                            <p className='text-[14px]'>Premier League</p>
                            <p className='text-[14px]'>BundesLiga</p>
                            <p className='text-[14px]'>Spanish Super Copa</p>
                        </div>
                        <div className="text-white">
                            <h3 className='text-[16px] font-bold pb-2'>SOCIAL MEDIA</h3>
                            <div className='flex gap-2 items-center '>
                                <img className='w-[20px] h-[20px]' src={facebook} alt="facebook" />
                                <img className='w-[20px] h-[20px]' src={instragram} alt="instragram" />
                                <img className='w-[20px] h-[20px]' src={twitter} alt="twitter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <p className="text-center text-white pt-4">Copyright © 2024 - All right reserved by Football History</p>


        </div>
    );
};

export default Footer;