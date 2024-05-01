import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCategoryAddMutation } from "../../queries/allpages-query";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const categoryaddMutation = {
    onSuccess: (res) => {
      console.log(res, "productadded");
      navigate("/dashbord");
      toast.success("categoryadd successful!");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: categoryAdd } =
    useCategoryAddMutation(categoryaddMutation);

  const onFinish = async (values) => {
    console.log("Successcategory:", values);

    try {
      const response = await categoryAdd(values);
      // console.log(response, "responsesnkdn");
    } catch (err) {
      toast.error("An error occurred.");
    }
  };
  return (
    <div className="category-file">
      <div className="heading-data">
        <h3>Category Add </h3>
      </div>
      <div className="category-form">
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

export default CategoryAdd;
