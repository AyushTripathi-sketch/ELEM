/* eslint-disable no-lone-blocks */
import React from "react";
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import "./Team.css";
import Meghma from "../images/Meghma.jpeg";
import Hritwik from "../images/Hritwik.jpg";
import Jha from "../images/Jha.jpg";
import Anurag from "../images/Anurag.jpg";
import Tripathi from "../images/Tripathi.jpg";
import Sharma from "../images/Sharma.jpg"

const { Content } = Layout;
export default function Team() {
    return (
        <>
            <Navbar />
            <Layout style={{ minHeight: "100vh" }}>
                <Layout className="site-layout">
                    <Content className="site-layout-content" style={{background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)"}}>
                        <main class="teammain">
                            <section>
                                <h1 class="teampage-title" style={{fontSize: "4rem",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  marginTop: "3rem",
                  fontFamily: "League Spartan, sans-serif",}}>Meet our Team</h1>
                            </section>
                            <div class="leadership">
                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">8</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Anurag} alt="Anurag"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>Anurag Bhattacharya</h2>
                                        <p style={{color:"black"}}><em>Product Design and Finances</em></p>
                                    </div>
                                </div>

                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">6</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Jha} alt="Jha"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>Ayush Jha</h2>
                                        <p style={{color:"black"}}><em>Product Design and Finances</em></p>
                                    </div>
                                </div>

                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">5</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Meghma} alt="Meghma"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>BS Meghma</h2>
                                        <p style={{color:"black"}}><em>Content and Marketing</em></p>
                                    </div>
                                </div>

                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">4</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Hritwik} alt="Hritwik"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>Hritwik Ranjan</h2>
                                        <p style={{color:"black"}}><em>Developer</em></p>
                                    </div>
                                </div>

                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">3</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Tripathi} alt="Tripathi"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>Ayush Tripathi</h2>
                                        <p style={{color:"black"}}><em>Developer</em></p>
                                    </div>
                                </div>

                                <div class="leader">
                                    {/* <div class="leader__header">
                                        <div class="leader__exp">
                                            <span class="years">2</span>
                                            <span>years with STEM Initiative</span>
                                        </div>
                                        <a href="#" class="leader__bio">Bio</a>
                                    </div> */}
                                    <div class="leader__img">
                                        <img src={Sharma} alt="Sharma"/>
                                    </div>
                                    <div class="leader__name">
                                        <h2>Ayush Sharma</h2>
                                        <p style={{color:"black"}}><em>Editor & Videographer</em></p>
                                    </div>
                                </div>
                            </div>

                        </main>

                    </Content>
                    <Footerr className="site-layout-footer" />
                </Layout>
            </Layout>
        </>
    );
}
