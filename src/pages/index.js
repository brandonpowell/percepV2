import React from "react" 

// important commpents
import Navbar from "../navbar"
import Footer from "../components/Footer"

// Section of the components
import SectionOne from "../components/section/SectionOne"
import SectionTwo from "../components/section/SectionTwo"
import SectionThree from "../components/section/SectionThree"
import SectionFour from "../components/section/SectionFour"

const Homepage = () => {

  return (
    <div id="content">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <div className="line"></div>
        <SectionThree />
        <div className="line"></div>
        <SectionFour/>
        <Footer />
    </div>
  )
}

export default Homepage