import React, { useEffect } from "react";
import { allStoreData } from "../../store/allStoreData";
import {
  useCategoryQuery,
  useProductListQuery,
} from "../../queries/allpagesquery";
import mobileacc from "../../assets/Images/22fddf3c7da4c4f4.webp";
import wc from "../../assets/Images/wc.jpg";
import carasoal from "../../assets/Images/caroasol1.webp";
import carasoal2 from "../../assets/Images/carasoal2.webp";
import carasoal3 from "../../assets/Images/carasoal3.webp";
import carasoal4 from "../../assets/Images/carasoal4.webp";
import { Carousel } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

const contentStyle = {
  height: "300px", // You can adjust the height as needed
  color: "#fff",
  textAlign: "center",
  background: "#364d79", // You can set a background color
  display: "flex", // Flexbox properties for centering
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  maxwidth: "1600px",
  height: "220px",
};
const Dashbord = () => {
  const navigate = useNavigate();

  const { setState, categoryListDatat, ProductListData } = allStoreData();

  // const { data } = useCategoryQuery();
  // const { data } = useProductListQuery();
  const { data: categoryData } = useCategoryQuery();
  const { data: productData } = useProductListQuery();
  // console.log("productList",productData)

  useEffect(() => {
    if (categoryData) {
      const categoryResData = categoryData.data?.data?.category || [];
      setState({ categoryListDatat: categoryResData });
    }
  }, [categoryData, setState]);

  useEffect(() => {
    if (productData) {
      const productResData = productData.data?.data || [];
      console.log("productResData", productResData);
      setState({ ProductListData: productResData });
    }
  }, [productData, setState]);

  return (
    <div className="main-dashboard">
      <div className="main-category">
        {categoryListDatat.map((category, i) => (
          <div className="sub_category" key={i}>
            <div className="category_port">
              <img src={mobileacc} />
              <div>{category.name}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="main_carasoal">
        <Carousel autoplay>
          <div>
            <img src={carasoal} alt="Slide 1" style={imageStyle} />
          </div>
          <div>
            <img src={carasoal3} alt="Slide 2" style={imageStyle} />
          </div>
          <div>
            <img src={carasoal4} alt="Slide 3" style={imageStyle} />
          </div>
          <div>
            <img src={carasoal2} alt="Slide 4" style={imageStyle} />
          </div>
        </Carousel>
      </div>

      <div className="main_product">
        <div className="add_product">
          <div className="heading">
            <h2>All product List</h2>
          </div>
          <div className="add_btn">
            <button onClick={()=> navigate('/productadd')}>Product Add</button>
          </div>
        </div>
        <div className="sub_product">
          {ProductListData.map((product, i) => {
            return (
              <div className="productlist">
                <h4>{product.name}</h4>
                <img src={wc} alt="" />
                <div>Price:-{product.price}</div>
                <div>brand:-{product.brand}</div>
                <div>category:-{product.category}</div>
                <div>subCategory:-{product.subCategory}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
// display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//     grid-column-gap: 50px;
//     grid-row-gap: 60px;
