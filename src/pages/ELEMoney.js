import React from "react";
import { Layout, Row,Col,Card } from "antd";
import {
  Navbar,
  SideBar,
} from "../components";
import MaterialTable from "material-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faEnvelopeOpen,
  faHandHoldingDollar,
  faArrowDown,
  faCoins,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import cup from "../images/cup.png"

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
    icon: <FontAwesomeIcon icon={faHome} />,
    name: "My Household",
    children: null,
  },
  {
    key: "/monitoringsetup",
    path: "/monitoringsetup",
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} />,
    name: "Fixed Deposits",
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

const titleStyle = { fontFamily:"Montserrat", backgroundColor: "#045B62", color: "white" };

const data = [
  {
    month: "Jan",
    unit: "410",
    cylinder: "2",
    total: "430.781",
    datum: "446.89",
    percent: "3.58%",
    carbocreds: "3.58"
  },
  {
    month: "Feb",
    unit: "400",
    cylinder: "1",
    total: "375.87",
    datum: "390.52",
    percent: "3.75%",
    carbocreds: "3.75"
  },
  {
    month: "Mar",
    unit: "433",
    cylinder: "1",
    total: "403.03",
    datum: "413.56",
    percent: "2.41%",
    carbocreds: "2.41"
  },
  {
    month: "Apr",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "443.83",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "May",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "514.38",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Jun",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "526.31",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Jul",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "580.22",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Aug",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "516.84",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Sep",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "479.40",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Oct",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "467.05",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Nov",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "397.10",
    percent: "-",
    carbocreds: "-"
  },
  {
    month: "Dec",
    unit: "-",
    cylinder: "-",
    total: "-",
    datum: "380.64",
    percent: "-",
    carbocreds: "-"
  }
];
const columns = [
  { title: "Month", field: "month"},
  { title: "Electricity (Units)", field: "unit" },
  { title: "Gas (Cylinders)", field: "cylinder" },
  { title: "Total Emmission (kg)", field: "total" },
  { title: "Datum Emission (kg)", field: "datum" },
  { title: "% Reduced", field: "percent" },
  { title: "CraboCredits Earned", field:"carbocreds"}
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
              background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)",
              overflow:"hidden"
            }}
          >
          <div className="container" style={{margin: "5% 12%"}}>
            <Row gutter={[40,40]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
                className="shadow"
                title="Total Reduced Emission"
                headStyle={titleStyle}
                style={{ minHeight: 268, textAlign:"center",backgroundColor:"#D1E7DD"}}
                hoverable="true"
              >
                <h1 style={{marginTop:"20%",fontSize:"3rem"}}>56 kton <span><FontAwesomeIcon icon={faArrowDown} style={{color:"#826F66"}}/></span></h1>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
                className="shadow"
                title="Emmision Leaderboard"
                headStyle={titleStyle}
                style={{ minHeight: 250}}
                hoverable="true"
              >
              <table className="table table-striped table-hover table-success ">
            <thead>
              <tr>
                <th style={{color:"black"}}>#</th>
                <th style={{color:"black"}}>Household</th>
                <th style={{color:"black"}}>Emission Reduced</th>
              </tr>
            </thead>
            <tbody>
              <tr className="warning">
                <td>1</td>
                <td>Ojha</td>
                <td>580 kt</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mishra</td>
                <td>419 kt</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Barnwal</td>
                <td>360 kt</td>
              </tr>
              <tr>
                <td>98</td>
                <td>Kothari</td>
                <td>56 kt</td>
              </tr>
            </tbody>
          </table>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
                className="shadow"
                title="Toatal CarboCredits Earned"
                headStyle={titleStyle}
                style={{ minHeight: 268,textAlign:"center",backgroundColor: "#D1E7DD", }}
                hoverable="true"
              >
              <h1 style={{marginTop:"20%",fontSize:"3rem"}}>30 CC </h1>
              </Card>
            </Col>
            </Row>
            <div className="container">
            <MaterialTable
              title="Emmision Log"
              
              columns={columns}
              data={data}
              options={{
                // toolbar: false,
                paging: false,
                draggable: false,
                sorting: false,
                search: false,
                headerStyle: {
                  backgroundColor: "#045B62",
                  color: "#fff",
                  // fontWeight: "bold",
                  fontFamily: "Montserrat",
                },
              }}

              />
            </div>
          </div>
          </Content>
          {/* <Footerr/> */}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ELEMoney;
