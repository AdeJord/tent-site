import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import { Container, Header } from "../ComponentStyles";
import enterprise_plan from "../images/enterprise_plan.jpg";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eaf3e7;

  @media (max-width: 768px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px auto;
  }
`;

const BoatImage = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const ContentSection = styled.div`
  margin: 20px auto;
  max-width: 800px;
  line-height: 1.6;
  font-size: 1.2rem;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
    margin: 10px auto;
    text-align: left;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.2 rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;
    font-size: 1rem @media (max-width: 768px) {
      padding-left: 1.5rem;
    }
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const AddressSection = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

const AddressHeader = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
`;

const AddressText = styled.div`
  margin-left: 1rem;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
`;

const DownloadSection = styled.div`
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;
  }
`;

const DownloadLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: #4a6741;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  width: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }

  &:hover {
    background-color: #3d563b;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  overflow: hidden;
  background: white;
  padding: 10px;
  border-radius: 4px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 85vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #4a6741;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    background: #3d563b;
  }
`;

const TheEnterprise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageWrapper>
      <Header>THE ENTERPRISE</Header>

      <ImageContainer>
        <BoatImage
          src={enterprise_plan}
          alt="Enterprise Plan"
          onClick={() => setIsModalOpen(true)}
        />
      </ImageContainer>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <ModalImage src={enterprise_plan} alt="Enterprise Plan" />
          </ModalContent>
        </Modal>
      )}

      <ContentSection>
        <p>
          Narrowboat Enterprise is a 70 ft canal boat with ramps and a hydraulic
          passenger lift designed especially for carrying disabled passengers.
          It has:
        </p>

        <ul>
          <li>
            Seating for up to 12 passengers (which must include a minimum of 2
            leaders/staff)
          </li>
          <li>Large open front deck</li>
          <li>A small kitchen with small fridge & 2 gas burners</li>
          <li>A large open cabin fitted with deep picture windows</li>
          <li>Central heating</li>
          <li>Toilet</li>
          <li>Free hot & cold drinks provided</li>
          <li>A qualified skipper and crew member on every trip</li>
          <li>Secure parking at the boatyard</li>
        </ul>

        <p>
          We operate trips from Hatherton Marina to Coven for a fish & chip
          lunch or a meal at the Anchor pub, Coven. Alternatively you can bring
          your own food for lunch. A longer trip with a short stop will take you
          to Autherley Junction, but a pub meal is not available on this trip.
        </p>

        <p>
          We aim to provide affordable day trips on the canals for community
          groups and families with members who are elderly, disabled, have
          special needs or health issues.
        </p>

        <AddressSection>
          <AddressHeader>All trips start from:</AddressHeader>
          <AddressText>
            Hatherton Marina
            <br />
            Queen's Road
            <br />
            Calf Heath
            <br />
            Wolverhampton
            <br />
            WV10 7DT
          </AddressText>
        </AddressSection>

        <DownloadSection>
          <DownloadLink
            href="https://adejord.co.uk/uploads/docs/Insurance-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Insurance Certificate
          </DownloadLink>

          <DownloadLink
            href="https://adejord.co.uk/uploads/docs/Boat-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Boat Brochure
          </DownloadLink>
        </DownloadSection>
      </ContentSection>
    </PageWrapper>
  );
};

export default TheEnterprise;
