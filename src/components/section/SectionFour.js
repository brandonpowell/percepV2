import React from "react"
import styled from "styled-components"
import FormNewsletter from "../FormNewsletter"

const StyledLayout = styled.div`

    .banner {
        margin: 50px auto;
        max-width: 620px;
        width: 100%;
        font-size: 16pt;
        text-align: center;
    }
    .banner p {
        text-align: center;
        margin-bottom: 25px;
        font-size: 17pt;
        line-height: normal;
    }

    .banner a {
        text-decoration: underline;
    }

    .newsletter_banner {
        background-color: #4B43E9;
        padding: 50px 0px;
    }

    .newsletter {
        display: flex;
        max-width: 783px;
        margin: 0 auto;
        width: 100%;
        font-size: 18pt;
    }

    .newsletter p {
        max-width: 357px;
        line-height: 141.69%;
        width: 100%;
        margin: 0 auto;
    }

    form input {
        padding: 20px 37px;
        border: none;
        font-size: 18px;
    }

    form button {
        padding: 20px 38px;
        color: #F1F2F6;
        font-size: 18px;
        font-weight: bold;
        background-color: #011126;
    }
`



function Layout() {

     return (
        <StyledLayout>
            <div className="newsletter_banner">
                <div className="newsletter">
                    <p>
                        Keep up to date with what's happening at Perception Works.
                    </p>

                    <div className="form">
                        <FormNewsletter />
                    </div>
                </div>
            </div>
        </StyledLayout>
    )
}

export default Layout