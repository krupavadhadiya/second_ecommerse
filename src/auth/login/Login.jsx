import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomFormItem from "../../pages/customformItem/CustomFormItem";
import { loginData, registerdata } from "../../api/auth_servise";
import { toast } from "sonner";

const cookies = Cookies;

const Login = () => {
  const navigate = useNavigate();

  const formFields = [
   
    {
      label: 'email',
      name: 'email',
      rules: [{ required: true, message: 'Please input your email!' }],
    },
    
    {
      label: 'password',
      name: 'password',
      rules: [{ required: true, message: 'Please input your password!' }],
    },
   

  ]

  const onFinish = async (values) => {
    try {
      const response = await loginData(values);
      console.log(response, "responsesnkdn");
      toast.success("Login successful!"); // Success toast
        const logindata = response.data.data.authToken
        // console.log("logindata23", logindata)
      localStorage.setItem('loginfile', JSON.stringify(logindata));
      navigate('/dashbord')
    } catch (err) {
      toast.error("An error occurred."); //
      console.error("error", err);
    }
  };

  return (
    <div className="main-useform">
   <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {formFields.map((field) => (
          <CustomFormItem
            key={field.name}
            label={field.label}
            name={field.name}
            rules={field.rules}
            type={field.type}
          />
        ))}

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
        <h4 style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register here</span>
        </h4>
      </Form>
    </div>
  );
};
export default Login;
