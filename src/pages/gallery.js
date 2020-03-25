import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import ListSubheader from "@material-ui/core/ListSubheader"
import Images from "../components/images/galleryImages"

import InfoIcon from "@material-ui/icons/Info"
import StarBorderIcon from "@material-ui/icons/StarBorder"
// import tileData from "./tileData"
// import img1 from "../images/REVIEWS/artic1_small.jpg"
// import img2 from "../images/REVIEWS/artic2-a_small.jpg"
// import img3 from "../images/REVIEWS/artic2-b_small.jpg"
// import img4 from "../images/REVIEWS/artic3_small.jpg"
// import img5 from "../images/REVIEWS/reviews_01_small.jpg"
// import img6 from "../images/REVIEWS/reviews_02_small.jpg"
// import img7 from "../images/REVIEWS/reviews_03_small.jpg"
// import img8 from "../images/REVIEWS/reviews_04_small.jpg"
// import img9 from "../images/REVIEWS/reviews_05_small.jpg"
// import img10 from "../images/REVIEWS/reviews_06_small.jpg"
// import img11 from "../images/REVIEWS/reviews_07_small.jpg"
// import img12 from "../images/REVIEWS/reviews_08_small.jpg"
// import img13 from "../images/REVIEWS/reviews_09_small.jpg"
// import img14 from "../images/REVIEWS/reviews_10_small.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    // height: "100vh",
  },
  gridList: {
    width: 900,
    // height: "100vh",
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
        Gallery
      </Typography>
      <Typography variant="overline" component="p" gutterBottom>
        <a
          href="https://vimeo.com/255217407"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dallas neo-classical ballet - 2013
        </a>
        {/* <a
          href="https://vimeo.com/user78822325"
          style={{ color: "white", textDecoration: "none" }}
        >
          Anna Ward
        </a>{" "}
        on
        <a
          href="https://vimeo.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          Vimeo
        </a>
        . */}
      </Typography>

      <iframe
        src="https://player.vimeo.com/video/255217407"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>

      <div className={classes.root}>
        <GridList cellHeight={140} className={classes.gridList} cols={4}>
          <GridListTile cols="1">
            <Images imgIndex="0" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="1" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="2" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="3" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="4" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="5" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="6" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="7" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="8" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="9" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="10" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="11" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="12" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="13" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="14" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="15" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="16" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="17" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="18" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="19" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="20" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="21" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="22" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="23" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="24" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="25" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="26" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="27" />
          </GridListTile>
          <GridListTile cols="1">
            <Images imgIndex="28" />
          </GridListTile>
        </GridList>
      </div>
    </Layout>
  )
}
