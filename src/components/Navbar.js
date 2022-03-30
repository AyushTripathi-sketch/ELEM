import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button,Menu } from "antd";
import "../App.css";
import "./Navbar.css"
import ELEM from "../images/ELEM.png"
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const {SubMenu} = Menu;
function Navbar(props) {

  const {user, logOut} = useUserAuth();
  const navigate = useNavigate();
  const handlelogOut = async () => {
    try{
      await logOut();
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className="navv" style={{position: "fixed",
  top: "0",
  width: "100%", zIndex: "15"}}>
      <div style={{width:"100%",height:"20px",backgroundColor:"#4E9F3D"}}></div>
      <div className="navbarr" style={{backgroundColor:"white", height: "5%", padding:"1% 5%"}}>
        {/* <h1 className="brand">@elem</h1> */}
        <a className="navbar-brand" href="/">
            <img alt="ELEM" src={ELEM} className="img-fluid" style={{width: "10%", display: "inline-block !important"}}/>
        </a>
          <span style={{display: "inline-block !important"}}>
            {/* <Button href="/products" size="large" style={{border:0,backgroundColor:"white"}}>Products</Button> */}
            <Button href="/about"size="large" style={{border:0,backgroundColor:"white"}}>About us</Button>
            <Button href="/team"size="large" style={{border:0,backgroundColor:"white"}}>Core Team</Button>
            <Button href="/contact" size="large" style={{border:0,backgroundColor:"white"}}>Contact us</Button>
            <Button href="/faq" size="large" style={{border:0,backgroundColor:"white"}}>FAQ</Button>
            <div style={{display:props.isLogined?"none":"inherit",float:"right",marginTop:"10px"}}>
            <Button  href="/login" size="large" style={{border:0,backgroundColor:"white"}}>Sign In</Button>
            <Button href="/register" size="large" style={{color:"white",backgroundColor:"#4E9F3D",borderRadius:"5px"}}>Create Account</Button>
            </div>
            <div style={{display:props.isLogined?"inherit":"none",float:"right",marginTop:"10px"}}>
            <Menu mode="horizontal" style={{border:"0"}}>
              <SubMenu key="sub1" icon={<AccountCircleIcon style={{fontSize:"2.5rem"}}/>} title={user?user.displayName:"Hello User"}>
                <Menu.Item  key="1"><Link to="/dashboard">My Profile</Link></Menu.Item>
                <Menu.Item key="2" onClick={handlelogOut}>LogOut</Menu.Item>
              </SubMenu>
            </Menu>
            </div>
          </span>
      </div>
      </div>
    </>
  );
}
export default Navbar;
