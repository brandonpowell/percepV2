import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Tag = ({ pageContext }) => {

  const data = useStaticQuery(graphql 
    `
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
  ` )
 
  const tag = pageContext?.tag
    const { edges = {}, totalCount = {} } = data?.allMarkdownRemark //Total count of tags being display
    //const { edges, totalCount } = data?.allMarkdownRemark
    //const { edges, totalCount } = data?.allMarkdownRemark || { }

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
        <ul>
            {edges?.map(({ node }) => {// Think what this doing map the tags
                const { slug } = node.fields // This is the slug or link for the tags
                const { title } = node.frontmatter // This is the site frontmatter but mostly markdown
                return (
                  <li key={data.slug}>
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