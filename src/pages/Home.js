/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import "./Home.css";
import ELEM from "../images/ELEM.png";
import forest from "../images/forest-bg.jpg";
import AOS from "aos";
import { useUserAuth } from "../context/UserAuthContext";
import ELEMadvert from "../images/elemadvert.gif";
import Elemoneyhome from "../images/elemoneyhome.png";
import Elemarthome from "../images/elemarthome.png";

const { Content } = Layout;
export default function Home() {
  const { user } = useUserAuth();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar isLogined={user ? true : false} />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content" style={{ background: "linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)", overflow:"hidden" }}>
            <div>
              <div class="sun" style={{ marginLeft: "38%", marginRight: "38%", marginTop: "8%", marginBottom: "16%", position: "relative", zIndex: "5" }}><img src={ELEM} className="image" alt="Original" style={{ position: "relative", width: "94%", margin: "18% 4%" }} /></div>
              <div style={{ zIndex: "1", marginTop: "-20%"}}><img src={forest} />
              <div className="row" style={{overflow:"hidden"}}>
                <div className="col-lg-6 col-sm-6" style={{ zIndex: "2", position:"absolute", top:"98.5%", right:"52%", overflow:"hidden"}}>
                    <a href="/aboutdspn">
                    <img src={Elemarthome} style={{width:"50%"}}/>
                    </a>
                </div>
                <div className="col-lg-6 col-sm-6" style={{ zIndex: "2", position:"absolute", top:"98.5%", left:"50%", overflow:"hidden", marginLeft:"24%"}}>
                    <a href="/aboutelemoney">
                    <img src={Elemoneyhome} style={{width:"50%"}}/>
                    </a>
                </div>
              </div>
              {/* <a href="/aboutelemoney" style={{ zIndex: "2", top:"108%", position:"absolute", width:"50%"}}> */}
              {/* <div style={{ zIndex: "2", top:"108%", position:"absolute"}}> */}
                {/* <img src={Elemoneyhome} style={{width:"35%"}}/> */}
              {/* </div> */}
              {/* </a> */}
              </div>
              
              <div className="container">
                <div className="row">
                  <div data-aos="zoom-in" data-aos-duration="2000" className="col-xl-6 col-lg-6" style={{padding:"10% 2%", overflow:"hidden", textAlign:"center"}}>
                    
                    <img src={ELEMadvert} alt="" style={{borderRadius:"8px", width:"100%"}}/>

                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div data-aos="fade-up-left" data-aos-duration="1000" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.2rem", fontWeight: "700", padding: "8% 0%", textAlign: "center" }}>India's first net-zero accelerator for Households</div>
                    <p style={{ lineHeight: "2", color: "white", textAlign:"center" }}>
                      <div data-aos="zoom-in-left" data-aos-duration="1500" ><span style={{ fontSize: "1.25rem" }}>ELEM embodies the mission to achieve net-zero emissions in Indian Households. Every individual has the capacity to lower their carbon footprint, in their own domestic space. Most of the times, all they need is a tangible incentive. <br></br></span>
                        <div style={{ textAlign: "center", padding: "2% 0%" }}>
                          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.4rem", fontWeight: "600" }}> Come find your incentive to become carbon-conscious today!</span><br></br><span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.6rem", fontWeight: "600" }}> Find your calling, and make it your reality!</span></div>
                      </div>
                    </p>

                  </div>
                </div>
              </div>
              <div id="container" style={{ overflow: "hidden !important", position: "relative", backgroundColor: "#FFC7C7" }} data-aos="fade-up" data-aos-duration="1000">
                <div class="product-details">

                  <p style={{ fontSize: "3rem", marginBottom: "0em", fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}>Walkthrough ELEM</p>

                  <ol class="howelemworks" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    <li class="worklist">You sign-up with ELEM</li>
                    <li class="worklist">You register an ELEMoney account with us</li>
                    <li class="worklist">Your Household emissions are monitored absolutely non-invasively</li>
                    <li class="worklist">You get monthly tangible carbocredit payouts based on the reduction of your household emissions</li>
                    <li class="worklist">You can use those carbocredit payouts at ELEMart to purchase products and services especially customized for you to further make your household even more energy efficient and emission friendly.</li>
                    <li class="worklist">You keep lowering your emissions and earning more through ELEMoney</li>
                    <li class="worklist">Now being environment-friendly pays….quite literally too</li>
                  </ol>

                </div>


                <div class="product-image">

                  <img src={"https://thumbs.dreamstime.com/b/co-emission-vector-concept-metaphor-stop-air-pollution-carbon-dioxide-reduction-environmental-damage-atmosphere-protection-toxic-194521580.jpg"} alt="How Elem works" />

                  <div class="info" style={{ overflow: "hidden !important", cursor: "pointer" }}>
                    <h2 style={{ fontSize: "3rem", color: "white", padding: "5.5% 0", fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}>Features</h2>
                    <ul style={{ padding: "0 10%", overflow: "hidden !important", width: "88%", textAlign: "center" }}>
                      <li style={{ paddingBottom: "10%" }} >ELEM doesn’t just motivate you to be carbon-conscious, it incentivizes you. With ELEM, it pays to be carbon-conscious.
                      </li>
                      <li style={{ paddingBottom: "10%" }}>ELEM is a one-stop solution for all your emission related requirements. A banking portal to the new carbon economy through ELEMoney and the virtual marketplace for you to maximize your ELEMoney income through DSPN.</li>
                      <li>ELEM pays now. The benefits of being carbon-conscious is no longer in the distant future or abstract. You can even invest in the newly built carbon economy with the financial provisions under ELEMoney.</li>
                    </ul>
                  </div>
                </div>

                {/* Counter */}

                {/* <div class="counter">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="employees">
                        <p class="counter-count">879</p>
                        <p class="employee-p">Employee</p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="customer">
                        <p class="counter-count">954</p>
                        <p class="customer-p">Customer</p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="design">
                        <p class="counter-count">1050</p>
                        <p class="design-p">Design</p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="order">
                        <p class="counter-count">652</p>
                        <p class="order-p">Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

                {/* Counter */}


              </div>
              <div class="container">
                <p
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    marginTop: "3rem",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  ELEMart Vendors
                </p>
                <div class="homecards-list">

                  <div class="homecard 1">
                    <div class="homecard_image"><a href="https://atomberg.com/"><img src="https://yt3.ggpht.com/ytc/AKedOLQypmalE0A3NexlUtb_J90z06EqGq_OuGAtEdRa=s900-c-k-c0x00ffffff-no-rj" style={{ overflow: "hidden !important" }} /></a></div>
                    {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                  </div>

                  <div class="homecard 2">
                    <div class="homecard_image"><a href="https://www.tatapowersolar.com/"><img src="https://scontent-maa2-2.xx.fbcdn.net/v/t31.18172-8/21319197_1543625782361920_3774243987940630740_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_GFMMfYMvQsAX8aFLKu&_nc_ht=scontent-maa2-2.xx&oh=00_AT97-PrjMuVjB4VGgOoKpHoSAQXWPFbMCYApld6wpPZxKA&oe=626D04C0" style={{ overflow: "hidden !important" }} /></a></div>
                    {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                  </div>

                  <div class="homecard 3">
                    <div class="homecard_image"><a href="https://www.havells.com/"><img src="https://iconape.com/wp-content/png_logo_vector/havells-logo.png" style={{ overflow: "hidden !important", backgroundColor: "white" }} /></a></div>
                    {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                  </div>

                  <div class="homecard 4">
                    <div class="homecard_image"><a href="https://www.loomsolar.com/"><img src="https://www.solarreviews.com/content/company/8235330e26b253b20aa3c245a2aea17bb79e/logo/loom.jpg" style={{ overflow: "hidden !important" }} /></a></div>
                    {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                  </div>

                </div>
              </div>
            </div>




            {/* ++++++++++++++++++++++++++++++++++++++++++++++++ */}
          </Content>
          <Footerr className="site-layout-footer" />
        </Layout>
      </Layout>
    </>
  );
}
