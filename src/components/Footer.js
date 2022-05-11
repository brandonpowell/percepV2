import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div
`
    footer {
        display: flex;
        margin: 0.4em;
        height: 30vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    address {
        text-align: center;

    }

    address p {
        font-size: 14px;
    }
`

function Layout() {
    return (
        <StyledLayout>
                <footer>
                    <div id="wcb" class="carbonbadge"></div>
                    <address>
                        <p>© 2020 Perception Works, LLC.</p>
                        <p>Making the world accessible & inclusive with perception works.</p>
                        <p>5557 Baltimore Ave, Hyattsville, MD 20781</p>
                        <p><a href="mailto:info@perception.works">info@perception.works</a></p>
                        <p><a href="240.390.6093">240.390.6093</a></p>
                    </address>
                </footer>
        </StyledLayout>
    )
}

export default Layout

//Need to need to be in the footer:
//---
//Making the world accessible with perception works.
//© 2020 Perception Works, LLC.
//5557 Baltimore Ave, Hyattsville, MD 20781
//240.390.6093
//info@perception.works


