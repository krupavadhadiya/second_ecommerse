import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import CategoryAdd from "../pages/CategoryAdd/CategoryAdd";
import AddtoCart from "../pages/addtocart/AddtoCart";
import CategoryDetail from "../pages/categorydetail/CategoryDetail";
// import Category from "../pages/category/Category";
import Dashbord from "../pages/dashbord/Dashbord";
import ProductAdd from "../pages/productadd/ProductAdd";
import ProductDetail from "../pages/productdetail/ProductDetail";

export const privateroutes = [
    // {
    //   allowedRoles: ['user','admin'],
    //   name: '/category',
    //   component:<Category/>,
    // },
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
    {
      allowedRoles: ['admin'],
      name: '/category',
      component:<CategoryAdd/>,
    },
    {
      allowedRoles: ['admin','user'],
      name: '/product-detail/:id',
      component:<ProductDetail/>,
    },
    {
      allowedRoles: ['admin'],
      name: '/category-detail/:id',
      component:<CategoryDetail/>,
    },
    {
      allowedRoles: ['admin','user'],
      name: '/addtocart',
      component:<AddtoCart/>,
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