/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Navbar } from "../components";
import { Layout } from "antd";
import "./ElemoneyRegister.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const { Content } = Layout;
const { Option } = Select;
export default function Register() {
  const [, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content">
            <div class="page-content">
              <div class="form-v4-content">
                <div class="form-left" style={{ width: "500px" }}>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "500",
                      letterSpacing: "0.08em",
                      textAlign: "center",
                      marginTop: "3rem",
                      color: "white",
                      fontFamily: "League Spartan, sans-serif",
                    }}
                  >
                    ELEM
                  </h2>
                  <p styles={{ textSpacing: "1px !important" }} class="text-1">
                    The ideology behind how ELEM works is very simple. At ELEM,
                    we believe that once properly incentivized, people can
                    achieve miraculous wonders, and that is exactly what our
                    planet needs with excessive carbon emissions bringing about
                    problems on a global level.<br></br>
                    <br></br>
                    ELEM incentivizes people to reduce their household
                    emissions, in any way they can, and aids them through
                    specially endorsed, tailor-made household solutions in the
                    form of appliances and services.
                  </p>
                </div>
                <form class="form-detail">
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      letterSpacing: "0.08em",
                      textAlign: "center",
                      marginTop: "3rem",
                      color: "black",
                      fontFamily: "League Spartan, sans-serif",
                    }}
                  >
                    HOUSEHOLD REGISTRATION
                  </h2>
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{alignItems:"left"}}
                  >
                    <Form.Item
                      label="Household name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your household name",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="No. of Family Memebers"
                      name="FamilyMemebers"
                      rules={[
                        {
                          required: true,
                          message: "Please input no of family members",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Income Category"
                      name="IncomeCategory"
                      rules={[
                        {
                          required: true,
                          message: "Please input your income",
                        },
                      ]}
                    >
                      <Select
                      placeholder="Select your Income"
                      allowClear
                    >
                      <Option value="0 to 5 LPA">0 to 5 LPA</Option>
                      <Option value="5 to 10 LPA">5 to 10 LPA</Option>
                      <Option value="10 to 15 LPA">10 to 15 LPA</Option>
                      <Option value="15 to 20 LPA">15 to 20 LPA</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your address",
                        },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                      label="City"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="State"
                      name="state"
                      rules={[
                        {
                          required: true,
                          message: "Please input your state",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Electricity Provider"
                      name="electricCompany"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Consumer ID"
                      name="econsumerId"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Gas Distributer"
                      name="gasCompany"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Consumer ID"
                      name="gconsumerId"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Subscription Plan"
                      name="plan"
                      rules={[
                        {
                          required: true,
                          message: "Please input your plan",
                        },
                      ]}
                    >
                      <Select
                      placeholder="Select your Plan"
                      allowClear
                    >
                      <Option value="0 to 5 LPA">0 to 5 LPA</Option>
                      <Option value="5 to 10 LPA">5 to 10 LPA</Option>
                      <Option value="10 to 15 LPA">10 to 15 LPA</Option>
                      <Option value="15 to 20 LPA">15 to 20 LPA</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </form>
              </div>
            </div>
          </Content>
          {/* <Footerr className="site-layout-footer"/> */}
        </Layout>
      </Layout>
    </>
  );
}
