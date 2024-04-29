import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Category from "../pages/category/Category";
import Dashbord from "../pages/dashbord/Dashbord";
import ProductAdd from "../pages/productadd/ProductAdd";

export const privateroutes = [
    {
      allowedRoles: ['user','admin'],
      name: '/category',
      component:<Category/>,
    },
    {
      allowedRoles: ['user','admin'],
      name: '/dashbord',
      component:<Dashbord/>,
    },
    {
      allowedRoles: ['admin'],
      name: '/product',
      component:<ProductAdd/>,
    },
];
export const publiceroutes = [
    {
      name: '/',
      component:<Login/>,
    },
    {
      name: '/register',
      component:<Register/>,
    },
]