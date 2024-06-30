import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import LoginRoute from './LoginRoute';
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
import LostPassword from "../pages/lostPassword";

import Third from "../pages/3d";
import Blogs from "../pages/blogs";
import Colours from "../pages/colours";
import Components from '../pages/components';
import Backgrounds from "../pages/background";
import Illustrator from "../pages/illustrator";
import Videos from '../pages/videos';
import Tools from '../pages/tools';
import Tipography from "../pages/tipography";
import Photos from "../pages/photos";
import Library from "../pages/library";


const Router =  createBrowserRouter([
    {
        'path': '/',
        'element': <Home/>,
        'children' : [
            {
                'path': '/3D',
                'element': <Third/>,
            },
            {
                'path': '/Blogs',
                'element': <Blogs/>,
            },
            {
                'path': '/Colours',
                'element': <Colours/>,
            },
            {
                'path': '/Components',
                'element': <Components/>,
            },
            {
                'path': '/Backgrounds',
                'element': <Backgrounds/>,
            },
            {
                'path': '/Illustrator',
                'element': <Illustrator/>,
            },
            {
                'path': '/Videos',
                'element': <Videos/>,
            },
            {
                'path': '/tools',
                'element': <Tools/>,
            },
            {
                'path': '/tipography',
                'element': <Tipography/>,
            },
            {
                'path': '/Photos',
                'element': <Photos/>,
            },
            {
                'path': '/Library',
                'element': <Library/>,
            },
        ]
    },
    {
        'path': '/account/',
        'element': <LoginRoute/>,    
        'children' : [
            {
                'path': 'register',
                'element': <Register/>
            },
            {
                'path': '/account/login',
                'element': <Login/>
            },
            {
                'path' : '/account/lostpassword',
                'element': <LostPassword />
            },
        ]
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