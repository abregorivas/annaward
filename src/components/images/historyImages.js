import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SiteImg = ({ altText, imgIndex, height }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "HISTORY/krassovska184.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "HISTORY/KrassovskaSEYMOUR.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "HISTORY/krassovskaSigned.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "HISTORY/nathalie_anna_flowers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Img1 = () => (
    <Img
      fluid={data.img1.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2 = () => (
    <Img
      fluid={data.img2.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3 = () => (
    <Img
      fluid={data.img3.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img4 = () => (
    <Img
      fluid={data.img4.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )

  //   const Img11 = () => (
  //     <Img fluid={data.img10.childImageSharp.fluid} style={{ height: `${height}px`}} alt={altText}/>
  //   )
  const images = [Img1, Img2, Img3, Img4]

  return <>{images[imgIndex]()}</>
}

export default SiteImg
