import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Login/Login";

import Register from "../Components/Pages/Register/Register";
import WorldCupWinners from "../Components/Pages/WorldCupWinners/WorldCupWinners";
import ChampionsLeague from "../Components/Pages/ChampionsLeague/ChampionsLeague";
import Blogs from "../Components/Blogs/Blogs";
import NationalTeams from "../Components/NationalTeams/NationalTeams";
import TicketDetails from "../Components/Pages/TicketMenu/TicketDetails/TicketDetails";
import PrivateRoute from "../Components/AuthProvider/PrivateRoute/PrivateRoute";



const Root = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/worldCupWinners",
                element:<WorldCupWinners></WorldCupWinners>
            },
            {
                path:"/championsLeague",
                element:<ChampionsLeague></ChampionsLeague>
            },
            {
                path:"/nationalTeam",
                element:<PrivateRoute><NationalTeams></NationalTeams></PrivateRoute>
            },
            {
                path:"/ticketDetails/:id",
                element:<PrivateRoute><TicketDetails></TicketDetails></PrivateRoute>,
                loader:()=>fetch('/ticket.json')
            },
            {
                path:"/blogs",
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
        
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])
export default Root