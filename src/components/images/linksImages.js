import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SiteImg = ({ altText, imgIndex, height }) => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "LINKS/backstagedancewear.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "LINKS/galveston.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "LINKS/EDAS.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "LINKS/mcballet_logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "LINKS/nili_design_small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "LINKS/SIBA_web_logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "LINKS/texasballettheater.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "LINKS/edasIsreal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "LINKS/leasonEllis.jpg" }) {
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
  const Img5 = () => (
    <Img
      fluid={data.img5.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img6 = () => (
    <Img
      fluid={data.img6.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img7 = () => (
    <Img
      fluid={data.img7.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img8 = () => (
    <Img
      fluid={data.img8.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img9 = () => (
    <Img
      fluid={data.img9.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]

  return <>{images[imgIndex]()}</>
}

export default SiteImg
