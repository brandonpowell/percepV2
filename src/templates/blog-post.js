import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Navbar from "../navbar"
import Helmet from "../components/Helmet"

import SectionThree from "../components/section/SectionThree"
import SectionFour from "../components/section/SectionFour"
import Footer from "../components/Footer"

import ShareButtons from "../components/social-media-share-buttons"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || ``
  const { previous, next } = data
  
  return (
    <div id="content">
      <Navbar />
      <Helmet />

     
      <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
      </header>

    
      <div className="inline">
          <ShareButtons />
          <div className="blogcontent">
          <Layout location={location} title={siteTitle}>
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          /> 

          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >

            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="articleBody"
            />
            <hr />
            <footer>
              <Bio />
            </footer>
          </article>

          
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Layout>
        <div className="line"></div>
        <SectionThree/>
        <div className="line"></div>
        <SectionFour />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql(
`
  {
    allMarkdownRemark(
      limit: 1000, 
      sort: {
        fields: 
        frontmatter___date, 
        order: ASC
      }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tag
          featuredimage {
            childImageSharp {
              gatsbyImageData(
                width: 500
                blurredOptions: {width: 100}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
                aspectRatio: 0.7
              )
            }
          }
        }
      }
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
      }
    }
  }  
`)
