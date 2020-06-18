import { Avatar, Divider } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import "../static/style/components/Author.css";
const Author = () => {
  return (
    <React.Fragment>
      <div className="author-div comm-box">
        <div>
          <Avatar
            size={60}
            src="https://wx.qlogo.cn/mmopen/vi_32/xkQQprKwdHLHtbD4UQL2JqbvcLsNGVflyub2WU2StXojc2gThKBza0QHXwmeTOmBRUy6uqrA1WTDo21gcYRu7A/132"
          ></Avatar>
        </div>
        <div>serlin</div>
        <div className="author-introduction">
          我是serlin，快乐小前端
          <Divider>社交账号</Divider>
          <HeartOutlined width="2rem" height="2rem" className="account" />
          <HeartOutlined width="2rem" height="2rem" className="account" />
          <HeartOutlined width="2rem" height="2rem" className="account" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Author;
