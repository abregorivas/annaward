import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GridContainer, GridItem } from "../components/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import ListSubheader from "@material-ui/core/ListSubheader"
import Images from "../components/images/linksImages"
import styled from "styled-components"
import InfoIcon from "@material-ui/icons/Info"
import StarBorderIcon from "@material-ui/icons/StarBorder"

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

const StyledImgCard = styled(Card)`
  width: 300px;
  height: 250px;
  padding: 8px;
  border-radius: 0;
  margin: 16px 16px;
`

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
        Links
      </Typography>

      <GridContainer>
        <GridItem>
          <Link href="https://backstagedancewear.com/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="0" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="http://eudanceart.org/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="2" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="https://www.galveston.com/whattodo/arts/thegrand/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="1" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="http://www.siba-academy.com/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="5" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="https://www.texasballettheater.org/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="6" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="http://eudanceart.org/ISRAEL/israel.htm">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="7" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
        <GridItem>
          <Link href="https://www.leasonellis.com/">
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="8" />
              </CardMedia>
            </StyledImgCard>
          </Link>
        </GridItem>
      </GridContainer>
      {/* <div className={classes.root}>
        <GridList cellHeight={120} className={classes.gridList} cols={3}>
          <GridListTile cols="1"></GridListTile>
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
        </GridList>
      </div> */}
    </Layout>
  )
}
