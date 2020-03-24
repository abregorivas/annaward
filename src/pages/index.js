import React from "react"
import { Link } from "gatsby"
import { Link as MatLink } from "@material-ui/core"
import { Typography, CardMedia, Card } from "@material-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SiteImages from "../components/atoms/SiteImages"
import styled from "styled-components"
import { GridContainer, GridItem } from "../components/Grid"
import PhotoCamera from "@material-ui/icons/Photo"
import IconButton from "@material-ui/core/IconButton"
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
  width: 300px;
  height: 240px;
  border-radius: 0;
  margin: 16px 16px;
`

const StyledImgCard2 = styled(Card)`
  width: 200px;
  height: 240px;
  border-radius: 0;
  margin: 16px 16px;
`
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="h3" component="h1" gutterBottom>
        About Me
      </Typography>
      <BodyText>
        Anna Ward personally trained at RAD school and studied under Madame
        Nathalie Krassovska. She also danced as a professional in Krassovska’s
        Ballet Jeunesse for many years. Her performances included Chopinanna,
        Pas de Quatre, Paquita, La Bayadere, and Giselle to name a few.
      </BodyText>
      <BodyText>
        She holds a personal letter of recommendation of excellence from Madame
        Nathalie Krassovska. She treasures the details of line, upper body, arms
        and head which Krassovska instilled in her. And, the artistry of making
        her “art breathe” and to “never give up” were lifetime gifts that Madame
        Krassovska passed on to her.
      </BodyText>
      <BodyText>
        Ms. Ward’s choreography is acknowledged and performed internationally.
        She has trained dancers in Austria, Norway, Italy, Denmark and Scotland
        as well as the United States.
      </BodyText>
      <BodyText>
        Anna Ward is former Director of Contemporary Ballet Dallas Youth Ballet
        which she founded in 2010. She went on to teach at Fishbacks Dance and
        Marshalli Performing Arts in Albuquerque, New Mexico. She founded the
        All Nations Dance Company in New Mexico in 2016.
      </BodyText>
      <BodyText>
        She is also Founder and Director of the Comanche Nation Youth Summer
        Dance Project.
      </BodyText>
      <BodyText>
        Ms. Ward was on the Founding Board of Directors for Classical Ballet
        Festival and served as one of the Artistic Advisors for
        balletfoundation. She has set several pieces of her original
        choreography for balletfoundation as well as coaching first hand roles
        she learned from Madame Krassovska.
      </BodyText>
      <BodyText>
        She is currently the Artistic Director for Lawton Youth Ballet which she
        founded under the Lawton Ballet Theater school.
      </BodyText>
      <BodyText></BodyText>
      {/* <BodyText>
        I teach the Russian Classical style of ballet, in which I was trained.
        The use of head and arms are in the Romantic style, which is quite
        different then what most schools emphasize today. The Russian classical
        continues with fine lines, strength, correct technique and beauty.
      </BodyText>
      <BodyText>
        I stage Romantic classical ballets in the style and form taught to me
        first-hand by the late Madame Nathalie Krassovska, such as
        Pas-De-Quatre, Chopiniana, and Giselle.
      </BodyText>
      <BodyText>
        My true joy and passion is creating my own original choreography, which
        is classical in form but fresh and innovative, keeping the foundations
        of technique, style, projection and line foremost.
      </BodyText>
      <BodyText>
        I enjoy working with dancers of all ages and abilities. Currently I am
        the choreographer, ballet mistress and main instructor for the Galveston
        Ballet.
      </BodyText>
      <BodyText>
        My main ambition is staging. I would like to share my knowledge of this
        rare style, which has been passed to me by my great and famous teachers,
        originated from the "Ballet Russe", and create original ballets for
        pre-professional and professional ballet companies worldwide.
      </BodyText>
      <BodyText>
        Founder & Director of the Contemporary Ballet Dallas, Tx. / Youth
        Ballet.
      </BodyText>
      <BodyText>
        At present: Artistic Director of Ballet Juennesse of Huntsville and the
        Director of Ballet at Angela's Academy of Dance.
      </BodyText> */}
      <Typography variant="body2">
        View new photos
        <Link to="gallery">
          <IconButton aria-label="link to photos" style={{ color: "white" }}>
            <PhotoCamera size={24} />
          </IconButton>
        </Link>
      </Typography>
      <Typography variant="body2">
        Latest review Apr. 2013:
        <MatLink
          color="inherit"
          href="http://www.theaterjones.com/reviews/20130409212919/2013-04-16/Dallas-Neo-Classical-Ballet/Spring-Mixed-Repertoire-Concert"
        >
          THEATER JONES - POETRY ON FOOT
        </MatLink>
      </Typography>
      <br />
      <iframe
        width="1206"
        height="678"
        src="https://www.youtube.com/embed/4HKb2oM0nqE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <GridContainer>
        <GridItem>
          <StyledImgCard>
            <CardMedia>
              <SiteImages imgIndex="0" />
            </CardMedia>
          </StyledImgCard>
        </GridItem>
        <GridItem>
          <StyledImgCard2>
            <CardMedia>
              <SiteImages imgIndex="2" />
            </CardMedia>
          </StyledImgCard2>
        </GridItem>
        <GridItem>
          <StyledImgCard>
            <CardMedia>
              <SiteImages imgIndex="1" />
            </CardMedia>
          </StyledImgCard>
        </GridItem>
      </GridContainer>
    </Layout>
  )
}

export default IndexPage
