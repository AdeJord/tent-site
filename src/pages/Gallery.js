import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import ImageGallery from "react-image-gallery";
import { Container } from "../ComponentStyles";
import axios from "axios";

const ImgContainer = styled.div`
  object-fit: cover;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .image-gallery-slide img {
    width: 100%;
    height: auto;
  }

  .image-gallery-thumbnail img {
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    .image-gallery-slide img {
      max-height: 80vh;
    }

    .image-gallery-thumbnail {
      width: 150px;
      height: 100px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .image-gallery-slide img {
      max-height: 60vh;
    }

    .image-gallery-thumbnail {
      width: 120px;
      height: 80px;
    }
  }

  @media (max-width: 767px) {
    .image-gallery-slide img {
      max-height: 60vh; /* Increase the height for mobile */
    }

    .image-gallery-thumbnail {
      width: 120px; /* Increase the width for mobile */
      height: 80px; /* Increase the height for mobile */
    }
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([]);

  // get images from the database
  const getImages = async () => {
    try {
      console.log("getting images");
      const response = await axios.get("https://adejord.co.uk/galleryImages");
      console.log(response.data);

      // Format the images for react-image-gallery
      const formattedImages = response.data.map((img) => ({
        original: img.file_path,
        thumbnail: img.file_path,
      }));

      setImages(formattedImages);
      console.log(formattedImages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container
    style={{
      // paddingTop: "0px",
      paddingBottom: "60px",
      // height: "50vh"
    }}
    >
      <div
      style={{
        width: "2000px",
      }}
      >
      {/* <Header>Gallery</Header> */}
      {images.length > 0 ? (
        <ImgContainer>
          <ImageGallery 
          // originalHeight="100vh"
          // sizes="100vh"
          loading="lazy"
          items={images} />
        </ImgContainer>
      ) : (
        <p>This is currently being worked on...</p>
      )}
      </div>
    </Container>
  );
};

export default Gallery;
