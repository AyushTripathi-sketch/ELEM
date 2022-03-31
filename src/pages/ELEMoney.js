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
    sno: 1,
    purpose: "Course Waiver to Ph.D. Scholar",
    code: "PH1",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph1.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 2,
    purpose: "Constitution of Doctoral Scrutiny Committee (DSC)",
    code: "PH2",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph2.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 3,
    purpose:
      "Form for 2nd Semester Course Work Proposed By DSC for Ph.D Scholar",
    code: "PH3",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph3.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 4,
    purpose: "Comprehensive Examination Report",
    code: "PH4",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph4.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 5,
    purpose: "Research Proposal Seminar Report",
    code: "PH5",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph5.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 6,
    purpose: "Pre-Submission Thesis Assessment by Doctoral Scrutiny Committee",
    code: "PH6",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 7,
    purpose: "Pre-Submission Report of Ph.D. Scholar",
    code: "PH7",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph7.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 8,
    purpose: "Certificate for Acceptance of Draft Thesis by DSC ",
    code: "PH7-A",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph7a.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 9,
    purpose: "Suggested Panel of Examiners",
    code: "PH8",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph8.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 10,
    purpose: "Particulars of candidate for Submission of Synopsis for Ph.D",
    code: "PH9",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph9.pdf",
    name: " Dean (Academic)",
  },
];
const columns = [
  { title: "Datum Emmission", field: "sno" },
  { title: "Current Emmision", field: "purpose" },
  { title: "% Reduced", field: "code" },
  // {
  //   title: "Download",
  //   field: "url",
  //   render: (rowData) => (
  //     <a href={rowData.url}>
  //       <img
  //         alt=""
  //         class="icon"
  //         src="https://img.icons8.com/fluent/48/000000/pdf.png"
  //       />
  //     </a>
  //   ),
  // },
  { title: "Carbocredits Balance", field: "name" },
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
          <div className="container">
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
              <h1 style={{marginTop:"20%",fontSize:"3rem"}}>3000 CC </h1>
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
