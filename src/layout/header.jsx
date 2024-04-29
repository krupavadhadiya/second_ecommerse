import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useProductSearchMutation } from "../queries/allpages-query";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const productsearchMutation = {
    onSuccess: (res) => {
      console.log(res, "productsearchMutation");
      toast.success("product search");
    },
    onError: (res) => {
      console.log(res, "error");
    },
  };

  const { mutateAsync: searchProduct } = useProductSearchMutation(
    productsearchMutation
  );

  const productListSearch = async (value) => {
    setSearchQuery(value);

    try {
      const response = await searchProduct(value);
      // setSearchResults(response.data.products);
      // console.log("re",response.data)
      // setState({ productlist: response.data.products });
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const logout = () => {
    Cookies.remove("logindata");
    navigate("/");
  };

  return (
    <div className="main-header">
      <div className="web-name">
        <h3>Ecommerse web</h3>
      </div>
      <div className="all-menu">
        <ul>
          <li>All product</li>
          <li>Product</li>

          <li>Aboutus</li>
          <li>Contact</li>
          <li>Order</li>
          <li>Recipes</li>
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
