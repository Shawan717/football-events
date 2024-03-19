
import { useEffect, useState } from "react";
import WorldCup from "./WorldCup/WorldCup";



const WorldCupWinners = () => {
    const [winner,setWinner]=useState([])
    useEffect(()=>{
        fetch('worldCup.json')
        .then(res=>res.json())
        .then(data=>setWinner(data))
    },[])
    return (
        <div className="max-w-[1440px] mx-auto pt-10 pb-6">
            <h2 className="text-[40px] text-center font-bold pb-6">
                FIFA <span className="text-[red]">World Cup</span> History
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    winner.map(worldCup=><WorldCup key={worldCup.id} winner={worldCup}></WorldCup>)
                }
            </div>
        </div>
    );
};

export default WorldCupWinners;