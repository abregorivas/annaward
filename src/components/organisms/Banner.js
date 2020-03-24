import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import AppBar from "@material-ui/core/AppBar"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))

export const Banner = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "annaward_ballet_image.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </AppBar>
  )
}
