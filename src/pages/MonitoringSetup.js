import React from "react";
import { Layout} from "antd";
import {
  Navbar,
  Footerr,
  SideBar,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCoins,
  faHouseChimney,
  faGaugeHigh,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const { Content } = Layout;

const menu = [
    {
      key: "/elemoney",
      path: "/elemoney",
      icon: <FontAwesomeIcon icon={faCoins} />,
      name: "Elemoney",
      children: null,
    },
    {
      key: "/dspn",
      path: "/dspn",
      icon: <FontAwesomeIcon icon={faUsers} />,
      name: "My DSPN",
      children: null,
    },
    {
      key: "/welem",
      path: "/welem",
      icon: <FontAwesomeIcon icon={faWallet} />,
      name: "WELEM",
      children: null,
    },
    {
      key: "/myhousehold",
      path: "/myhousehold",
      icon: <FontAwesomeIcon icon={faHouseChimney} />,
      name: "My Household",
      children: null,
    },
    {
      key: "/monitoringsetup",
      path: "/monitoringsetup",
      icon: <FontAwesomeIcon icon={faGaugeHigh} />,
      name: "Monitoring Setup",
      children: null,
    },
  ];

function MonitoringSetup() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar isLogined={true} />
      <Layout style={{ marginTop: "7%" }}>
        <SideBar menu={menu} />
        <Layout style={{ padding: "0" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#f2f6fc",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div class="card mb-3" style={{ width:"fit-container" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzBTqHC8Yzmr27yc_Wq0NumG-P8lBwg2vSQ&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                  <br/>
                  <br/>
                    <div class="card-body">
                      <h5 class="card-title">ESP32 Wifi Module</h5>
                      <p style={{color:"black"}} class="card-text">
                      A microcontroller unit with inbuilt wifi module. This facilitates the sensor interfacing and data collection from the current and voltage sensors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3" style={{ width:"fit-container" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN23QRowv450to-9BMld9DfLtco66x_NaDUA&usqp=CAU" alt="..." />
                  </div>
                  <div class="col-md-8">
                  <br/>
                  <br/>
                    <div class="card-body">
                      <h5 class="card-title">SCT 103 Current Sensor</h5>
                      <p style={{color:"black"}} class="card-text">
                      Non invasive type current sensor that can measure AC current upto 20 amps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3" style={{ width:"fit-container" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXgTX4THgaOWqPlz13YrjVlxGKYrlj48a1A&usqp=CAU" alt="..." />
                  </div>
                  <div class="col-md-8">
                  <br/>
                  <br/>
                    <div class="card-body">
                      <h5 class="card-title">ZMPT 101 Voltage Sensor</h5>
                      <p style={{color:"black"}} class="card-text">
                      Non invasive type current sensor that can measure AC current upto 20 amps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
          {/* <Footerr/> */}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MonitoringSetup;
