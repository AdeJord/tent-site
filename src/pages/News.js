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
  align-items: center;
  justify-content: center;
  // background-color: red;
  width: 100%;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

// TODO NEED THIS IN CENTER
const NewsTitleDiv = styled.div`
  padding: 10px;
  padding-top: 20px;
  width: 90vw;  // This ensures it matches the width it's supposed to center within
  overflow-wrap: break-word; // Changed from 'wrap' which is not a valid value
  text-align: center;
  margin: 0 auto;  // Ensures it centers within its parent if not filling the width
`;


const NewsTitle = styled.p`
  margin: 0;  // Remove any default margins that might affect centering
  padding-top: 20px; // Keep vertical padding if needed
  width: 100%;  // Ensure it spans the width of its container
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
  // background-color: blue;
  // padding: 10px 0px 20px 0px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #888888;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const NewsImage = styled.img`
  padding: 10px;
  width: 100%; /* This makes the image scale with its container */
  height: auto;
`;


const News = () => {
  const [news, setNews] = useState([]);

  // Function to convert file system path to web URL path
function toWebPath(internalPath) {
  if (!internalPath) return '';
  // Assuming your internal path starts with /var/www
  return internalPath.replace('/var/www', '');
}

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
              There is currently an issue with the server. Unfortunately this is outside of our control.
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
                {item.image_path && (
                  <NewsImage
                    src={`https://adejord.co.uk${toWebPath(item.image_path)}`}
                    alt={item.title}
                  />
                )}
              </NewsImageDiv>

              <br />
              <p>{new Date(item.date).toLocaleDateString('en-GB', { timeZone: 'Europe/London' })}</p>
              <hr />
            </div>
          ))
        )}
      </NewsDiv>
    </Root>
  );
};

export default News;
