import React from "react";
import styled from "styled-components";
import '../App.css'
import imageLinksfo from "../components/imageLinksfo";
import imageLinksbca from "../components/imageLinksbca"
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';
import ImageGallery from 'react-image-gallery';


const images = imageLinksfo
const imagesbca = imageLinksbca

const Container = styled.section`
// background: red;
display: flex;
flex-direction: column;
justify-content: flex-start;
min-height: 75.5vh;
align-items: center;
overflow: hidden;
`

const ImgContainer = styled.div`
// background: blue;
object-fit: cover;
position: relative;
display: flex;
height: 100%;
width: auto;
flex-direction: column;
align-items: center;
overflow: hidden;
`


const Gallery = () => {
  return (
    <Container>
    <div className = "page-title">
      Gallery
      </div>
      
      <ImgContainer>
      <ImageGallery items={imagesbca} />

      </ImgContainer>
    </Container>
  );
};

export default Gallery;
