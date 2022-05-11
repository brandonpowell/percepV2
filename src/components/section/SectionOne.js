import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"


const StyledLayout = styled.div`
  #content {
    padding: 0px;
    max-width: 937px;
    font-size: 32pt;
    width: 100%;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .hero {
    display: flex;
    height: 70vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .middle {
    width: 100%;
    font-size: 18pt;
    max-width: 500px;;
    text-align: center;
    padding: 30px 0;
    margin: 0 auto;
    line-height: normal;
  }

  .social_link {
    font-size: 18pt;
    text-align: center;
  }

  .company-logo {
    padding: 1em 0;
  }

  .certification {
    margin: 35px 0;
  }
`

function Layout() {
    
    return (
        <StyledLayout>
          <div className="hero">
            <StaticImage 
                src="../../images/icons/PW-logo.png"
                alt="Perception Works Logo Concept"
                className="max-auto company-logo"
            />
            <h1>
              perception works is on a mission, but if you want to 
                <a href="https://docs.google.com/presentation/d/1V3i3K0rp7a5vZk8knBcjuq9T-kzf97u6ieZ5f7h_uPk/edit?usp=sharing" > see our projects </a> or 
                <a href="https://forms.clickup.com/36091081/p/f/12dd69-640/287AQJ4EFC982288HK/customers-form"> work with us</a>, please contact us.
            </h1>

            <div className="middle">
              <p>Regardless of where we go, inclusiveness and accessibility will always be on our minds.</p>
            </div>

            <div className="social_link">
              <a href="https://instagram.com/perception.works">@perceptionworks</a>
            </div>

                <div className="certification">
                    <StaticImage 
                        src="../../images/dobe-logo.png"
                        alt="DisabilityIN Logo Concept"
                        width={300}
                        className="max-auto certification-logo"
                    />
                </div>
            </div>
        </StyledLayout>
    )
}

export default Layout
