import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"
import { GatsbyImage as CoverImage, getImage } from 'gatsby-plugin-image' // use the GatsbyImage but if you want to custom it.

const ArticleListing = ({ location, post }) => {
  const data = useStaticQuery(graphql // This is line 9. Where the same error message 
  `
    query MyQuery {
      allMarkdownRemark(
        limit: 1000, 
        sort: {
          fields: 
          frontmatter___date, order: ASC}) 
        {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            tag
            featuredimage
          }
        }
      }
    }
` )

const siteTitle = data.site?.siteMetadata?.title || ``
const posts = data.allMarkdownRemark.nodes 

if (post?.length === 0) { // is message tell us if there no post being display post this message
  return (
    <div id="content">
        <Layout location={location} title={siteTitle}>
          <Seo title="All posts" />
          <p>There were no blogs found. Our team is working hard to create content you will enjoy.</p>
        </Layout>
    </div>
  )
}

  return ( // This where you be rendering your post.
    <div id="content">
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        
        <Tag />
        
        <ol className="inline_blog" style={{ listStyle: `none` }}>
                {posts?.length > 0 && posts.map((post) => { // When is no post you will get this error message but when is post you will not get a error message.
                const title = post.frontmatter.title || post.fields.slug

                let image = getImage(post.frontmatter.featuredimage) // this is getting the post cover image
                let alt = post.frontmatter.title // this is getting the title of the post

                return (
                    <li key={post.fields.slug}>
                        <article
                            className="post-list-item"
                            itemScope
                            itemType="http://schema.org/Article">

                            <header>
                                <div className="cover_image">
                                    <CoverImage
                                        height="150"
                                        image={image}
                                        alt={alt}/>
                                </div>

                                <small>
                                    {post.frontmatter.date}
                                </small>

                                <h2 className="post_heading_title">
                                    <Link to={post.fields.slug} itemProp="url">
                                        <span
                                            itemProp="headline">
                                            {title}
                                        </span>
                                    </Link>
                                </h2>
                            </header>

                            <section>
                                <p dangerouslySetInnerHTML=
                                  {{   
                                    __html: post.frontmatter.description || post.excerpt, 
                                  }}
                                itemProp="description" />
                            </section>
                        </article>
                    </li>
                );
            })}
        </ol>
      </Layout>
    </div>
  )
}

export default ArticleListing 


// --- Todo List ---

// Work on the Tags.

// - When we click the tages it will shuffle through.
// - Shuffle through the post will show all the tages that has been select.
// - Will stay on that one-page without refreshing to another page.

// Create the Pager

// - The pager will display numbers to show how many pages our being display>
// - Ten will have arrow that last and next button.

//Blog Listing and Blog Post

// - Impoved the Style of the pages
// - Fixed the alignment of the post listing
// - Updated font with Google Fonts
// - Setup the CMS with Netlify



