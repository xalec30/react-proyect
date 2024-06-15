import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from "../pages/Login";
import About from '../pages/About';
import OverviewDashboard from "../pages/overview";
import Resources from '../pages/resources';
import Categories from '../pages/categories';
import Tags from "../pages/tags";
import Users from '../pages/users';
import Roles from '../pages/Roles';
import Profile from "../pages/profile";

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
            {
                'path': 'resources',
                'element': <Resources/>
            },
            {
                'path' : 'categories',
                'element': <Categories/>
            },
            {
                'path' : 'tags',
                'element': <Tags/>
            },
            {
                'path': 'users',
                'element': <Users/>
            },{
                'path' : 'roles',
                'element': <Roles/>
            },
            {
                'path' : 'profile',
                'element': <Profile/>
            }
        ]
    }
])

export default Router;