import React from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/comm.css";
import "../static/style/pages/detailed.css";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import servicePath from "../config/apiUrl";

import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import {
  ProfileOutlined,
  SmileOutlined,
  HeartOutlined,
} from "@ant-design/icons";
const Detail = (detail) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true, // 类似github的风格
    pedantic: false, // 允许容错
    sanitize: false, // 不忽略html标签
    tables: true, // 允许github上的表格
    breaks: false, // 换行符
    smartLists: true, // 是否使用默认的列表风格
    smartypants: false,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    },
  });
  let html = marked(detail.artical);
  return (
    <React.Fragment>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/">视频列表</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">React学习冲啊冲-serlin</div>
              <div className="list-icon">
                <span>
                  <ProfileOutlined />
                  2020-05-20
                </span>
                <span>
                  <SmileOutlined />
                  文章
                </span>
                <span>
                  <HeartOutlined /> 2222人
                </span>
              </div>
              <div className="detailed-content">
                <ReactMarkdown source={markdown} escapeHtml={false} />
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav className="article-menu" source={html} ordered={false} />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};

Detail.getInitialProps = async (ctx) => {
  let id = ctx.query.id;
  const promises = new Promise((resolve, reject) => {
    try {
      axios(servicePath.getArticleById + id).then((res) => {
        console.log(res);
        resolve(res.data.data[0]);
      });
    } catch (error) {
      reject(error);
    }
  });
  return await promises;
};
export default Detail;
