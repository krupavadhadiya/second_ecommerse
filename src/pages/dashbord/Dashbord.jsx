import React, { useEffect } from "react";
import { allStoreData } from "../../store/useAllStoreData";
import {
  useCategoryQuery,
  useProductDeleteMutation,
  useProductListQuery,
  useSubCategoryListQuery,
  useUserDetailQuery,
} from "../../queries/allpages-query";
import mobileacc from "../../assets/Images/22fddf3c7da4c4f4.webp";
import wc from "../../assets/Images/wc.jpg";
import carasoal from "../../assets/Images/caroasol1.webp";
import carasoal2 from "../../assets/Images/carasoal2.webp";
import carasoal3 from "../../assets/Images/carasoal3.webp";
import carasoal4 from "../../assets/Images/carasoal4.webp";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { prouctDelete } from "../../api/auth_servise";
import { useQueryClient } from "@tanstack/react-query";
import { useAllStoreData } from "../../store/useAllStoreData";
import { CloseOutlined } from "@ant-design/icons"; // Ant Design provides close icon

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
  const queryClient = useQueryClient();

  const { setState, categoryListDatat, productListData, subcategoryListData } =
    useAllStoreData();
  console.log(subcategoryListData, "subcategoryListData");

  // const { data } = useCategoryQuery();
  // const { data } = useProductListQuery();
  const { data: categoryData } = useCategoryQuery();
  const { data: productData } = useProductListQuery();
  const { data: userDetail } = useUserDetailQuery();
  const { data: subcategorylist } = useSubCategoryListQuery();


  console.log("userDetail123", userDetail);

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
      setState({ productListData: productResData });
    }
  }, [productData, setState]);

  useEffect(() => {
    if (userDetail) {
      const userDetailData = userDetail.data?.data || [];
      setState({ userData: userDetailData });
      localStorage.setItem("userDetail", JSON.stringify(userDetailData));
    }
  }, [userDetail, setState]);


  useEffect(() => {
    const subCategorynewadd = subcategorylist?.subCategory;
    setState({ subcategoryListData: subCategorynewadd });
  }, [setState, subcategorylist]);

  const productadd = () => {
    navigate("/product");
  };
  const categoryadd = () => {
    navigate("/category");
  };

  const productdeleteMutation = {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["product-list"] });

      console.log(res, "product deleted");
      toast.success("product delete");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: prouctDelete } = useProductDeleteMutation(
    productdeleteMutation
  );
  const deleteproduct = async (id) => {
    try {
      const response = await prouctDelete({ _id: id });
      // console.log(response, "responsesnkdn");
    } catch (err) {
      toast.error("An error occurred.");
      console.error("error", err);
    }
  };

  const productdetail = (id) => {
    navigate(`/product-detail/${id}`);
  };
  const categorydetail = (id) => {
    navigate(`/category-detail/${id}`);
  };
  return (
    <div className="main-dashboard">
      <div className="category-main">
        <div className="heading" style={{ marginBottom: "10px" }}>
          <h3>category</h3>
        </div>
        {userDetail?.role === "ADMIN" ? (
          <div className="category-btn">
            <button onClick={categoryadd}>Category Add</button>
          </div>
        ) : null}
      </div>

      <div className="main-category">
        {categoryListDatat.map((category, i) => (
          <div className="sub_category" key={i}>
            <div
              className="category_port"
              onClick={() => categorydetail(category._id)}
            >
              <img src={mobileacc} />
              <div>{category.name}</div>
            </div>
          </div>
        ))}

        <div className="subcategory-list"></div>
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
            <h3>All product List</h3>
          </div>
          <div className="add_btn">
            <button onClick={productadd}>Product Add</button>
            {/* {userDetail?.role === "ADMIN " ? (
              <button onClick={productadd}>Product Add</button>
            ) : null} */}
          </div>
        </div>
        <div className="sub_product">
          {productListData.map((product, i) => {
            return (
              <div className="productlist">
                <h4>{product.name}</h4>
                <img
                  src={product.image}
                  alt=""
                  onClick={() => productdetail(product._id)}
                  style={{ width: "170px", height: "150px", margin: "10px 0" }}
                />
                <div>Price:-{product.price}</div>
                <div>brand:-{product.brand}</div>
                <div>category:-{product.category}</div>
                <div>subCategory:-{product.subCategory}</div>

                {userDetail?.role === "ADMIN" ? (
                  <div className="btn-delete">
                    <button onClick={() => deleteproduct(product._id)}>
                      Delete
                    </button>
                    <button>Edit</button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashbord;
