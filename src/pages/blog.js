import React from "react";
import Link from "gatsby-link";

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges: posts } } = data;
  // const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      {posts.map(post => {
        const { node: { id } } = post;
        // const id = post.node.id;
        const { node: { frontmatter: { title, path, date } } } = post;
        // const title = post.node.frontmatter.title;
        // const path = post.node.frontmatter.path;

        return (
          <li className="blog-post-item" key={id}>
            <Link to={path}>
              {title} - {date}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export const allPostQuery = graphql`
  query AllBlogs {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

export default BlogPage;
