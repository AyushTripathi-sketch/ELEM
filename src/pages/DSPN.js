import React from "react";
import { Layout } from "antd";
import {
  Navbar,
  Footerr,
  SideBar
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCoins,
  faHeart,
  faBox,
  faCartShopping,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
import "./DSPN.css";
import "../App.css";
import coin from "../images/coin.png"

const { Content } = Layout;

const solarpanel = "data:image/jpeg;base64,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"

const menu = [
  {
    key: "/dspn",
    path: "/dspn",
    icon: <FontAwesomeIcon icon={faBox} />,
    name: "All Products",
    children: null,
  },
  {
    key: "/elemoney",
    path: "/elemoney",
    icon: <FontAwesomeIcon icon={faHeart} />,
    name: "WishList",
    children: null,
  },
  {
    key: "/welem",
    path: "/welem",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    name: "Cart",
    children: null,
  },
  {
    key: "/myhousehold",
    path: "/myhousehold",
    icon: <FontAwesomeIcon icon={faLineChart} />,
    name: "Orders",
    children: null,
  },
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
              minHeight: 280,
              background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)",
              overflow: "hidden",
            }}
          >
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  DeCarbonizing Services & Products
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Elemoney Recommendations
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="container">
                  <div class="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                      <select
                        className="form-select search input"
                        aria-label="Default select example"
                        style={{
                          width: "300px",
                          height: "60px",
                          backgroundColor:"white",
                          border: "2px solid #d6d4d4",
                        }}
                      >
                        <option selected>Select Category</option>
                        <option value="1">Rooftop Solar Installation </option>
                        <option value="2">Efficient Energy Monitoring</option>
                        <option value="3">Solar Water Heating</option>
                        <option value="4">Smart Temperatue Control</option>
                        <option value="5">Efficient Energy Appliances</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <div className="search">
                        {" "}
                        <i className="fa fa-search"></i>{" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="What do you need?"
                        />{" "}
                        <button className="btn btn-primary">Search</button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                  <div class="col">
                    <div class="card">
                      <img
                        src={solarpanel}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Solar Panel</h5>
                        <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">45 <img src={coin} alt="" style={{width:"40px"}}/></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy4ra-wi6lPkjzUYeUVvm1vEU_pLG9Wl9DQ&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Solar Cooker</h5>
                        <p style={{color:"black", fontSize:"1.2rem"}}>70 <img src={coin} alt="" style={{width:"40px"}}/></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nfO3T0KZ2gPg-g4T9EElBmGNIZZHrN3wQ&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Solar Lamp</h5>
                        <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">12 <img src={coin} alt="" style={{width:"40px"}}/></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXUKzJstutfajUQtMuHbjfxgHtHyws3lvLw&usqp=CAU"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Solar Fan</h5>
                        <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">67 <img src={coin} alt="" style={{width:"40px"}}/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="container">
                  <div class="card" style={{ width: "fit-conatainer " }}>
                    <div class="card-body">
                      <h5 class="card-title">Rooftop Solar Installation</h5>
                      <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card1">
                            <img
                              src={solarpanel}
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Panel</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">45 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy4ra-wi6lPkjzUYeUVvm1vEU_pLG9Wl9DQ&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Cooker</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">70 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nfO3T0KZ2gPg-g4T9EElBmGNIZZHrN3wQ&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Lamp</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">12 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXUKzJstutfajUQtMuHbjfxgHtHyws3lvLw&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Fan</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">67 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card" style={{ width: "fit-conatainer " }}>
                    <div class="card-body">
                      <h5 class="card-title">Efficient Energy Appliances</h5>
                      <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card1">
                            <img
                              src={solarpanel}
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Panel</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">45 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy4ra-wi6lPkjzUYeUVvm1vEU_pLG9Wl9DQ&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Cooker</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">70 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_nfO3T0KZ2gPg-g4T9EElBmGNIZZHrN3wQ&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Lamp</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">12 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card1">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXUKzJstutfajUQtMuHbjfxgHtHyws3lvLw&usqp=CAU"
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">Solar Fan</h5>
                              <p style={{color:"black", fontSize:"1.2rem"}} class="card-text">67 <img src={coin} alt="" style={{width:"40px"}}/></p>
                            </div>
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
