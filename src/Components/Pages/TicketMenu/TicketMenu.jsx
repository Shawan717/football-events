import { useEffect, useState } from "react";
import Ticket from "./Ticket/Ticket";


const TicketMenu = () => {
    const [aTicket, setATicket] = useState([]);
    useEffect(() => {
        fetch("ticket.json")
            .then(res => res.json())
            .then(data => setATicket(data))
    }, [])
    return (
        <div className="bg-gradient-to-r from-red-100 to-red-300 py-10">
              < div className="max-w-[1440px] mx-auto" >
                <h2 className="text-center text-[40px] font-bold pb-6">Live <span className="text-[red]">Football</span>Ticket</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    aTicket.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)
                }
            </div>
        </div >
        </div>
      
    );
};

export default TicketMenu;