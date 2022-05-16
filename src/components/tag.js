import React from "react"
import { Link, graphql } from "gatsby"

const Tag = ({ pageContext, data }) => {

  const tag = pageContext?.tag
  const { edges = {}, totalCount = {} } = data?.allMarkdownRemark
  //const { edges, totalCount } = data?.allMarkdownRemark || { }
 
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
        <ul>
            {edges?.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
            return (
                <li key={slug}>
                    <h2>Topic Tages:</h2>
                    <Link to={slug}>{title}</Link>
                </li>
            )
            })}
        </ul>
    </div>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagQuery {
    tagsGroup: allMarkdownRemark(
        limit: 2000, 
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
          }
        }
        group(field: frontmatter___tag) {
            totalCount
            fieldValue
        }
      }
    } 
`