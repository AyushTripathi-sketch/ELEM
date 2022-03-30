import React from "react";
import { Layout, Menu, Tabs } from "antd";
import { Navbar, Footerr } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faUsers,
  faWallet,
  faHouseChimney,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { fontSize } from "@mui/system";
import Elemart from "../images/ELEMart.jpeg";
import Elemoney from "../images/ELEMoneylogo.png";
import Welem from "../images/WELEM.png";
const { Content } = Layout;

function Household() {
  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Navbar isLogined={true} />
      <Layout style={{ marginTop: "7%" }}>
        <Layout style={{ padding: "0" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)",
            }}
          >
{/* ................................. */}


                            {/* <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-sm" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", background:"white", borderRadius:"10px"}}>
                                    
                                      <img style={{width:"100%"}} src={Elemoney}/>
                                    </div>

                                    <div className="col-lg-4 col-sm" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", background:"white", borderRadius:"10px" }}>
                                    
                                      <img style={{width:"80%"}} src={Elemart}/>
                                    </div>

                                    <div className="col-lg-4 col-sm" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", background:"white", borderRadius:"10px" }}>
                                    
                                      <img style={{width:"50%",}} src={Welem}/>
                                    </div>
                                    
                                </div>
                            </div> */}
                       
                        {/* ........ */}
            
            {/* <div className="row">
              <div className="col-md-4 tile">
                <a href="/elmoney">
                  <h2 className="title">Elemoney</h2>
                  <FontAwesomeIcon
                    icon={faCoins}
                    style={{ color:"aliceblue",fontSize: "4.5rem" }}
                  />{" "}
                </a>
              </div>
              <div className="col-md-4 tile">
                <a href="/dspn">
                  <h2 className="title">My DSPN</h2>
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ color:"aliceblue",fontSize: "4.5rem" }}
                  />
                </a>
              </div>
              <div className="col-md-4 tile">
                <a href="/welem">
                  <h2 className="title">WELEM</h2>
                  <FontAwesomeIcon
                    icon={faWallet}
                    style={{ color:"aliceblue",fontSize: "4.5rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 lowertile">
                <a href="/myhousehold">
                  <h2 className="title">My Household</h2>
                  <FontAwesomeIcon
                    icon={faHouseChimney}
                    style={{ color:"aliceblue",fontSize: "4.5rem" }}
                  />
                </a>
              </div>
              <div className="col-md-6 lowertile">
                <a href="/monitoringsetup">
                  <h2 className="title">Monitoring Setup</h2>
                  <FontAwesomeIcon
                    icon={faGaugeHigh}
                    style={{ color:"aliceblue",fontSize: "4.5rem" }}
                  />
                </a>
              </div>
            </div> */}
          </Content>
          {/* <Footerr/> */}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Household;
