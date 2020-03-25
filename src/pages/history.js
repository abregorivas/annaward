import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card } from "@material-ui/core"
import { GridContainer, GridItem } from "../components/Grid"
import styled from "styled-components"
import Images from "../components/images/historyImages"

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
      History
    </Typography>
    <StyledImgCard>
      <CardMedia>
        <Images imgIndex="3" />
      </CardMedia>
    </StyledImgCard>
    <GridContainer>
      <GridItem xs={12} sm={8}>
        <BodyText variant="body1" component="p">
          Most people knew Nathalie Krassovska as "Madame"--a title of great and
          well-deserved respect. As a ballerina she performed the best of the
          classical repertory with some of the finest and most famous dancers of
          the Twentieth Century. As a member of the Ballet Russes de Monte
          Carlo, she toured Europe and South America. In North America she
          toured with the Ballet Russes on a train that brought classical ballet
          to large and small cities and towns that had never seen a ballet. They
          were the ballet pioneers in America.
        </BodyText>
        <GridItem>
          <div style={{ display: "flex" }}>
            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="0" />
              </CardMedia>
            </StyledImgCard>

            <StyledImgCard>
              <CardMedia>
                <Images imgIndex="1" />
              </CardMedia>
            </StyledImgCard>
          </div>
        </GridItem>
        <BodyText variant="body1" component="p">
          Early in her career she worked with such choreographers as Balanchine,
          Bronislava Nijinska, Michael Fokine, and Leonide Massine. After a long
          career as a soloist and then Prima Ballerina with the Ballet Russes
          and then went on to become Prima Ballerina with the London Festival
          Ballet from 1950 to 1960.
        </BodyText>
        <BodyText variant="body1" component="p">
          In 1963, Madame Krassovska settled in Dallas, Texas. As a Dallas
          teacher, she maintained a strict classical Russian Romantic style. She
          gained a loyal and devoted following of hundreds of students and many
          many fans. She incorporated the delicacy, soft phrasing, effortless
          and almost non-acrobatic aspects of that old company style into her
          new dancers to an impressively thorough extent. Upon seeing a
          performance of Krassovska Ballet Jeunesse, Victoria Lowe of "Dance
          Magazine" said, "It was, simply the best perfornance by a local
          company this season....the discipline of the classical Russian
          Romantic tradition; the soft arms, expressive epaulement and stage
          presence, and the technical command which permits dancers to move
          without apparent effort and without making the slightest sound. They
          were not just good; they were great.
        </BodyText>
        <StyledImgCard>
          <CardMedia>
            <Images imgIndex="2" />
          </CardMedia>
        </StyledImgCard>
        <BodyText variant="body1" component="p">
          There is almost no one, it seemed, that Madame Krassovska did not know
          or at least had not met in the ballet world. She told her wonderful
          stories as she told of her experiences dancing with Anton Dolin, Igor
          Youskevitch, Frederic Franklin, Alexandra Danilova and Serge
          Lefar--stories which few in the ballet world was able to match and
          were a joy.
        </BodyText>
        <BodyText variant="body1" component="p">
          Jack Anderson, dance critic for the "The New York Times," remembers
          Madame Krassovska as the first ballerina he ever saw perform the Black
          Swan Pas de Deux from Swan Lake, an occasion which he says made an
          indelible impression. But there are many others like him who can say
          Madame Krassovska is the woman responsible for instilling in them a
          fascination and love for ballet.
        </BodyText>
        <BodyText variant="body1" component="p">
          Flamboyant, animated, and dedicated, Madame Krasskovska carried
          herself like a Prima Ballerina who commanded a spotlight of her own
          until her death at 86 years in 2005. She held rehearsal the day before
          she died.
        </BodyText>
        <BodyText variant="body1" component="p">
          Madame Krassovska was teacher and mentor to Anna Ward for almost 18
          years. Not only did Anna dance principal roles with the Company, but
          also was Madame's protege, and encouraged her talent in creating
          original ballets of her own.
        </BodyText>
      </GridItem>

      <GridItem xs={12} sm={4}></GridItem>
    </GridContainer>
  </Layout>
)
