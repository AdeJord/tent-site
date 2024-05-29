// a page similar to other that fetches all the news from adejord.co.uk/news and renders all items.
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Root } from "../styles";
import styled from "styled-components";

// const ImgContainer = styled.div`
//   display: flex;
//   width: 90vw;
//   justify-content: center;
//   padding-top: 20px;
// `;

// const TextAndNewsDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   padding: 10px;
//   width: 90vw;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const TextDiv = styled.div`
//   padding: 10px;
//   width: 60vw;

//   @media (max-width: 768px) {
//     width: 90vw;
//   }
// `;

const NewsDiv = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 480px) {
    width: 95vw;
  }
`;

const NewsTitleDiv = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 70vw;
  overflow-wrap: break-word;
  text-align: center;
  margin: 0 auto;
  font-size: 1.3em;

  @media (max-width: 1024px) {
    width: 75vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const NewsTitle = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const NewsContentDiv = styled.div`
  padding: 10px;
  width: 90%;
  font-family: "roboto, sans-serif";
  text-align: left;
  font-size: 1.3em;

  @media (max-width: 1024px) {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) { 
    font-size: 1em;
  }
`;

const NewsContent = styled.div`
  padding: 10px;
  width: 90vw;

  @media (max-width: 480px) {
    width: 95vw;
  }
`;

const NewsImageDiv = styled.div`
  width: 95%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #888888;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const NewsImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
`;


const News = () => {
  const [news, setNews] = useState([]);

  // Function to convert file system path to web URL path
  function toWebPath(internalPath) {
    if (!internalPath) return "";
    // Assuming your internal path starts with /var/www
    return internalPath.replace("/var/www", "");
  }

  useEffect(() => {
    console.log("Fetching the latest news items");
    axios
      .get("https://adejord.co.uk/news")
      .then((response) => {
        console.log("Response: ", response);
        setNews(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error fetching news: ", error);
      });
  }, []);

  return (
    <Root
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "30px",
        boxSizing: "border-box",
      }}
    >
      <NewsDiv>
        {news.length === 0 ? (
          <div>
            <h2>Server Issue</h2>
            <p>
              There is currently an issue with the server. Unfortunately, this
              is outside of our control.
            </p>
            <p>Please check again later</p>
          </div>
        ) : (
          news
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => (
              <div key={item.id}>
                <NewsTitleDiv>
                  <NewsTitle>{item.title}</NewsTitle>
                </NewsTitleDiv>
                <NewsContentDiv>{item.content}</NewsContentDiv>
                <NewsImageDiv>
                  {item.image_path && (
                    <NewsImage
                      src={`https://adejord.co.uk${toWebPath(item.image_path)}`}
                      alt={item.title}
                    />
                  )}
                </NewsImageDiv>

                <br />
                <p>
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    timeZone: "Europe/London",
                  })}
                </p>
                <hr />
              </div>
            ))
        )}
      </NewsDiv>
    </Root>
  );
};

export default News;
