// a page similar to other that fetches all the news from adejord.co.uk/news and renders all items.
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Root } from "../styles";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  width: 90vw;
  justify-content: center;
  padding-top: 20px;
`;

const TextAndNewsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  width: 90vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextDiv = styled.div`
  padding: 10px;
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsTitleDiv = styled.div`
  padding: 10px;
  width: 90vw;
  overflow: wrap;
  text-align: center;
`;

const NewsTitle = styled.p`
  padding: 20px 0px 0px 10px;
  width: 90vw;
  text-align: center;
  font-size: 2.1em;
`;

const NewsContentDiv = styled.div`
  padding: 10px;
  width: 90vw;
  text-align: left;
  font-size: 1.2em;
`;

const NewsContent = styled.div`
  padding: 10px;
  width: 90vw;
`;

const NewsImageDiv = styled.div`
padding: 10px 0px 20px 0px
width: 90vw;
border: 1px solid black;
border-radius: 10px;
box-shadow: 5px 5px 5px #888888;
display: flex;
justify-content: center;
align-items: center;

`;

const NewsImage = styled.img`
  padding: 10px;
  width: 90vw;
`;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log("Fetching the latest news items");
    axios
      .get("https://adejord.co.uk/news") // Adjust URL as necessary
      .then((response) => {
        console.log("Response: ", response);
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news: ", error);
      });
  }, []);

  return (
    <Root>
      <NewsDiv>
        {news.length === 0 ? (
          <div>
            <h2>Server Issue</h2>
            <p>
              There is currently an issue with the server. This is outside of
              our control.
            </p>
            <p>Please check again later</p>
          </div>
        ) : (
          news.map((item) => (
            <div key={item.id}>
              <NewsTitleDiv>
                <NewsTitle>{item.title}</NewsTitle>
              </NewsTitleDiv>
              <NewsContentDiv>{item.content}</NewsContentDiv>
              <NewsImageDiv>
                <img
                  style={{
                    width: "80vw",
                    height: "auto",
                    padding: "10px",
                  }}
                  src={`https://adejord.co.uk${item.image_path}`}
                  alt={item.title}
                />
              </NewsImageDiv>
              <br />
              <p>{new Date(item.date).toLocaleDateString()}</p>
              <hr />
            </div>
          ))
        )}
      </NewsDiv>
    </Root>
  );
};

export default News;
