import { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"




const Ticket = ({ ticket }) => {
    console.log(ticket);
    const {id, image, heading, title, ticket_heading, ticket_title, stadium } = ticket;
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])
    return (


        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="card card-compact  shadow-xl  h-fit group">
            <div className="relative overflow-hidden" >
                <figure><img className="h-[300px] w-full rounded-lg" src={image} alt="Shoes" /></figure>
                <div className=" absolute h-full w-full bg-black/50 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                    <div>
                        <p className="text-[25px] text-white font-medium pb-4">{title}</p>
                        
                        <div>
                           <Link to={`/ticketDetails/${id}`}> <button className="bg-red-500   text-white py-3 px-6 rounded-lg mx-auto flex justify-center items-center">Buy Now</button></Link>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Ticket;