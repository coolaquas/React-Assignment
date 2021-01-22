import React from "react";
import "./Header.css";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function Header({ selected }) {
  const onClick = ({ key }) => {
    selected(key);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">US Business</Menu.Item>
      <Menu.Item key="2">Bitcoin Articles</Menu.Item>
      <Menu.Item key="3">TechCrunch</Menu.Item>
      <Menu.Item key="4">Wall Street Journal</Menu.Item>
      <Menu.Item key="5">Apple News</Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <h1>News-App</h1>
      <Dropdown overlay={menu}>
        <a
          href="*"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          News Providers <CaretDownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}

export default Header;
