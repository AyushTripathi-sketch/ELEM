/* eslint-disable no-lone-blocks */
import React from "react";
import { Navbar } from "../components";
import { Layout } from "antd";
import "./Register.css";

const { Content } = Layout;
export default function Register() {
    return (
        <>
            <Navbar />
            <Layout style={{ minHeight: "100vh" }}>
                <Layout className="site-layout">
                    <Content className="site-layout-content" style={{background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)"}}>
                        <div class="main-bg" style={{marginTop:"8%", height:"100% !important"}}>
                            <div class="box-conatiner">
                                <div id="a">
                                    <div class="circle-ripple"></div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <h1 class="heading-left" style={{
                                            marginTop:"80% !important",
                                            fontSize: "3rem",
                                            fontWeight: "800",
                                            letterSpacing: "0.08em",
                                            textAlign: "center",
                                            marginTop: "3rem",
                                            color: "white",
                                            fontFamily: "League Spartan, sans-serif",
                                        }}>Join us on our journey to net-zero!</h1>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="wrap-login100">
                                            {/* <span class="login100-form-title">
                                                Sign In
                                            </span> */}
                                            <form class="login100-form validate-form p-l-55 p-r-55 p-t-20" style={{paddingTop: "30%"}}>

                                                <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter email address">
                                                    <input class="input100" type="text" name="email" placeholder="Email" />
                                                    <span class="focus-input100"></span>
                                                </div>
                                                <div class="wrap-input100 validate-input" data-validate="Please enter password">
                                                    <input class="input100" type="password" name="pass" placeholder="Password" />
                                                    <span class="focus-input100"></span>
                                                </div>
                                                <div style={{margin:"4% 0%"}} class="wrap-input100 validate-input" data-validate="Please enter password again">
                                                    <input class="input100" type="confirmpassword" name="pass" placeholder="Confirm Password" />
                                                    <span class="focus-input100"></span>
                                                </div>
                                                <div class="container-login100-form-btn">
                                                    <button class="login100-form-btn">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                    {/* <Footerr className="site-layout-footer"/> */}
                </Layout>
            </Layout>
        </>
    );
}
