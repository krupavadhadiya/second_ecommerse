import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { toast } from "sonner";
import { useBrandListQuery, useProductaddMutation } from "../../queries/allpages-query";

const ProductAdd = () => {
  const productaddMutation = {
    onSuccess: (res) => {
      console.log(res, "productadded");
      toast.success("productadd successful!");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: prouctadd } = useProductaddMutation(productaddMutation);
  const { data: brandList } = useBrandListQuery();
  console.log(brandList,"brandList")
  

  


  const onFinish = async (values) => {
    console.log("Successfds:", values);

    try {
      const response = await prouctadd(values);
      // console.log(response, "responsesnkdn");
    } catch (err) {
      toast.error("An error occurred.");
      console.error("error", err);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className="product-add">
      <div className="heading">
        <h4>Product Add</h4>
      </div>
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
          onFinishFailed={onFinishFailed}
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
            label="brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input your brand!",
              },
            ]}
          >
            <Input />
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
            <Input />
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
            <Input />
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
  );
};

export default ProductAdd;
