/* eslint-disable no-lone-blocks */
import React from "react";
import { Navbar } from "../components";
import { Layout } from "antd";
import "./Contact.css";
import $ from 'jquery';

const { Content } = Layout;
export default function Contact() {

    const jQuerycode = () => {
        document.querySelector('#contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            e.target.elements.name.value = '';
            e.target.elements.email.value = '';
            e.target.elements.message.value = '';
        });

    }
    return (
        <>
            <Navbar />
            <Layout style={{ minHeight: "100vh" }}>
                <Layout className="site-layout">
                    <Content className="site-layout-content" style={{background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)"}}>

                        <div class="background">
                            <div class="container" style={{ padding: "120px 0px" }}>
                                <div class="screen">
                                    <div class="screen-header">
                                        <div class="screen-header-left">
                                            <div class="screen-header-button close"></div>
                                            <div class="screen-header-button maximize"></div>
                                            <div class="screen-header-button minimize"></div>
                                        </div>
                                        <div class="screen-header-right">
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div class="screen-body">
                                        <div class="screen-body-item left">
                                            <div class="app-title">
                                                <span style={{ fontWeight: "bolder" }}>CONTACT</span>
                                                <span style={{ fontWeight: "bolder" }}>US</span>
                                            </div>
                                            <div class="app-contact" style={{ fontSize: "10px" }}>CONTACT INFO : +91 1234567899</div>
                                        </div>
                                        <div class="screen-body-item">
                                            <div class="app-form">
                                                <div class="app-form-group">
                                                    <input class="app-form-control" placeholder="NAME" value="" />
                                                </div>
                                                <div class="app-form-group">
                                                    <input class="app-form-control" placeholder="EMAIL" />
                                                </div>
                                                <div class="app-form-group">
                                                    <input class="app-form-control" placeholder="CONTACT NO" />
                                                </div>
                                                <div class="app-form-group message">
                                                    <input class="app-form-control" placeholder="MESSAGE" />
                                                </div>
                                                <div class="app-form-group buttons">
                                                    <button class="app-form-button">CANCEL</button>
                                                    <button class="app-form-button">SEND</button>
                                                </div>
                                            </div>
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
