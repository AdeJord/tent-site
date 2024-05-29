import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import imageLinksfo from "../components/imageLinksfo";
import imageLinksbca from "../components/imageLinksbca";
import { render } from "react-dom";
import ResponsiveGallery from "react-responsive-gallery";
import ImageGallery from "react-image-gallery";
import { Container, Header } from "../ComponentStyles";
import axios from "axios";
import { set } from "react-hook-form";

const images = imageLinksfo;
const imagesbca = imageLinksbca;

const ImgContainer = styled.div`
  // background: blue;
  object-fit: cover;
  // position: relative;
  display: flex;
  height: auto;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Gallery = () => {
  const [images, setImages] = useState([]);

  // get images from the database
  const getImages = async () => {
    try {
      const response = await axios.get("adejord.co.uk/gallery");
      console.log(response.data);
      setImages(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
    setImages(images);
  }, []);

  return (
    <Container>
      <Header>Gallery</Header>
      {images.length > 0 ? (
        <ImgContainer>
          <ImageGallery items={images} />
        </ImgContainer>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Gallery;
