import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useBrandListQuery,
  useProductaddMutation,
  useSubCategoryListQuery,
} from "../../queries/allpages-query";
import { useAllStoreData } from "../../store/useAllStoreData";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState();
  const {setState, categoryListDatat } = useAllStoreData();
  

  // console.log(categoryListDatat, "categoryListDatat");

  const productaddMutation = {
    onSuccess: (res) => {
      console.log(res, "productadded");
      navigate("/dashbord");
      toast.success("productadd successful!");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: prouctadd } = useProductaddMutation(productaddMutation);
  const { data: brandList } = useBrandListQuery();
  
  
  const { data: subcategorylist } = useSubCategoryListQuery();
  
  console.log(subcategorylist?.subCategory
    ,"subcategorylist")


    useEffect(() => {

const subCategorynewadd = subcategorylist?.subCategory;
setState({subcategoryListData: subCategorynewadd})


    }, [setState,subcategorylist])


 

  const onFinish = async (values) => {
    // console.log("Successfds:", values);

    try {
      const response = await prouctadd(values);
      // console.log(response, "responsesnkdn");
    } catch (err) {
      toast.error("An error occurred.");
      console.error("error", err);
    }
  };

  const onCategoryChange = (value) => {
    // console.log(value, "categoryupdated");
    setSelectedCategory(value);
    // console.log(selectedCategory,"selectedCategory")
  };
  const filteredSubcategories = subcategorylist?.subCategory.filter(
    (subCategory) => subCategory.categoryId === selectedCategory
  );
  // console.log(filteredSubcategories, "filteredSubcategories");
  return (
    <>
      <div
        className="heading"
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        <h3>Product Add</h3>
      </div>
      <div className="product-add">
        <div className="sub_product">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="discription"
              name="discription"
              rules={[
                {
                  required: true,
                  message: "Please input your discription!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="price"
              name="price"
              type="number"
              rules={[
                {
                  required: true,
                  message: "Please input your price!",
                },
              ]}
            >
              <InputNumber
                min={0} // Optional: Set minimum value
                step={1} // Optional: Define step increments
                style={{ width: "100%" }} // Optional: Adjust width
              />
            </Form.Item>
            <Form.Item
              label="quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please input your quantity!",
                },
              ]}
            >
              <InputNumber
                min={0} // Optional: Set minimum value
                step={1} // Optional: Define step increments
                style={{ width: "100%" }} // Optional: Adjust width
              />
            </Form.Item>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: "Please select a brand." }]}
            >
              <Select placeholder="Select a brand">
                {brandList?.data?.data?.brand.map((brand) => (
                  <Select.Option key={brand._id} value={brand._id}>
                    {brand.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input your category!",
                },
              ]}
            >
              <Select
                placeholder="Select a category"
                onChange={onCategoryChange}
              >
                {categoryListDatat?.map((category) => {
                  {
                    /* console.log(category, ";category"); */
                  }
                  return (
                    <Select.Option key={category._id} value={category._id}>
                      {category.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="subCategory"
              name="subCategory"
              rules={[
                {
                  required: true,
                  message: "Please input your subCategory!",
                },
              ]}
            >
              <Select placeholder="Select a subcategory">
                {filteredSubcategories?.map((subcategory) => {
                  return (
                    <Select.Option
                      key={subcategory._id}
                      value={subcategory._id}
                    >
                      {subcategory.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ProductAdd;
