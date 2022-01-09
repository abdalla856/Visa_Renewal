import React from 'react'
import './footerStyled.js'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./footerStyled";
    
const Footer = () => {
 return (
    <Box>
      <h1 style={{ color:"#8E8E9A", 
                   textAlign: "left", 
                   marginTop: "-50px" }}>
        Visa Renewal System 
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">UTM</FooterLink>
            <FooterLink href="#">ISC</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Visa Application</FooterLink>
            <FooterLink href="#">i-Kad Application</FooterLink>
            <FooterLink href="#">progress</FooterLink>
            {/* <FooterLink href="#">Teaching</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">CICT</FooterLink>
            <FooterLink href="#">UTM Digital</FooterLink>
            {/* <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <span style={{textAlign:"right"}}>CopyRight Abdalla7dad &copy;2021</span>
      </Container>
    </Box>
 
    )
}

export default Footer