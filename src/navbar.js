import React from "react"
import styled from "styled-components"
import "../src/css/layout.css"
// import GlobalStyle from "./globalStyle"
// import Footer from "./footer"

const StyledLayout = styled.div`
    nav {
        display: flex;
        padding: 22px 0px;
        justify-content: space-between;
    }

    nav li {
        font-size: 13pt;
    }
`

function Navbar() {
    return (
        <StyledLayout>
                <nav>
                    <div className="Logo">
                        <span></span>
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="240.390.6093">240.390.6093</a></li>
                    </ul>
                </nav>
        </StyledLayout>
    )
}

export default Navbar