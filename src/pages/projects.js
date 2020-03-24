import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card } from "@material-ui/core"
import { GridContainer, GridItem } from "../components/Grid"
import styled from "styled-components"
import SiteImages from "../components/atoms/SiteImages"

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

const StyledImgCard = styled(Card)`
  width: 450px;
  height: 300px;
  border-radius: 0;
  margin: 16px 16px;
`

const StyledImgCard1 = styled(Card)`
  width: 122px;
  height: 150px;
  border-radius: 0;
  margin: 16px 16px;
`
export default () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom>
      Projects
    </Typography>
    <GridContainer>
      <GridItem>
        <BodyText variant="body1" component="p">
          HOUSTON FESTIVAL BALLET - Houston, TX Coach and Guest Teacher.
        </BodyText>
        <BodyText variant="body1" component="p">
          BALLET FOUNDATION - Dallas, TX Coach,Choreographer,Artistic Adviser.
        </BodyText>
        <BodyText variant="body1" component="p">
          RENAISSANCE FESTIVAL BALLET - Chicago, IL Staging.
        </BodyText>
        <BodyText variant="body1" component="p">
          SIBA, SALZBURG INTERNATIONAL BALLET ACADEMY - Salzburg, Austria-
          Summer Workshop-Guest Teacher.
        </BodyText>
        <BodyText variant="body1" component="p">
          GALVESTON BALLET - Galveston,Tx Hurricance Ike Recovery Project -
          Original Ballet for GB dancers for performances in other cities.
        </BodyText>
        <BodyText variant="body1" component="p">
          Premiere for BALLET OF THE 21st CENTURY - Dallas, TX.
          <br />
          <br />
        </BodyText>
      </GridItem>

      <GridItem>
        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="6" />
          </CardMedia>
        </StyledImgCard>
      </GridItem>
    </GridContainer>
    <iframe
      src="https://player.vimeo.com/video/255217407"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://vimeo.com/255217407" style={{ color: "white" }}>
        Dallas - Krassovska dancers of Ballet Foundation - Anna Ward's
        choreography
      </a>{" "}
      from <a href="https://vimeo.com/user78822325">Anna Ward</a> on
      <a href="https://vimeo.com">Vimeo</a>.
    </p>
  </Layout>
)
