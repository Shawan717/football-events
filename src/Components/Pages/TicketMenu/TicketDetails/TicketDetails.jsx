import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdStadium } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css"
import { toast } from "react-toastify";




const TicketDetails = () => {
    const [details, setDetails] = useState([])
    const ticketDetails = useLoaderData()
    console.log(ticketDetails);
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        const singlaTicket = ticketDetails.find(ticket => parseInt(id) === parseInt(ticket.id))
        setDetails(singlaTicket)
    }, [ticketDetails, id]);
    useEffect(()=>{
        AOS.init({duration:"1000",delay:"1"})
    },[])

  
    const { image, heading, title, ticket_heading, ticket_title, stadium,price } = details || {}
    return (
        <div className="max-w-[1440px] mx-auto  py-12 md:flex lg:flex justify-center gap-12">
        
            <img className="md:w-[50%] md:h-[450px] lg:w-[50%] lg:h-[450px] "  data-aos="fade-right" src={image} alt="" />
        
            
            <div className="md:w-[50%] lg:w-[50%] lg:px-0 md:px-0 px-5" data-aos="fade-left">
                <h2 className="text-[32px] lg:text-[40px] md:text-[40px] font-bold">{heading}</h2>
                <h2 className="text-[25px] md:text-[30px]lg:text-[30px]  font-bold">{title}</h2>
                <div className="text-[20px] flex items-center gap-1">
                    <MdStadium />
                    <h3 className="  font-medium">{stadium}</h3>
                </div>
                <div className="py-4">
                    <h3 className="text-[16px] font-medium pb-1">{ticket_heading}</h3>
                    <p className="text-[14px]">{ticket_title}</p>
                </div>
                <div className="text-[16px] flex items-center gap-1">
                    <MdEmail />
                    <h3 className="  font-medium">Email: alexsanju7.com</h3>
                </div>
                <div className="text-[16px] flex items-center gap-1">
                    <FaPhoneAlt />
                    <h3 className="  font-medium"> Phone : 980437912</h3>
                </div>
                <h3 className="text-[22px] md:text-[25px]  lg:text-[25px]  py-4 font-bold text-red-500 "> Price : {price}$</h3>
                <button className="btn rounded-lg bg-red-500 font-medium">Buy Now Ticket</button>

            </div>
        </div>
    );
};

export default TicketDetails;