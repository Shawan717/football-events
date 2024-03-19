import FootballLegend from "../../FootballLegend/FootballLegend";
import Banner from "../Banner/Banner";
import ChampionsLeague from "../ChampionsLeague/ChampionsLeague";
import TicketMenu from "../TicketMenu/TicketMenu";
import WorldCupWinners from "../WorldCupWinners/WorldCupWinners";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <FootballLegend></FootballLegend>
            <TicketMenu></TicketMenu>
            <WorldCupWinners></WorldCupWinners>
            <ChampionsLeague></ChampionsLeague>
        </div>
    );
};

export default Home;