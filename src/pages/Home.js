import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NiceBoatPic from "../images/NiceBoatPic.jpg";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import { Link } from "react-router-dom";
import { Container, TextContainer, Header } from "../ComponentStyles";
import { Root } from "../styles";
import axios from "axios";

const ImgContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding-top: 3em;

  @media (max-width: 768px) { 
    padding-top: 1em;
`;

const TextAndNewsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box; 
  width: 100%;

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
  width: 40vw;
  height: 60vh;
  overflow: hidden; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const NewsTitleDiv = styled.div`
  padding: 10px;
  width: auto;
  font-size: 1.3em;
  text-align: center;
  overflow: wrap;
`;

const NewsContentDiv = styled.div`
  padding: 20px;
  width: auto;
  text-align: left;
  font-size: 0.9em;
  overflow: wrap;
  box-sizing: border-box; // Include padding in the width calculation

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsImageDiv = styled.div`
  width: 100%; 
  padding: 10px;
  
  box-sizing: border-box; // Include padding in the width calculation
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NewsImage = styled.img`
  max-width: 100%; 
  height: auto; 
  object-fit: contain; 
  box-sizing: border-box; 
  padding: 0;
  
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 5; 
  background-color: #eaf3e7;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  padding: 10px 0;
`;

const Home = () => {
  const [news, setNews] = useState([]);

  // Function to convert file system path to web URL path
  function toWebPath(internalPath) {
    if (!internalPath) return "";
    // Assuming your internal path starts with /var/www
    return internalPath.replace("/var/www", "");
  }

  useEffect(() => {
    axios
      .get("https://adejord.co.uk/getLatestNews") // Adjust URL as necessary
      .then((response) => {
        console.log("API Response:", response.data); // Log the API response data
        setNews(response.data); // Set the newsItems state to the fetched data
      })
      .catch((error) => {
        console.error("Error fetching news items:", error.message);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error status", error.response.status);
          console.error("Error data", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
        console.error(error.config);
      });
  }, []);

  return (
    <Root>
      <Container>
          <ImgContainer>
            <img
              src={NiceBoatPic}
              style={{
                maxWidth: "80%", // Ensures the image scales down if it's too wide
                height: "auto", // Maintains the aspect ratio of the image
                display: "block",
                borderRadius: "5px", // Ensures the image is treated as a block-level element to take effect of centering
              }}
              alt="Nice Boat Pic"
            />
          </ImgContainer>

          <h4 style={{ padding: "15px", textAlign: "center" }}>
            Providing day trips for elderly, disabled, youth & community groups,
            and families on the Staffs and Worcester Canal.
          </h4>
          <hr style={{ width: "90vw" }} />
          <TextAndNewsDiv>
            <TextDiv>
              <TextContainer>
                Starting from Hatherton Marina (Near Cannock), we offer fully
                accessible day trips on the 'Enterprise' to either Autherley
                Junction (Near Oxley) or The Anchor Inn, (Coven) where you can
                enjoy some of the beautiful scenery of the Staffordshire and
                Worcester canal.
              </TextContainer>
              <TextContainer>
                Equipped with a lift and accessible toilet facilities we can
                take up to 2 wheelchair users and up to 10 other passengers (12
                in total). With full use of our kitchen facilities. Feel free to
                make your own tea and coffee, (coffee, tea, hot chocolate, milk, sugar and some
                soft drinks are provided). You can either bring your own
                sandwiches, order fish and chips, or have a drink and a meal at
                the pub.
              </TextContainer>
              <TextContainer>
                Our trips usually last between 4 and 8 hours. What time we leave
                and what time we return is up to you. Run entirley by
                volunteers, our only aim to give you an enjoyable and memorable
                day out on the canal.
              </TextContainer>
            </TextDiv>
            <hr />

            <NewsDiv>
              <Link
                to="/News"
                style={{
                  // display: "block",
                  width: "100%",
                  height: "auto",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ textAlign: "center", width: "100%" }}>
                  {" "}
                  {/* Ensuring content is centered */}
                  <StickyHeader>Latest News</StickyHeader>
                  {news.length === 0 ? (
                    <NewsContentDiv>
                      <h2>Server Issue</h2>
                      <p>
                        There is currently an issue with the server. This is
                        outside of our control.
                      </p>
                      <p>Please check again later</p>
                    </NewsContentDiv>
                  ) : (
                    news.map((item) => (
                      <div key={item.id}>
                        <NewsTitleDiv>{item.title}</NewsTitleDiv>
                        <NewsContentDiv>{item.content}</NewsContentDiv>
                        <NewsImageDiv>
                          <NewsImage
                            src={`https://adejord.co.uk${toWebPath(
                              item.image_path
                            )}`}
                            alt={item.title}
                          />
                          <br />
                        </NewsImageDiv>
                        <p style={{ paddingLeft: "10px", boxSizing: 'border-box' }}>
                          {new Date(item.date).toLocaleDateString("en-GB", {
                            timeZone: "Europe/London",
                          })}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </Link>
            </NewsDiv>
          </TextAndNewsDiv>

          <Header>With Many Thanks to</Header>
          <ImgContainer>
            <img
              src="https://www.truman-enterprise.org.uk/photos/2019lotlog.jpg"
              alt="National Lottery Community Fund"
              style={{ width: "30vw", padding: "20px", height: "auto" }}
            />
            <img
              src="https://www.truman-enterprise.org.uk/graphics/co-op_logo.gif"
              alt="The Midlands Co-operative"
              style={{
                width: "30vw",
                marginTop: "30px",
                padding: "20px",
                height: "7vw",
              }}
            />
          </ImgContainer>
          <ImgContainer>
            <img
              src="https://www.truman-enterprise.org.uk/graphics/crtlogo.jpg"
              alt="Canal & River Trust"
              style={{ width: "30vw", padding: "20px", height: "auto" }}
            />
            <img
              src="https://www.truman-enterprise.org.uk/graphics/HOE%20Logo.jpg"
              alt="Heart of England"
              style={{ width: "30vw", padding: "20px", height: "auto" }}
            />
          </ImgContainer>
        <Header>For your support.</Header>
      </Container>
    </Root>
  );
};

export default Home;
