import React, { useState } from "react";
import { Row, Col, List } from "antd";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import "../static/style/pages/comm.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import servicePath from "../config/apiUrl";
import axios from "axios";
import {
  ProfileOutlined,
  SmileOutlined,
  HeartOutlined,
} from "@ant-design/icons";
const Home = (list) => {
  const [mylist, setMylist] = useState(list.data);
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link
                    href={{ pathname: "/detailed", query: { id: item.id } }}
                  >
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <ProfileOutlined />
                    {item.addTime}
                  </span>
                  <span>
                    <SmileOutlined />
                    {item.typeName}
                  </span>
                  <span>
                    <HeartOutlined />
                    {item.view_count}
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer></Footer>
    </React.Fragment>
  );
};
Home.getInitialProps = async () => {
  const promises = new Promise((resolve, reject) => {
    try {
      axios("http://127.0.0.1:7001/default/getArticleList").then((res) => {
        console.log("------->", res.data);
        resolve(res.data);
      });
    } catch (error) {
      reject(error);
    }
  });
  return await promises;
};
export default Home;
