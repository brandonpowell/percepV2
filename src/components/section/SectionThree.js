import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`

    .banner {
        margin: 100px 0;
        font-size: 16pt;
        text-align: center;
    }
    .banner p {
        text-align: center;
        margin-bottom: 25px;
        line-height: normal;
    }

    .banner a {
        text-decoration: underline;
    }
`

function Layout() {
    return (
        <StyledLayout>
          <div className="banner">
                <p>When you become a customer of Perception Works you’ll join our loyal network of purpose led businesses, 
                global corporates and non-profits who are all working to use organization as a force for social good.</p>
                <a href="https://forms.clickup.com/36091081/p/f/12dd69-640/287AQJ4EFC982288HK/customers-form">become a client</a>
          </div>
        </StyledLayout>
    )
}

export default Layout