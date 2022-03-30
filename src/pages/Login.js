/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Navbar } from "../components";
import { Layout,Alert } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const { Content } = Layout;
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(""); 
    const {logIn} = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            // await setUserPersistance(email,password);
            navigate('/home')
        }catch(err){
            setError(err.message);
        }
    }
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
                                        }}>Welcome Back!</h1>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="wrap-login100">
                                            <span class="login100-form-title">
                                                Sign In
                                            </span>
                                            <form onSubmit={handleSubmit} class="login100-form validate-form p-l-55 p-r-55 p-t-20">

                                                <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                                    <input class="input100" type="text" name="username" placeholder="Username" onChange={(e)=>{ setEmail(e.target.value)}}/>
                                                    <span class="focus-input100"></span>
                                                </div>
                                                <div class="wrap-input100 validate-input" data-validate="Please enter password">
                                                    <input class="input100" type="password" name="pass" placeholder="Password" onChange={(e)=>{ setPassword(e.target.value)}}/>
                                                    <span class="focus-input100"></span>
                                                </div>
                                                {error && <Alert style={{marginTop:"10px",marginBottom:"10px"}} message={error} type="error" />}
                                                <div class="text-right p-t-13 p-b-23">
                                                    <span class="txt1" style={{color:"black"}}>
                                                        Forgot &nbsp;
                                                    </span>
                                                    <a href="#" class="txt2">
                                                         Username / Password?
                                                    </a>
                                                </div>
                                                <div class="container-login100-form-btn">
                                                    <button  type = "submit" class="login100-form-btn">
                                                        Sign in
                                                    </button>
                                                </div>
                                                <div class="flex-col-c p-t-140 p-b-40">
                                                    <span class="txt1 p-b-9" style={{color: "black"}}>
                                                        Don’t have an account?
                                                    </span>
                                                    <button class="login100-form-btn" style={{width:"50%"}}>
                                                    <a href="/register" class="txt3" style={{color: "white"}}>
                                                        Sign up now
                                                    </a>
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
