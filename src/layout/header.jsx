import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useProductListQuery,
  useProductSearchMutation,
} from "../queries/allpages-query";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="all-menu">
        <ul>
          <li onClick={allproduct}>All product</li>
          <li>Product</li>

          <li>Aboutus</li>
          <li>Contact</li>
          <li>Order</li>
          <li>Cart</li>
        </ul>
      </div>

      <div className="search-menu">
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => productListSearch(e.target.value)}
        />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
export default Header;
