import React from "react";
import "../static/style/components/header.css";
import { Row, Col, Menu, Icon } from "antd";
import {
  PlayCircleOutlined,
  BankOutlined,
  StarTwoTone,
} from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">Logo</span>
          <span className="header-txt">学习鸭冲啊冲～学习鸭冲啊冲～</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" className="ant-meu">
            <Menu.Item key="home" className="ant-menu-item">
              <PlayCircleOutlined />
              首页
            </Menu.Item>

            <Menu.Item key="learn">
              <BankOutlined />
              学习
            </Menu.Item>
            <Menu.Item key="life">
              <StarTwoTone />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
