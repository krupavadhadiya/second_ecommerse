import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Category from "../pages/category/Category";
import Dashbord from "../pages/dashbord/Dashbord";
import ProductAdd from "../pages/productadd/ProductAdd";

export const privateroutes = [
    {
      name: '/category',
      component:<Category/>,
    },
    {
      name: '/dashbord',
      component:<Dashbord/>,
    },
    {
      name: '/productadd',
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