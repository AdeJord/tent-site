import React from "react";
import styled from "styled-components";
import '../App.css'
import imageLinksfo from "../components/imageLinksfo";
import imageLinksbca from "../components/imageLinksbca"
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';
import ImageGallery from 'react-image-gallery';
import { Container, Header } from '../ComponentStyles'


const images = imageLinksfo
const imagesbca = imageLinksbca

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
`


const Gallery = () => {
  return (
    <Container>
    <Header>
      Gallery
      </Header>
      
      <ImgContainer>
      <ImageGallery items={images}/>

      </ImgContainer>
    </Container>
  );
};

export default Gallery;
