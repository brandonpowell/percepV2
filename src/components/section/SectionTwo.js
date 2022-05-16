import React from "react"
import styled from "styled-components"

// Logo 

import DAL from "../../images/day-legacy.svg" // ../../images/
import SBR from "../../images/shadebyranda.svg" // ../../images/
import HFC from "../../images/huntforcareer.svg" // ../../images/

// Social Media

import Accessible from "../../images/icons/accessibe-logo.svg" // ../../images/icons/
import Twitter from "../../images/icons/twitter.svg" // ../../images/icons/
import Facebook from "../../images/icons/facebook.svg" // ../../images/icons/
import Linkedin from "../../images/icons/linkedin.svg" // ../../images/icons/
import Dribbble from "../../images/icons/dribbble.svg" // ../../images/icons/
import Instagram from "../../images/icons/instagram.svg" 

// Plugin
// import { StaticImage } from "gatsby-plugin-image"
// import GlobalStyle from "./globalStyle"
// import Footer from "./footer"

const StyledLayout = styled.div`

  span {
      color: #F1F2F6;
      font-size: 15pt;
  }

  h3 {
      text-align: center;
      letter-spacing: 0.01em;
      font-variant: small-caps;
      color: #F1F2F6;

  }

  h6 {
      font-size: 18pt;
      margin: 18px 0;
      color:  #A9A9A9;
  }

  .clients {
    display: flex;
    margin-bottom: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }

  .services {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
  }

  services p {
    font-size: 14px;
  }

  .services .one {
    width: 100%;
    margin-right: 35px;
    max-width: 313px;
  }

  .services .two {
      display: flex;
  }

  .services p {
    font-size: 12pt;
    line-height: 24px;
    padding-bottom: 1.5em;
  }

  .border {
    border: 1px solid #A9A9A9;
    padding: 26px 25px;
    box-sizing: border-box;
  }

  .inline {
    display: flex;
    flex-direction: column;
    max-width: 235px;
    width: 100%;
  }

  .services .line {
    background-color: #F1F2F6;
    margin: 0px 38px;
    width: 1px;
    height: auto;
  }

  button {
    width: 100%;
    padding: 19px 26px;
    background: #4B43E9;
    color: white;
    border: none;
    font-weight: 800;
    font-size: 14pt;
  }

  .access {
    margin-top: 20px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4B43E9;
    width: 364.75px;
    padding: 15px 0;
    margin-top: 35px;
  }

  .social h5 {
    font-size: 13pt !important;
    margin-right: 20px !important;
    line-height: normal !important;
    width: 100%;
    max-width: 93px;
  }

  .social .social-list a {
    padding: 0 4px;
  } 

  .inline-social {
    display: flex;
  }

  .social-list img {
    width: 25px;
  }

  .course button {
    margin-bottom: 19px;
  }
`

function Layout() {
    return (
        <StyledLayout>
              <h3>past clients</h3>

              <div className="clients">
                  <li>
                    <img
                        src={DAL}
                        alt="Day Legacy Logo Concept"
                        className="max-auto client-logo"
                    />
                  </li>
                    <span>x</span>
                  <li>
                    <img
                        src={SBR}
                        alt="Shade by Randa Logo Concept"
                        className="max-auto client-logo"
                    />
                  </li>
                    <span>x</span>
                  <li>
                    <img
                        src={HFC}
                        alt="Hunt For Careers Logo Concept"
                        className="max-auto client-logo"
                    />
                  </li>
              </div>

              <div className="services">
                  <div className="border one">
                      <h4>Consulting Services</h4>
                      <h5>Perception Works</h5>
                      <p>We offer consulting services in design, development, media, marketing, and technology.</p>
                      <p>Creating meaningful experiences for your customers starts with improving your website and apps.</p>
                      <h6>Partnership With:</h6>
                      <div className="access">
                        <img
                          src={Accessible}
                          alt="Accessible Our Partner Logo"
                          className="max-auto client-logo"
                        />
                      </div>
                  </div>
              <div className="">
              <div className="border two">
                    <div className="inline">
                        <div>
                            <h4>Pilot Program</h4>
                            <h5>Perception School</h5>
                            <p>Our ecosystem enables us not to think small, but crazy small, as we train individuals to grow small businesses into startups.</p>
                            <p>Businesses will benefit from our coaches' expertise in business, design, marketing and media.</p>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="inline">
                        <div>
                            <p>we have created our first course to help business owners with understand accessibility.</p>
                            <p>how to reach a uptapped market within world of accessibility?</p>
                        </div>
                            <button>Webinar Soon</button>
                            <p>Scroll down to subscribe to our newsletter. To keep updated.</p>
                    </div>
              </div>

              <div className="inline-social">
              <div className="background social">
                  <h5>Follow us for updated</h5>
                  <div className="social-list">
                    <a href="https://twitter.com/perceptionworks">
                      <img
                        src={Twitter}
                        alt="Twitter Icon"
                        className="max-auto social-logo"
                        placeholder="blurred"
                      />
                    </a>

                    <a href="https://www.facebook.com/perception.works">
                      <img
                        src={Facebook}
                        alt="Facebook Icon"
                        className="max-auto social-logo"
                      />
                     </a>

                    <a href="https://www.linkedin.com/company/perception-works/">
                      <img 
                        src={Linkedin}
                        alt="Linkedin Icon"
                        className="max-auto social-logo"
                      />
                    </a>

                    <a href="https://dribbble.com/perceptionworks">
                      <img
                        src={Dribbble}
                        alt="Dribbble Icon"
                        placeholder="blurred"
                        className="max-auto social-logo"
                      />
                    </a>

                    <a href="https://www.instagram.com/perception.works/">
                      <img
                        src={Instagram}
                        alt="Instagram Icon"
                        className="max-auto social-logo"
                      />
                    </a>
                  </div>
                  </div>

                  <div 
                    class="clutch-widget" 
                    data-nofollow="true" 
                    data-url="https://widget.clutch.co" 
                    data-widget-type="14" 
                    data-height="50" 
                    data-clutchcompany-id="1473869">
                  </div>
                </div>
              </div>
            </div>
        </StyledLayout>
    )
}

export default Layout