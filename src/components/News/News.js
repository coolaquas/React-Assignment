import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./News.css";
import { Pagination, Card, Avatar } from "antd";
const { Meta } = Card;

function News({ newsData }) {
  const [loading, setLoading] = useState(true);
  const [currectPage, setCurrentPage] = useState(1);
  // console.log(data);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const handlePages = (page) => {
    setCurrentPage(page);
  };

  const display = (pagenumber) => {
    let initial = (pagenumber - 1) * 10;
    let final = pagenumber * 10 - 1;
    return newsData?.map((news, idx) => {
      if (idx >= initial && idx <= final) {
        return (
          <div key={idx} className="news__dataContainer">
            <Card
              style={{ width: "350", height: "300" }}
              hoverable="true"
              loading={loading}
            >
              <Meta
                avatar={<Avatar size={60}>{news.author}</Avatar>}
                title={news.title}
                description={`By: ${news.author}`}
              />
              <p>{news.content}</p>
              <img src={news.urlToImage} alt="" />
            </Card>
          </div>
        );
      }
    });
  };
  return (
    <div className="news">
      <div className="news__pagination">
        <span>
          <Pagination current={currectPage} onChange={handlePages} total={50} />
        </span>
      </div>
      <div className="news__container">{display(currectPage)}</div>
    </div>
  );
}

export default News;
