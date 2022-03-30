import React from 'react'
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css"
import Elemwhite from "../images/Elemwhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const { Footer } = Layout;

function Footerr() {
    return (
        <Footer class='site-layout-footer' style={{ textAlign: 'center'}}>

            <div class="l-footer">
                <h1>
                    <img src={Elemwhite} style={{ width: "60%" }} alt="" /></h1>
                <p>
                    ELEM incentivizes people to reduce their household emissions, in any way they can, and aids them through specially endorsed, tailor-made household solutions in the form of appliances and services.
                </p>
            </div>
            <ul class="r-footer">
                {/* <li>
                    <h2 style={{color:"white", fontSize: "1.5rem",  fontFamily: "League Spartan, sans-serif"}}>
                        SOCIAL</h2>
                    <ul class="box">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </li> */}
                <li class="footer-center">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p>Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004</p>
                        </div>

                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91 1234567899</p>
                        </div>

                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:contact@elem.com">contact@elem.com</a></p>
                        </div>
                </li>
                <li class="features">
                    <h2 style={{ color: "white", fontSize: "1.5rem", fontFamily: "League Spartan, sans-serif" }}>LINKS</h2>
                    <ul class="box h-box" style={{ textAlign: "center" }}>
                        <li><a href="#"style={{ color:"white"}} >Products</a></li>
                        <li><a href="#" style={{ color:"white"}}>About Us</a></li>
                        <li><a href="#" style={{ color:"white"}}>Core Team</a></li>
                        <li><a href="#" style={{ color:"white"}}>Elemoney</a></li>
                        <li><a href="#" style={{ color:"white"}}>Elemart</a></li>
                        <li><a href="#" style={{ color:"white"}}>Contact Us</a></li>
                    </ul>
                </li>
                
            </ul>
            <Menu mode="horizontal" style={{paddingLeft:"40%", backgroundColor: "transparent", paddingBottom:"1%", paddingTop:"1%"}}>
                <Menu.Item  key="1"><Link to="/myhousehold">  <Twitter style={{ color:"white"}}/></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/"> <Facebook style={{ color:"white"}}/></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/"><Instagram style={{ color:"white"}}/></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/"> <LinkedIn style={{ color:"white"}}/></Link></Menu.Item>
            </Menu>
           
            
          
           
            <div class="b-footer">
                <p>
                    All rights reserved by ©ELEM 2022</p>
            </div>


        </Footer>
    )
}

export default Footerr