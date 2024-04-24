import React from 'react';
import { Form, Input } from 'antd';

const CustomFormItem = ({ label, name, rules, type = 'text',value }) => {
  return (
    <Form.Item label={label} name={name} rules={rules} value={value}>
      {type === 'password' ? <Input.Password /> : <Input />}
    </Form.Item>
  );
};

export default CustomFormItem;
