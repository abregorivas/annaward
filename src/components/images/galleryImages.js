import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const SiteImg = ({ altText, imgIndex, height }) => {
  const data = useStaticQuery(graphql`
    query {
      img1_19: file(relativePath: { eq: "GALLERY/2019/STOLEN-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_19: file(relativePath: { eq: "GALLERY/2019/STOLEN-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_19: file(relativePath: { eq: "GALLERY/2019/STOLEN-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1_15: file(relativePath: { eq: "GALLERY/2015/CBD-YOUTH-BALLET.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_15: file(
        relativePath: { eq: "GALLERY/2015/THE-BEAUTY-WAY-02.JPG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_15: file(relativePath: { eq: "GALLERY/2015/THE-BEAUTY-WAY.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1_13: file(
        relativePath: {
          eq: "GALLERY/2013/20795_4822336481624_1647805304_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_13: file(
        relativePath: {
          eq: "GALLERY/2013/149046_4822327601402_540621340_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_13: file(
        relativePath: {
          eq: "GALLERY/2013/532284_441319492621319_1057578685_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4_13: file(
        relativePath: {
          eq: "GALLERY/2013/560217_432443626836436_60241146_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1_12: file(
        relativePath: {
          eq: "GALLERY/2012/423316_2678401199041_1226585562_32077625_1961865363_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_12: file(
        relativePath: {
          eq: "GALLERY/2012/395888_2678940532524_1226585562_32077751_1678922283_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_12: file(
        relativePath: {
          eq: "GALLERY/2012/426292_10151352116010430_750400429_23415407_192663436_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4_12: file(
        relativePath: {
          eq: "GALLERY/2012/189215_108722359208566_5489347_n.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1_11: file(relativePath: { eq: "GALLERY/2011/01giselle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_11: file(relativePath: { eq: "GALLERY/2011/09giselle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_11: file(relativePath: { eq: "GALLERY/2011/2011_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4_11: file(relativePath: { eq: "GALLERY/2011/2011_3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1_09: file(relativePath: { eq: "GALLERY/2009/_054.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2_09: file(relativePath: { eq: "GALLERY/2009/_056.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3_09: file(relativePath: { eq: "GALLERY/2009/_058.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4_09: file(relativePath: { eq: "GALLERY/2009/_061.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5_09: file(relativePath: { eq: "GALLERY/2009/0310m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6_09: file(relativePath: { eq: "GALLERY/2009/0311m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7_09: file(relativePath: { eq: "GALLERY/2009/0312m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8_09: file(relativePath: { eq: "GALLERY/2009/R111m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9_09: file(relativePath: { eq: "GALLERY/2009/R112m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10_09: file(relativePath: { eq: "GALLERY/2009/R113m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img11_09: file(relativePath: { eq: "GALLERY/2009/R114m.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Img1_19 = () => (
    <Img
      fluid={data.img1_19.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_19 = () => (
    <Img
      fluid={data.img2_19.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_19 = () => (
    <Img
      fluid={data.img3_19.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img1_15 = () => (
    <Img
      fluid={data.img1_15.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_15 = () => (
    <Img
      fluid={data.img2_15.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_15 = () => (
    <Img
      fluid={data.img3_15.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img1_13 = () => (
    <Img
      fluid={data.img1_13.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_13 = () => (
    <Img
      fluid={data.img2_13.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_13 = () => (
    <Img
      fluid={data.img3_13.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img4_13 = () => (
    <Img
      fluid={data.img4_13.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img1_12 = () => (
    <Img
      fluid={data.img1_12.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_12 = () => (
    <Img
      fluid={data.img2_12.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_12 = () => (
    <Img
      fluid={data.img3_12.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img4_12 = () => (
    <Img
      fluid={data.img4_12.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img1_11 = () => (
    <Img
      fluid={data.img1_11.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_11 = () => (
    <Img
      fluid={data.img2_11.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_11 = () => (
    <Img
      fluid={data.img3_11.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img4_11 = () => (
    <Img
      fluid={data.img4_11.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img1_09 = () => (
    <Img
      fluid={data.img1_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img2_09 = () => (
    <Img
      fluid={data.img2_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img3_09 = () => (
    <Img
      fluid={data.img3_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img4_09 = () => (
    <Img
      fluid={data.img4_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img5_09 = () => (
    <Img
      fluid={data.img5_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img6_09 = () => (
    <Img
      fluid={data.img6_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img7_09 = () => (
    <Img
      fluid={data.img7_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img8_09 = () => (
    <Img
      fluid={data.img8_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img9_09 = () => (
    <Img
      fluid={data.img4_11.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img10_09 = () => (
    <Img
      fluid={data.img10_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )
  const Img11_09 = () => (
    <Img
      fluid={data.img11_09.childImageSharp.fluid}
      style={{ height: `${height}px` }}
      alt={altText}
    />
  )

  const images = [
    Img1_19,
    Img2_19,
    Img3_19,
    Img1_15,
    Img2_15,
    Img3_15,
    Img1_13,
    Img2_13,
    Img3_13,
    Img4_13,
    Img1_12,
    Img2_12,
    Img3_12,
    Img4_12,
    Img1_11,
    Img2_11,
    Img3_11,
    Img4_11,
    Img1_09,
    Img2_09,
    Img3_09,
    Img4_09,
    Img5_09,
    Img6_09,
    Img7_09,
    Img8_09,
    Img9_09,
    Img10_09,
    Img11_09,
  ]

  return <>{images[imgIndex]()}</>
}

export default SiteImg
