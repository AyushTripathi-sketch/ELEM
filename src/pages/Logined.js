/* eslint-disable no-lone-blocks */
import React from "react";
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import "./Home.css";
import ELEM from "../images/ELEM.png";
import $ from 'jquery';

const { Content } = Layout;
export default function Home() {
  return (
    <>
      <Navbar isLogined={true}/>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content">
          
            {/* <div class="splitview skewed" style={{borderRadius: "15px !imporatant"}}>
              <div class="panel bottom">
                <div class="content">
                  <div class="description">
                    <a href="/aboutdspn"><h1 id="dspntext" style={{ color: "white" }}><span id="dspntextspan">DSPN</span></h1></a>
                    <p style={{
                      color: "white", fontSize: "1.1rem",
                      fontFamily: "cursive", textAlign: "justify",
                      textJustify: "inter-word",
                    }}>
                      It is the one-stop marketplace for all your household
                      appliance requirements. Get the most efficient appliances,
                      verified by ELEM, to optimize your energy consumptions and
                      lower your carbon emissions, and maximize your ELEMoney
                      income.
                    </p>
                  </div>
                </div>
              </div> */}

            {/* <div class="panel top">
                <div class="content">
                  <div class="description" style={{ padding: 20 % 0 }}>
                   
                    <a href="/aboutelemoney"><h1 id="dspntext" style={{ color: "black" }}><span id="dspntextspan">Elemoney</span></h1></a>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "cursive",
                        color: "black",
                        textAlign: "center",
                        textJustify: "inter-word",
                        backgroundColor: "rgba(255,255,255, 0.6)",
                      }}
                    >
                      ELEMoney is your very own banking portal into the new
                      carbon-based economy that ELEM is building. Earn money
                      with a more carbon-conscious lifestyle and bring about a
                      positive change in the world with an attitude of
                      sustainability and conservation.
                    </p>
                  </div>
                </div>
              </div>
              <div class="logo">
                <img src={ELEM} className="image" alt="Original" />
              </div>
              <a href="#" className="arrow-container">
                <div class="arrow"></div> <div class="arrow"></div>
                <div class="arrow"></div>
              </a>
            </div> */}

            <div class="container">
              <div class="sky">
                <div class="stars"></div>
                <div class="stars1"></div>
                <div class="stars2"></div>
              </div>
            </div>

            <div class="sun" style={{ margin: "12% 38%" }}><img src={ELEM} className="image" alt="Original" style={{ position: "relative", width: "94%", margin: "18% 4%", position: "relative" }} /></div>

            <b class="ball1"><a href="/aboutelemoney"><p style={{ textAlign: "center", padding: "40% 0%", fontSize: "2rem", color: "white", fontFamily: "Sora, sans-serif", letterSpacing: "0.08em" }}>ELEMoney</p></a></b>
            <b class="ball2"><a href="/aboutdspn"><p style={{ textAlign: "center", padding: "40% 0%", fontSize: "2rem", color: "white", fontFamily: "Sora, sans-serif", letterSpacing: "0.08em" }}>DSPN</p></a></b>
            <div class="container">
              <p
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  color: "white",
                  fontFamily: "League Spartan, sans-serif",
                }}
              >
                ABOUT US
              </p>
              <p style={{ lineHeight: "2", color: "white", textAlign: "center" }}>
                <strong style={{ fontSize: "1.5rem" }}>Welcome to the first net-zero accelerator for Indian Households. <br></br>ELEM embodies the mission to achieve net-zero emissions in Indian Households. Every individual has the capacity to lower their carbon footprint, in their own domestic space. Most of the times, all they need is a tangible incentive. <br></br>Come find your incentive to become carbon-conscious today !!<br></br>Find your calling, and make it your reality !!</strong>
              </p>
              <div class="container" style={{ textAlign: "center", marginTop:"2%" }}>
                <a href="#" class="button">Read More</a>
              </div>
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++ */}
            <div id="container" style={{ overflow: "hidden !important", position: "relative", backgroundColor: "#FFC7C7" }}>
              <div class="product-details">

                <p style={{ fontSize: "3rem", marginBottom: "0em", fontFamily: "League Spartan, sans-serif", }}>How ELEM Works</p>
                {/* <ul style={{ fontSize: "1.2rem" }}>
                  <li>Registration by signing up with an ELEM account or an ELEMoney account</li>
                  <li></li>
                  <li>Acquisition of past usage data of the household</li>
                  <li>Detailed analysis of Past consumption data</li>
                  <li>Input of associated household details</li>
                  <li>Determination of Preliminary Household Emission Datum (PHED)</li>
                  <li>Pre- evaluation period of 3 months</li>
                  <li>Monitoring and Carbocredit count activation</li>
                  <li>Yearly carbocredit payment if applicable</li>
                  <li>Activation of other financial avenues after the first year with ELEMoney</li>
                </ul> */}

                <ol class="howelemworks" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  <li class="worklist">You sign-up with ELEM</li>
                  <li class="worklist">You register an ELEMoney account with us</li>
                  <li class="worklist">Your Household emissions are monitored absolutely non-invasively</li>
                  <li class="worklist">You get annual tangible carbocredit payouts based on the reduction of your household emissions</li>
                  <li class="worklist">You can use those carbocredit payouts at DSPN to purchase products and services especially customized for you to further make your household even more energy efficient and emission friendly.</li>
                  <li class="worklist">You keep lowering your emissions and earning more through ELEMoney</li>
                  <li class="worklist">Now being environment-friendly pays….quite literally too</li>
                </ol>

              </div>


              <div class="product-image">

                <img src={"https://thumbs.dreamstime.com/b/co-emission-vector-concept-metaphor-stop-air-pollution-carbon-dioxide-reduction-environmental-damage-atmosphere-protection-toxic-194521580.jpg"} alt="How Elem works" />

                <div class="info" style={{ overflow: "hidden !important", cursor: "pointer" }}>
                  <h2 style={{ fontSize: "3rem", color: "white", padding: "5.5% 0", fontFamily: "League Spartan, sans-serif" }}>Features</h2>
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
                  fontFamily: "League Spartan, sans-serif",
                }}
              >
                DSPN Collaborators
              </p>
              <div class="homecards-list">

                <div class="homecard 1">
                  <div class="homecard_image"><a href="https://atomberg.com/"><img src="https://yt3.ggpht.com/ytc/AKedOLQypmalE0A3NexlUtb_J90z06EqGq_OuGAtEdRa=s900-c-k-c0x00ffffff-no-rj" style={{ overflow: "hidden !important" }} /></a></div>
                  {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                </div>

                <div class="homecard 2">
                  <div class="homecard_image"><a href="https://www.tatapowersolar.com/"><img src="https://scontent-maa2-2.xx.fbcdn.net/v/t31.18172-8/21319197_1543625782361920_3774243987940630740_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fmgywZxLMWMAX-wnTCn&_nc_ht=scontent-maa2-2.xx&oh=00_AT8OJyO9P7G-RK7Yvbqb8tAvG-lUUFCoTIZ8g_A1srV2KA&oe=624577C0" style={{ overflow: "hidden !important" }} /></a></div>
                  {/* <div class="card_title title-white">
                  <p>Atomberg Technologies</p>
                </div> */}
                </div>

                <div class="homecard 3">
                  <div class="homecard_image"><a href="https://www.havells.com/"><img src="https://iconape.com/wp-content/png_logo_vector/havells-logo.png" style={{ overflow: "hidden !important" }} /></a></div>
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




            {/* ++++++++++++++++++++++++++++++++++++++++++++++++ */}
          </Content>
          <Footerr className="site-layout-footer" />
        </Layout>
      </Layout>
    </>
  );
}
{
  /* <div>
            <div className="ellipse1" style={{textAlign:"center"}}>
              <a><h2 style={{textAlign:"center",marginTop:"125px",marginLeft:"-50px"}}>ELEMoney</h2></a>
              </div>
              <div class="vl"></div>
              <img className="elemlogo" src={Ellipse2} alt="alt error"></img>
              <div className="ellipse2">
              <a><h2 style={{textAlign:"center",marginTop:"125px",marginLeft:"20px"}}>DSPN</h2></a>
              </div>
          </div> */
}
