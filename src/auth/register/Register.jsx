import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomFormItem from "../../pages/customformItem/CustomFormItem";
import { registerdata } from "../../api/auth_servise";
import { toast } from "sonner";
import { useRegisterMutation } from "../../queries/auntheticationquery";
// import { useQuery } from "@tanstack/react-query";
// import { fetchnotes } from "../../Utilities/http";

const cookies = Cookies;

const Register = () => {
  const navigate = useNavigate();

  const registerMutation = {
    onSuccess: (res) => {
      console.log(res,"register")
      toast.success("Registration successful!");
      navigate("/");
    },
    onError:(res)=>{
      console.log(res,"error")
      toast.success("Registration fail!");
    }
  };

  const { mutateAsync: register } = useRegisterMutation(registerMutation);

  const formFields = [
    {
      label: "name",
      name: "name",
      rules: [{ required: true, message: "Please input your name!" }],
    },
    {
      label: "email",
      name: "email",
      rules: [{ required: true, message: "Please input your email!" }],
    },
    {
      label: "password",
      name: "password",
      rules: [{ required: true, message: "Please input your password!" }],
    },
    {
      label: "phoneNum",
      name: "phoneNum",
      rules: [{ required: true, message: "Please input your phoneNum!" }],
    },
    {
      label: "profile",
      name: "profile",
      rules: [{ required: true, message: "Please input your profile!" }],
    },
  ];

  const onFinish = async (values) => {
    try {
      const response = await register(values);
      // console.log(response, "responsesnkdn");

   
    } catch (err) {
      toast.error("An error occurred.");
      console.error("error", err);
    }

    // const {data} = useQuery({
    //     queryKey: 'register',
    //     queryFn: fetchnotes
    //   })
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
      </Form>
    </div>
  );
};
export default Register;
