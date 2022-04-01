/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import Elemoney from "../images/Elemoney.png";
import "./ELEMoney_General.css"
import signin from "../images/sign.gif";
import emit from "../images/emit2.gif";
import carboeco from "../images/carboeco.gif";
import AOS from "aos";
const { Content } = Layout;
export default function AboutElemoney() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content" style={{ backgroundColor: "white" }}>
            <div className="container-fluid" style={{ marginTop: "5%" }}>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "3.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>ELEMoney</div>
              <div className="row" style={{ margin: "2% 4%" }}>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="fade-right" data-aos-duration="2000">
                  <img src={signin} style={{ overflow: "hidden", width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="fade-left" data-aos-duration="2000">
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Sign-up and Monitoring</div>
                  <p style={{
                    fontSize: "1.4rem",
                    fontWeight: "200",
                    letterSpacing: "0.01em", color: "#474747"
                  }}>
                    Once you have signed-up with ELEMoney, your household emissions will be monitored, in an absolutely non-invasive manner.  
                  </p>
                </div>
              </div>


              <div className="row" style={{ margin: "10% 4%" }}>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="flip-left" data-aos-duration="2000">
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Emissions lowered and Earning money</div>
                  <p style={{
                    fontSize: "1.4rem",
                    fontWeight: "200",
                    letterSpacing: "0.01em", color: "#474747"
                  }}>
                    As soon as you lower your household emissions, you’ll be paid in carbocredits which will be fungible for INR and usable for purchasing products and services from ELEMart.
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="flip-right" data-aos-duration="2000">
                  <img src={emit} style={{ overflow: "hidden", width: "100%", borderRadius: "10px" }} />
                </div>
              </div>
              <div className="row" style={{ margin: "2% 4%" }}>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="fade-up-right" data-aos-duration="2000">
                  <img src={carboeco} style={{ overflow: "hidden", width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="col-xl-6 col-lg-6 col-sm" data-aos="fade-up-left" data-aos-duration="2000">
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Building a carbon-based economy and becoming a part of a better future</div>
                  <p style={{
                    fontSize: "1.4rem",
                    fontWeight: "200",
                    letterSpacing: "0.01em", color: "#474747",
                    textAlign:"center"
                  }}>
                    Become carbon-conscious with ELEM. Build a  wealthier household in a healthier environment.
                  </p>
                </div>
              </div>
                <br></br><br></br>
              <p style={{color:"black", fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700"}}>So what are you waiting for?</p>
              <p style={{color:"black", fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700"}}>Come join us!</p>

                <div style={{ textAlign: "center", margin: "2% 0%" }}>
                  <a href="/elemoneyRegister" class="elembutton">Register your household</a>
                </div>

            </div>
            {/* <div class="mainelemgen">
              <div class="elemgeneral" style={{ height: "90%" }}>
                <div class="imag" data-aos="fade-up"></div>
                <div class="text-container" style={{ height: "87%", overflow: "hidden" }}>
                  <span id="elemgenspan"></span>
                  <h1 id="headtext" style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    color: "black",
                    fontFamily: "League Spartan, sans-serif",
                  }}>ELEMoney</h1>
                  <p id="elemgenpara" style={{
                    fontSize: "1.2rem",
                    fontWeight: "200",
                    letterSpacing: "0.02em",
                    textAlign: "center", color: "black"
                  }}>ELEMoney offers every individual in India the chance to earn through adopting a carbon-conscious lifestyle. All you have to do is sign-up with ELEMoney, and ELEM takes care of the rest, allowing you to earn money by reducing your household carbon emissions.  No more are the benefits of leading a less consumptive life abstract, or in the distant future.<br></br><br></br>
                    Now get instant, tangible carbocredit pay-outs and earn by making the world a better place, by cutting down on your household emissions, one kg of CO2 at a time. The ELEMoney account will allow one to invest in financial provisions under ELEM itself, and take loans that can be paid off by earning carbocredits through ELEMoney too.<br></br><br></br>
                    You’ll also be able to use the carbocredits you earn to purchase products and services from ELEM’s own services and products network: DSPN.
                    Join ELEM and earn like you never have before and become part of this new carbon-based economy we’re building.

                  </p>
                  <div style={{ textAlign: "center", marginTop: "2%" }}>
                    <a href="/elemoneyRegister" class="elembutton">Register your household</a>
                  </div>
                </div>
              </div>
            </div> */}

          </Content>
          <Footerr className="site-layout-footer" />
        </Layout>
      </Layout>
    </>
  );
}
