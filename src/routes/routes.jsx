import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from "../pages/Login";
import About from '../pages/About';
import OverviewDashboard from "../pages/overview";

const Router =  createBrowserRouter([
    {
        'path': '/',
        'element': <Home/>
    },
    {
        'path': '/account/register',
        'element': <Register/>
    },
    {
        'path': '/account/login',
        'element': <Login/>
    },
    {
        'path': '/about',
        'element': <About/>
    },{
        'path': '/dashboard/',
        'element': <PrivateRoute />,
        'children' : [
            {
                'path': 'overview',
                'element': <OverviewDashboard />,
            },
            {
                'path': 'profile',
                'element': 'hola'
            },
        ]
    }
])

export default Router;