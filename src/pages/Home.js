import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NiceBoatPic from "../images/NiceBoatPic.jpg";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import { Container, TextContainer, Header } from "../ComponentStyles";
import axios from "axios";
import { set } from "date-fns";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
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
  width: 30vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsTitleDiv = styled.div`
  padding: 10px;
  width: 90vw;
`;

const NewsContentDiv = styled.div` 
  padding: 10px;
  width: 90vw;
`;

const NewsImageDiv = styled.div`
  padding: 10px;
  width: 90vw;
`;


const Home = () => {
  const url = "adejord.co.uk/getAllNews";
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setNews(response.data);
    });
  }, []);

  return (
    <Container>
      <div>
        <ImgContainer>
          <img
            src={NiceBoatPic}
            style={{ width: "100%", height: "100%" }}
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
              Equipped with a lift and accessible toilet facilities we can take
              up to 2 wheelchair users and up to 10 other passengers (12 in
              total). With full use of our kitchen facilities. Feel free to make
              your own tea and coffee, (coffee, tea, milk, sugar and some soft
              drinks are provided). You can either bring your own sandwiches,
              order fish and chips, or have a drink and a meal at the pub.
            </TextContainer>
            <TextContainer>
              Our trips usually last between 4 and 8 hours. What time we leave
              and what time we return is up to you. Run entirley by volunteers,
              our only aim to give you an enjoyable and memorable day out on the
              canal.
            </TextContainer>
          </TextDiv>
          <NewsDiv>
          <NewsTitleDiv>
            <h2>Latest News</h2>
          </NewsTitleDiv>
          <NewsContentDiv>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </NewsContentDiv>
          <NewsImageDiv>
            <img src={news.image} alt="News Image" />
          </NewsImageDiv>
          </NewsDiv>
        </TextAndNewsDiv>
        <Header>Many Thanks to</Header>
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
      </div>
      <Header>For your support.</Header>
    </Container>
  );
};

export default Home;
