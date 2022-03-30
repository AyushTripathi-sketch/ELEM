import React, { useState,useEffect } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(props.menu[0].path);
  const menuItems = [];
  let childrens;

  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }

  function handleClick(event){
    setSelectedKey(window.location.pathname);
    localStorage.setItem("showSession","true");
  }
  useEffect(()=>{
    setSelectedKey(window.location.pathname);;
  },[]);
  props.menu.forEach((item) => {
    if (item.children === null) {
      menuItems.push(
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      );
    } else {
      childrens=[];
      item.children.forEach((child) => {
        childrens.push(<Menu.Item key={child.key}>
          <Link to={child.path}>{child.name}</Link>
        </Menu.Item>);
      })
      menuItems.push(
        <SubMenu key={item.key} icon={item.icon} title={item.name}>
          {childrens}
        </SubMenu>
      );
    }
  });
  return (
    <Sider className="sidebar" collapsible collapsed={collapsed} onCollapse={onCollapse} style={{position: "fixed",
      zIndex: "1", height:"100%"}}>
      <Menu
        defaultSelectedKeys={[props.menu[0].path]}
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={handleClick}
        style={{marginTop:"20%",backgroundColor:"white"}}
      >
        {menuItems}
      </Menu>
    </Sider>
  );
}

export default SideBar;
