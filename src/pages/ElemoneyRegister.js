/* eslint-disable no-lone-blocks */
import React from "react";
import { Navbar } from "../components";
import { Layout } from "antd";
import "./ElemoneyRegister.css";

const { Content } = Layout;
export default function Register() {
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content">
            <div class="page-content">
              <div class="form-v4-content">
                <div class="form-left">
                  <h2 style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  marginTop: "3rem",
                  color: "white",
                  fontFamily: "League Spartan, sans-serif",
                }}>ELEM</h2>
                  <p styles={{textSpacing:"2px !important"}}class="text-1">
                  The ideology behind how ELEM works is very simple.
At ELEM, we believe that once properly incentivized, people can achieve miraculous wonders, and that is exactly what our planet needs with excessive carbon emissions bringing about problems on a global level.<br></br>
<br></br>
ELEM incentivizes people to reduce their household emissions, in any way they can, and aids them through specially endorsed, tailor-made household solutions in the form of appliances and services.

                  </p>
                  <div class="form-left-last" style={{textAlign:"center", height:"50px"}}>
                    <a href="#">
                      <button type="button" class="btn btn-light btn-rounded" style={{margin:"10% 0%", height:"100%", width:"40%"}}>
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
                <form class="form-detail" action="#" method="post" id="myform">
                  <h2 style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  marginTop: "3rem",
                  color: "black",
                  fontFamily: "League Spartan, sans-serif"}}>
                    HOUSEHOLD REGISTRATION
                  </h2>
                  <div class="form-group">
                    <div class="form-row form-row-1">
                      <label for="first_name">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        class="input-text"
                      />
                    </div>
                    <div class="form-row form-row-1">
                      <label for="last_name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        class="input-text"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <label for="your_email">Email</label>
                    <input
                      type="text"
                      name="your_email"
                      id="your_email"
                      class="input-text"
                      required
                      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    />
                  </div>
                  <div class="form-row">
                    <label for="noOfFamilyMembers">No. of Family Members</label>
                    <input
                      type="number"
                      name="noOfFamilyMembers"
                      id="noOfFamilyMembers"
                      class="input-text"
                      required
                    />
                  </div>
                  <div class="form-row">
                    <label for="income">Income Category</label>
                    <select name="income" id="income">
                      <option value="4">3 to 5 LPA</option>
                      <option value="6">5 to 8 LPA</option>
                      <option value="10">8 to 12 LPA</option>
                      <option value="15">12 to 20 LPA</option>
                      <option value="21"> {'>'}20 LPA</option>
                    </select>
                  </div>
                  <div class="form-row">
                    <label for="address">Address:</label>
                    <textarea
                      name="address"
                      id="address"
                      cols="70"
                      rows="2"
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <div class="form-row form-row-1 ">
                      <label for="city">City:</label>
                      <input type="text" id="city" name="city" maxlength="15" />
                    </div>
                    <div class="form-row form-row-1">
                      <label for="city">State:</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        maxlength="15"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row form-row-1 ">
                      <label for="pincode">PIN Code:</label>
                      <input type="number" id="pin" name="pin" maxlength="6" />
                    </div>
                    <div class="form-row form-row-1">
                      <label for="pincode">Aadhar No:</label>
                      <input type="number" id="pin" name="pin" maxlength="15" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row form-row-1">
                      <label for="electricityConsumerID">Electricity Consumer ID:</label>
                      <input type="text" id="pin" name="pin" maxlength="15" />
                    </div>
                    <div class="form-row form-row-1 ">
                      <label for="electricCompany">Distribution Company</label>
                      <input type="text" id="pin" name="pin" maxlength="6" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row form-row-1">
                      <label for="gasConsumerID">Gas Consumer ID:</label>
                      <input type="text" id="pin" name="pin" maxlength="15" />
                    </div>
                    <div class="form-row form-row-1 ">
                      <label for="gasCompany">Distribution Company</label>
                      <input type="text" id="pin" name="pin" maxlength="6" />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-row form-row-1 ">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="input-text"
                        required
                      />
                    </div>
                    <div class="form-row form-row-1">
                      <label for="confirm-password">Confirm Password</label>
                      <input
                        type="password"
                        name="comfirm_password"
                        id="comfirm_password"
                        class="input-text"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row-last">
                    <input
                      type="submit"
                      name="register"
                      class="register"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Content>
          {/* <Footerr className="site-layout-footer"/> */}
        </Layout>
      </Layout>
    </>
  );
}
