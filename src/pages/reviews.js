import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import ListSubheader from "@material-ui/core/ListSubheader"

import InfoIcon from "@material-ui/icons/Info"
import StarBorderIcon from "@material-ui/icons/StarBorder"
// import tileData from "./tileData"
import img1 from "../images/REVIEWS/artic1_small.jpg"
import img2 from "../images/REVIEWS/artic2-a_small.jpg"
import img3 from "../images/REVIEWS/artic2-b_small.jpg"
import img4 from "../images/REVIEWS/artic3_small.jpg"
import img5 from "../images/REVIEWS/reviews_01_small.jpg"
import img6 from "../images/REVIEWS/reviews_02_small.jpg"
import img7 from "../images/REVIEWS/reviews_03_small.jpg"
import img8 from "../images/REVIEWS/reviews_04_small.jpg"
import img9 from "../images/REVIEWS/reviews_05_small.jpg"
import img10 from "../images/REVIEWS/reviews_06_small.jpg"
import img11 from "../images/REVIEWS/reviews_07_small.jpg"
import img12 from "../images/REVIEWS/reviews_08_small.jpg"
import img13 from "../images/REVIEWS/reviews_09_small.jpg"
import img14 from "../images/REVIEWS/reviews_10_small.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    height: "100vh",
  },
  gridList: {
    width: 800,
    height: "100vh",
    // height: 600,
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: img1,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img2,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img3,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img4,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img5,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img6,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img7,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img8,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img9,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img10,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img11,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img12,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img13,
    title: "Image1",
    author: "author",
    featured: true,
  },
  {
    img: img14,
    title: "Image1",
    author: "author",
    featured: true,
  },
]

const BodyText = ({ children }) => {
  return (
    <Typography
      variant="body1"
      component="p"
      gutterBottom="true"
      style={{ maxWidth: "720px", marginBottom: "16px" }}
    >
      {children}
    </Typography>
  )
}

export default function AdvancedGridList() {
  const classes = useStyles()

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Reviews
      </Typography>
      <BodyText variant="body1" component="p" gutterBottom>
        The following are reviews and testimonial letters given to Anna Ward as
        an appreciation for her creative work as a dancer, choreographer and
        instructor for classical ballet.
      </BodyText>
      <div className={classes.root}>
        <GridList cellHeight={170} className={classes.gridList} cols={4}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Layout>
  )
}
