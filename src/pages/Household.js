import React,{useEffect, useState} from "react";
import { Layout, Menu, Tabs } from "antd";
import {
  Navbar,
  Footerr,
  AreaGraph,
  SideBar,
  BarGraph,
  HorizontalBar,
  GaugeVoltage,
  GaugeCurrent,
  Percentile,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faUsers,
  faWallet,
  faHouseChimney,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./Household.css";
import { useUserAuth } from "../context/UserAuthContext";
import getDailyData from "../backend/getDailyData";
import getMonthlyData from "../backend/getMonthlyData";

const { TabPane } = Tabs;
const { Content } = Layout;

const data1 = [
  ["Day", "Estimated"],
  ["Mon", 1000],
  ["Tue", 1170],
  ["Wed", 1250],
  ["Thu", 1100],
  ["Fri", 1100],
  ["Sat", 1100],
  ["Sun", 1200]
];

const data2 = [
  ["Week", "Estimated"],
  ["Week1", 1000],
  ["Week2", 1170],
  ["Week3", 1250],
  ["Week4", 1100],
];

const data3 = [
  ["Month", "Estimated"],
  ["Jan", 1000],
  ["Feb", 1170],
  ["Mar", 1250],
];
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

function Household() {
  const {user} = useUserAuth();
  const [data1,setData1] = useState([]);
  const [data3,setData3] = useState([]);
  useEffect(()=>{
    if(user!=null){
      const id = setInterval(() => {
        var data = getDailyData(user);
        setData1(data);
        var data3 = getMonthlyData(user);
        setData3(data3)
      }, 3000);
  
      return () => {
        clearInterval(id);
      };
    }
  })
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
              marginLeft:"12.5%",
              minHeight: 280,
              background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)"
            }}
          >
            <div className="card">
              <div className="card-body">
                <h3>Welcome to your Dashboard!</h3>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                style={{
                  borderRadius: "100px",
                  paddingTop: "25px",
                  paddingLeft: "30px",
                  backgroundColor: "#045B62",
                }}
              >
                <h5 style={{ color: "white" }}>Personal Details</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Name:
                      </div>
                      <div className="col-md-6">{user.displayName}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Aadhar No:
                      </div>
                      <div className="col-md-6">6833 9791 0123</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        No of family members:
                      </div>
                      <div className="col-md-6">5</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Income Category:
                      </div>
                      <div className="col-md-6">3 to 5 LPA</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Electricity Consumer ID:
                      </div>
                      <div className="col-md-6">5</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Distribution Company:
                      </div>
                      <div className="col-md-6">BHEL</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Gas Consumer ID:
                      </div>
                      <div className="col-md-6">5</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6" style={{ fontWeight: "bold" }}>
                        Distribution Company:
                      </div>
                      <div className="col-md-6">Indane</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header"
                style={{
                  borderRadius: "100px",
                  paddingTop: "25px",
                  paddingLeft: "30px",
                  backgroundColor: "#045B62",
                }}
              >
                <h5 style={{ color: "white" }}>Consumption Details</h5>
              </div>
              <div className="card-body">
                <div className="row"> 
                  <div className="col-md-6">
                    <div className="card1">
                      <div
                        className="card-header"
                        style={{
                          borderRadius: "100px",
                          paddingTop: "10px",
                          paddingLeft: "30px",
                          color: "white",
                          backgroundColor: "#045B62",
                        }}
                      >
                        Voltage
                      </div>
                      <div
                        className="card-body"
                        style={{ paddingLeft: "100px" }}
                      >
                        <GaugeVoltage />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card1">
                      <div
                        className="card-header"
                        style={{
                          borderRadius: "100px",
                          paddingTop: "10px",
                          paddingLeft: "30px",
                          color: "white",
                          backgroundColor: "#045B62",
                        }}
                      >
                        Current
                      </div>
                      <div
                        className="card-body"
                        style={{ paddingLeft: "100px" }}
                      >
                        <GaugeCurrent />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card1">
                      <div
                        className="card-header"
                        style={{
                          borderRadius: "100px",
                          paddingTop: "10px",
                          paddingLeft: "30px",
                          color: "white",
                          backgroundColor: "#045B62",
                        }}
                      >
                        Energy Consumption
                      </div>
                      <div className="card-body">
                        <Tabs defaultActiveKey="1">
                          <TabPane tab="Daily" key="1">
                          <BarGraph data={data1}/>
                          </TabPane>
                          <TabPane tab="Weekly" key="2">
                          <BarGraph data={data2}/>
                          </TabPane>
                          <TabPane tab="Monthly" key="3">
                          <BarGraph data={data3}/>
                          </TabPane>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card1">
                      <div
                        className="card-header"
                        style={{
                          borderRadius: "100px",
                          paddingTop: "10px",
                          paddingLeft: "30px",
                          color: "white",
                          backgroundColor: "#045B62",
                        }}
                      >
                        Usage Estimate
                      </div>
                      <div className="card-body">
                        <AreaGraph />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card1">
                    <div
                      className="card-header"
                      style={{
                        borderRadius: "100px",
                        paddingTop: "10px",
                        paddingLeft: "30px",
                        color: "white",
                        backgroundColor: "#045B62",
                      }}
                    >
                      Carbon Footprint
                    </div>
                    <div className="card-body">
                      <HorizontalBar />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card1">
                    <div
                      className="card-header"
                      style={{
                        borderRadius: "100px",
                        paddingTop: "10px",
                        paddingLeft: "30px",
                        color: "white",
                        backgroundColor: "#045B62",
                      }}
                    >
                      Emmission Percentile
                    </div>
                    <div className="card-body">
                      <Percentile />
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

export default Household;
