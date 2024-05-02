import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useProductListQuery,
  useProductSearchMutation,
} from "../queries/allpages-query";
import { useQueryClient } from "@tanstack/react-query";
import cart from '../assets/Images/cart2.png'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAllStoreData } from "../store/useAllStoreData";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const {  addtoCartList } = useAllStoreData();


  const { data: productData } = useProductListQuery(searchQuery);
  console.log(productData, "productData");

  const productListSearch = (value) => {
    setSearchQuery(value);
  };

  const logout = () => {
    Cookies.remove("logindata");
    navigate("/");
  };
  const allproduct = () => {
    navigate("/dashbord");
  };

  return (
    <div className="main-header">
      <div className="web-name">
        <h3>Ecommerse web</h3>
      </div>
      

      <div className="search-menu">
        <input
          type="text"
          placeholder="  Search for products, brands and more"
          value={searchQuery}
          onChange={(e) => productListSearch(e.target.value)}
        />
        <button onClick={logout}>Logout</button>
      </div>

      <div className="all-menu">
        <ul>
          {/* <li onClick={allproduct}>All product</li>
          <li>Product</li>

          <li>Aboutus</li>
          <li>Contact</li>
          <li>Order</li> */}
          <div className="cartimg" >
          <div className="length">

          <p>{addtoCartList.length}</p>
          </div>
          <ShoppingCartOutlined />
          <li>Cart</li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
