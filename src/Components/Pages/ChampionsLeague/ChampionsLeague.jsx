import { useEffect, useState } from "react";
import CLeague from "./CLeague/CLeague";


const ChampionsLeague = () => {
    const [winner,setWinner]=useState([])
    useEffect(()=>{
        fetch('clg.json')
        .then(res=>res.json())
        .then(data=>setWinner(data))
    },[])
    return (
        <div className="max-w-[1440px] mx-auto pt-10 pb-6">
            <h2 className="text-[40px] text-center font-bold pb-6">
            UEFA <span className="text-[red]">Champions League</span> History
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {winner.map(winner=><CLeague key={winner.id} winner={winner}></CLeague>)}
            </div>
        </div>
    );
};

export default ChampionsLeague;