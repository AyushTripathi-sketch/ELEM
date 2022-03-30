import React from "react";
import { Layout, Menu, Tabs } from "antd";
import {
  Navbar,
  Footerr,
  AreaGraph,
  SideBar,
  BarGraph,
  HorizontalBar,
  Gauge,
  GaugeCurrent,
  Percentile,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faEnvelopeOpen,
  faHandHoldingDollar,
  faCoins
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const { TabPane } = Tabs;
const { Content } = Layout;

const menu = [
  {
    key: "/elemoney",
    path: "/elemoney",
    icon: <FontAwesomeIcon icon={faCoins} />,
    name: "ELEMoney",
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
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} />,
    name: "Fixed Deposits",
    children: null,
  },
  {
    key: "/monitoringsetup",
    path: "/monitoringsetup",
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    name: "Personal Loans",
    children: null,
  },
  {
    key: "/monitoringsetup",
    path: "/monitoringsetup",
    icon: <FontAwesomeIcon icon={faCoins} />,
    name: "Redeem CarboCredits",
    children: null,
  },
];

function ELEMoney() {
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
              overflow:"hidden"
            }}
          >
          <div className="wrap" style={{width:"fit-container"}}>
          <iframe src="https://docs.google.com/spreadsheets/d/1jEJ1Bf6vANQu7eWD1eokoNzL-hHC3ZLYv6hxGC9A-ZQ/htmlembed/sheet?gid=0"></iframe>
          </div>
          </Content>
          {/* <Footerr/> */}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ELEMoney;
