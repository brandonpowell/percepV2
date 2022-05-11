import * as React from "react"
import Navbar from "../navbar"
import Helmet from "../components/Helmet"
import ArticleListing from "../templates/ArticleListing"
import SectionThree from "../components/section/SectionThree"
import SectionFour from "../components/section/SectionFour"
import Footer from "../components/Footer"


const BlogIndex = () => {

  return ( // This where you be rendering your post.

    <div id="content">
      <Helmet />
      <Navbar />
      <ArticleListing />
      {/* // this is where the Pager will live */}
      <div className="line"></div>
      <SectionThree/>
      <div className="line"></div>
      <SectionFour />
      <Footer />
    </div>

  )
}

export default BlogIndex

// Asking see if developer have create or figure How to do something like this with tags.

// 1. Create this tags within .md file
// 2. This tags will be display on the blog listing page on the top showing all different tags topics.
// 3. When you click on one of the tags topic it will shuffle throught the post
// 4. Show tags that has been selected and tags will be on top of the image.

// The post on Stack Overflow shows how this will look at the end of the process. Please let me know if anyone has done this before and where I can begin to get close to the final assignment. Just a starting point don't show me the end 
// https://stackoverflow.com/questions/71442544/adding-tags-that-shuffle-through-post


// Create the Pager component? 
// Create the Tags  component?