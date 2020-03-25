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
  width: 200px;
  height: 250px;
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
      Choreographer
    </Typography>
    <GridContainer>
      <GridItem xs={12} sm={8}>
        <BodyText variant="body1" component="p">
          GALVESTON BALLET-Galveston, TX Director, Choreographer, Ballet
          Mistress
        </BodyText>
        <BodyText variant="body1" component="p">
          BALLET FOUNDATION OF THE 21st CENTURY - Dance Institute of Dallas, TX
          Resident Guest Choreographer, Variations Coach , Artistic Adviser
        </BodyText>
        <BodyText variant="body1" component="p">
          WOODLANDS FESTIVAL BALLET - The Woodlands, TX Guest Choreographer
        </BodyText>
        <BodyText variant="body1" component="p">
          ALLEN CIVIC BALLET - Allen ,TX Resident Choreographer
        </BodyText>
        <BodyText variant="body1" component="p">
          IRVING BALLET - Irving, TX Guest Choreographer
        </BodyText>
        <BodyText variant="body1" component="p">
          KRASSOVSKA BALLET JEUNESSE OF DALLAS - Dallas, TX Resident
          Choreographer, Director of Junior Company and Principal Dancer
          <br />
          <br />
        </BodyText>
        <BodyText variant="body1" component="p">
          NEUBERT BALLET - Carnegie Hall Studio Theatre, New York, NY
          Choreographer
        </BodyText>
        <BodyText variant="body1" component="p">
          PANATELLO DANCEWORKS - Bronx, NY Choreographer
        </BodyText>
        <BodyText variant="body1" component="p">
          TOP HAT - Carrolton,Texas Choreographer{" "}
        </BodyText>
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
            Dallas neo-classical ballet - 2013
          </a>{" "}
          from <a href="https://vimeo.com/user78822325">Anna Ward</a> on
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </GridItem>

      <GridItem xs={12} sm={4}>
        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="7" />
          </CardMedia>
        </StyledImgCard>
        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="8" />
          </CardMedia>
        </StyledImgCard>

        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="9" />
          </CardMedia>
        </StyledImgCard>
      </GridItem>
    </GridContainer>
  </Layout>
)
