import { useEffect, useState } from "react";
import NationalT from "./NationalT/NationalT";


const NationalTeams = () => {
    const [team,setTeam]=useState([])
    useEffect(()=>{
        fetch('nationalTeam.json')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    return (
        <div className="max-w-[1440px] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-6">
            {
                team.map(nations=><NationalT key={nations.id} nations={nations}></NationalT>)
            }
        </div>
    );
};

export default NationalTeams;