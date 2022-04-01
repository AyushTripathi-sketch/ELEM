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
    faCoins,
    faAddressCard,
    faLocation,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import "./WELEM.css";
import cc from "../images/cc.png";
import Welem from "../images/WELEM.png";

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
                            background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)",
                            overflow: "hidden"
                        }}
                    >
                        <div className="welemain">
                            <div className="container" style={{ color: "black" }}>
                                <div class="row">
                                    <div class="col-xl-4 col-lg-6">
                                        <div class="card card-stats mb-4 mb-xl-0" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", height: "85%" }}>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-6 col-sm">
                                                        <h5 class="card-title text-uppercase text-muted mb-0">BALANCE</h5>
                                                        <br></br>
                                                        <span class="h2 font-weight-bold mb-0" style={{ margin: "20% 0%" }}>10000</span>
                                                        <br></br>
                                                        <p style={{ color: "black" }}>CarboCredits</p>
                                                    </div>
                                                    <div class="col-lg-6 col-sm">
                                                        {/* <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                            <i class="fas fa-chart-bar"></i>
                                                        </div> */}
                                                        <div>
                                                            <img src="https://cdn.icon-icons.com/icons2/2508/PNG/512/wallet_money_business_coin_dollar_icon_150710.png" style={{ width: "100%", zIndex: "20", overflow: "hidden !important" }} />
                                                        </div>
                                                    </div>

                                                    <p class="mt-3 mb-0 text-muted text-sm" style={{ marginTop: "0px !important" }}>
                                                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 1.12%</span>
                                                        <span class="text-nowrap"> Since last month</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-lg-6">
                                        <div class="card card-stats mb-4 mb-xl-0" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", height: "85%", paddingBottom: "0px" }}>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-7 col-sm">
                                                        <h5 class="card-title text-uppercase text-muted mb-0">Carbocredits</h5>
                                                        <br></br>
                                                        <span class="h2 font-weight-bold mb-0">Rs 100/cc</span>
                                                        <br></br>
                                                        <p style={{ color: "black" }}>Exchange Rate</p>
                                                    </div>
                                                    <div class="col-lg-5 col-sm">
                                                        {/* <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                            <i class="fas fa-chart-pie"></i>
                                                        </div> */}
                                                        <img src={cc} style={{ width: "100%", zIndex: "20", overflow: "hidden !important" }} alt="Carbocredit exchange" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6">
                                        <div class="card card-stats mb-4 mb-xl-0" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", height: "85%" }}>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <h5 class="card-title text-uppercase text-muted mb-0">TRANSACTIONS</h5>
                                                        <br></br>
                                                        <p style={{color:"black", fontSize: "1.2rem"}}><span style={{fontWeight:"600"}}> Credited Amount:</span> <span style={{color: "#515151", fontSize:"1.1rem"}}>1000 CC</span> </p>
                                                        <p style={{color:"black", fontSize: "1.2rem"}}><span style={{fontWeight:"600"}}> Withdrawn Amount:</span> <span style={{color: "#515151", fontSize:"1.1rem"}}>600 CC</span> </p>
                                                        <div style={{textAlign:"center"}}>
                                                        <button type="button" class="btn" style={{marginTop:"2%"}}><a href=""><span>Payment Options</span></a></button>
                                                        {/* <button type="button" class="btn btn-primary"><a href=""><span>Withdraw Credits</span></a></button> */}
                                                        </div>
                                                    </div>
                                                    {/* <div class="col-auto">
                                                        <div class="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                            <i class="fas fa-users"></i>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                {/* <p class="mt-3 mb-0 text-muted text-sm">
                                                    <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
                                                    <span class="text-nowrap">Since yesterday</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>



                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", height: "100%" }}>
                                                <div class="card-body">
                                                    <p style={{
                                                        fontFamily: "Open Sans, sans-serif",
                                                        fontSize: "1.5rem",
                                                        fontWeight: "600",
                                                        color:"black",
                                                    }}>INFORMATION</p>
                                                </div>
                                                <div style={{padding: "2% 4%"}}>
                                                <p style={{color:"black", fontSize: "1.2rem"}}><FontAwesomeIcon icon={faAddressCard} /><span style={{fontWeight:"600"}}>  Account Number:</span> <span style={{color: "#515151", fontSize:"1.1rem"}}>1111 1111 1111 1111</span> </p>
                                                <p style={{color:"black", fontSize: "1.2rem"}}><FontAwesomeIcon icon={faLocation} /><span style={{fontWeight:"600"}}>  Address:</span> <span style={{color: "#515151", fontSize:"1.1rem"}}>Old Madras Rd, Sadanandanagar, Bennigana Halli, Bengaluru, Karnataka 560016</span></p>
                                                <p style={{color:"black", fontSize: "1.2rem",}}><FontAwesomeIcon icon={faWallet} /><span style={{fontWeight:"600"}}>  Wallet ID:</span><span style={{color: "#515151", fontSize:"1.1rem"}}>1bDEbTOVSCnYZDV</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-6 col-lg-6">
                                            <div class="card card-stats mb-4 mb-xl-0" style={{ boxShadow: "0 0 20px rgb(206, 202, 202)", height: "100%", paddingBottom: "0px" }}>
                                                <div class="card-body" style={{overflow:"hidden", textAlign:"center"}}>
                                                    <img src={Welem} style={{width:"50%"}} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    <div class="row" style={{margin:"2.5% 0%"}}>
                                        <div class="welemwrapper welemrounded">
                                            {/* <nav class="welemnavbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <a class="welemnavbar-brand" href="#">Transactions <p class="text-muted pl-1">Welcome to your transactions</p> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                                                <div class="collapse navbar-collapse" id="navbarNav">
                                                    <ul class="navbar-nav ml-lg-auto">
                                                        <li class="nav-item"> <a class="nav-link" href="#"><span class="fa fa-bell-o font-weight-bold"></span> <span class="notify">Notifications</span> </a> </li>
                                                        <li class="nav-item "> <a href="#"><span class="fa fa-search"></span></a> <input type="search" class="dark" placeholder="Search"/> </li>
                                                    </ul>
                                                </div>
                                            </nav> */}
                                            <div>
                                                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.5rem", fontWeight: "600", letterSpacing: "1.5px" }}>TRANSACTION HISTORY</p>
                                            </div>
                                            {/* <div class="row mt-2 pt-2">
                                                <div class="col-md-6" id="income">
                                                    <div class="d-flex justify-content-start align-items-center">
                                                        <p class="fa fa-long-arrow-down"></p>
                                                        <p class="text mx-3">Income</p>
                                                        <p class="text-white ml-4 money">$9,758.23</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="d-flex justify-content-md-end align-items-center">
                                                        <div class="fa fa-long-arrow-up"></div>
                                                        <div class="text mx-3">Expense</div>
                                                        <div class="text-white ml-4 money">$961.23</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div class="d-flex justify-content-between align-items-center mt-3">
                                                <ul class="nav nav-tabs w-75">
                                                    <li class="nav-item"> <a class="nav-link active" href="#history">History</a> </li>
                                                </ul> <button class="btn btn-primary">New Transaction</button>
                                            </div> */}
                                            <div class="table-responsive mt-3" style={{ backgroundColor: "white", padding: "2% 2%", borderRadius: "8px" }}>
                                                {/* <table class="table table-dark table-borderless" style={{backgroundColor:"white !important"}}>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Activity</th>
                                                            <th scope="col">Mode</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col" class="text-right">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Electric Fans </td>
                                                            <td><span class="fa fa-cc-mastercard"></span></td>
                                                            <td class="text-muted">20 Oct 2022, 16:00</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $52.9 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-bed mr-1"></span> Hotel Leela Palace </td>
                                                            <td><span class="fa fa-cc-mastercard"></span></td>
                                                            <td class="text-muted">11 Jul 2020, 2:00 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $18.9 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-exchange mr-1"></span> Monthly Salary </td>
                                                            <td><span class="fa fa-cc-visa"></span></td>
                                                            <td class="text-muted">10 Jul 2020, 8:30 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-down mr-1"></span> $9,765.00 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-exchange mr-1"></span> Xbox Purchase </td>
                                                            <td><span class="fa fa-cc-mastercard"></span></td>
                                                            <td class="text-muted">12 May 2020, 4:30 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $198.90 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-cutlery mr-1"></span> Dinner Party </td>
                                                            <td><span class="fa fa-cc-visa"></span></td>
                                                            <td class="text-muted">11 May 2020, 5:30 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $12.90 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Nandini Hills Ride </td>
                                                            <td><span class="fa fa-cc-mastercard"></span></td>
                                                            <td class="text-muted">10 May 2020, 01:30 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Goa Beach Party </td>
                                                            <td><span class="fa fa-cc-visa"></span></td>
                                                            <td class="text-muted">09 May 2020, 01:30 PM</td>
                                                            <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}
                                                <table class="table" style={{ fontSize: "15px" }}>
                                                    <thead class="welemthead">
                                                        <tr>
                                                            <th scope="col" style={{ fontSize: "18px", color: "black" }}>SL. NO.</th>
                                                            <th scope="col" style={{ fontSize: "18px", color: "black" }}>ACTIVITY</th>
                                                            <th scope="col" style={{ fontSize: "18px", color: "black" }}>DATE</th>
                                                            <th scope="col" style={{ fontSize: "18px", color: "black" }}>AMOUNT</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Electric Fans</td>
                                                            <td>20th April, 2022</td>
                                                            <td><span class="fa fa-long-arrow-up mr-1"></span> 25 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Heater</td>
                                                            <td>16th August, 2022</td>
                                                            <td><span class="fa fa-long-arrow-up mr-1"></span> 30 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Solar Panels</td>
                                                            <td>18th December, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-up mr-1"></span> 50 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Electric Fans</td>
                                                            <td>20th April, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-up mr-1"></span> 25 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <td>Heater</td>
                                                            <td>16th August, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-up mr-1"></span> 30 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">6</th>
                                                            <td>Solar Panels</td>
                                                            <td>18th December, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-down mr-1"></span> 50 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">7</th>
                                                            <td>Electric Fans</td>
                                                            <td>20th April, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-up mr-1"></span> 25 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">8</th>
                                                            <td>Heater</td>
                                                            <td>16th August, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-down mr-1"></span> 30 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">9</th>
                                                            <td>Solar Panels</td>
                                                            <td>18th December, 2022</td>
                                                            <td><span class="fa fa-long-arrow-up mr-1"></span> 50 CC</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td>Solar Panels</td>
                                                            <td>18th December, 2022</td>
                                                            <td> <span class="fa fa-long-arrow-down mr-1"></span> 50 CC</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center results"> <span class="pl-md-3" style={{ fontSize: "16px", color: "black" }}>Showing <b class="text-white"> 1-10 of 50 </b>  transactions</span>
                                                <div class="pt-3">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination">
                                                            <li class="page-item disabled"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li>
                                                            <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
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

export default ELEMoney;



