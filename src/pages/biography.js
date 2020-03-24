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
  width: 105px;
  height: 150px;
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
      Biography
    </Typography>
    {/* <Typography variant="caption" component="p">
      Lawton Youth Ballet, Artistic Director
    </Typography>
    <Typography variant="caption">
      International Choreographer, Master Teacher
    </Typography> */}
    <GridContainer>
      <GridItem>
        <StyledImgCard1>
          <CardMedia>
            <SiteImages imgIndex="3" />
          </CardMedia>
        </StyledImgCard1>
      </GridItem>
      <GridItem>
        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="4" />
          </CardMedia>
        </StyledImgCard>
      </GridItem>
      <GridItem>
        <StyledImgCard>
          <CardMedia>
            <SiteImages imgIndex="5" />
          </CardMedia>
        </StyledImgCard>
      </GridItem>
    </GridContainer>
    <BodyText variant="body1" component="p">
      Anna Ward received her earliest dance training from Frank ad Irina Pal, in
      her home town Wichita Fallx, TX. Ms. Ward was a scholarship student wit
      Neubert Ballet at Carnegie Hall, New York Cit ad at the Harvard Summer
      Dance Center. Already as a young student, Anna was choreographing and
      performing.
    </BodyText>
    <BodyText variant="body1" component="p">
      Anna studied also under the prima ballerina Maria Tallcheif of the Osage
      Indian tribe.
    </BodyText>
    <BodyText variant="body1" component="p">
      While living in New York, Anna studied with Istvan Robosky and Peter
      Nelson. Had modern dance training at the Murray Louis / Alwin Nicolias
      Dance Lab.
    </BodyText>
    <BodyText variant="body1" component="p">
      On returning to Texas, Anna began her advanced study wit Mme. Nathalie
      Krassovska in Dallas. Choreographed and performed in many pieces for the
      Krassovska Ballet Jeunesse of Dallas. For many years she directed the
      children program at Krassovska School of Classical Russian Ballet and
      taught /choreographed for three years at the City Ballet Dallas.
    </BodyText>
    <BodyText variant="body1" component="p">
      Ms. Ward performed in the musical TEXAS as the Lead Flame under the
      direction of Neil Hess. Along with dancing principle roles with the Ballet
      Jeunesse, she also performed with North Texas area companies such as
      Irving Ballet, Ballet Met, Dance Fusion, Allen Civic Ballet and others.
      She enjoyed six seasons with the Dallas Opera as a featured dancer.
    </BodyText>
    <BodyText variant="body1" component="p">
      Anna Ward's choreography has been set on many Texas ballet companies such
      as Allen Civic Ballet, Ballet for the 21st Century, The Woodlands Festival
      Ballet, Galveston Choreography Conference, and more. She held the position
      of an Artistic Director for the Galveston Ballet from 2005 until 2010. She
      holds a Bachelor of Fine Arts degree from Emerson College in Boston and a
      Texas teaching certificate from Dallas Baptist University.
    </BodyText>
    <BodyText variant="body1" component="p">
      Ms Ward was recently honored by being named Artistic Advisor for the
      Ballet Foundation for the 21st Century, located in Dallas TX. Ms. Ward was
      commissioned to teach at the prestigious Salzburg International Ballet
      Academy in Austria (Summer 2008).
    </BodyText>
    <BodyText variant="body1" component="p">
      In Summer 2009 Ms. Ward traveled to New York's Long Lake Performing Arts
      Center to choreograph several original ballets.
    </BodyText>
    <BodyText variant="body1" component="p">
      In June 2010 Galveston Ballet was invited to tour Norway to perform Ms.
      Ward's choreography.
    </BodyText>
    <BodyText variant="body1" component="p">
      Anna is part of a network of international faculty for EDAS, European
      Dance Art, Salzburg, and contines to pursue the creation of her original
      ballets.
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Education:
    </Typography>
    <BodyText variant="body1" component="p">
      Dallas Baptist University - Teaching Certificate
      <br />
      Emerson College, Boston - BFA
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Choreographic Positions:
    </Typography>
    <BodyText variant="body1" component="p">
      Galveston Ballet - Galveston, Texas - Choreographer, Ballet Mistress,
      Director Ballet Foundation of the 21st Century - Dance Institute of Dallas
      - Guest Choreographer, Artistic Advisor Woodlands Festival Ballet - The
      Woodlands, Texas - Guest Choreographer Allen Civic Ballet - Allen, Texas -
      Resident Choreographer Irving Ballet - Irving, Texas - Guest Choreographer
      Krassovska Ballet Jeunesse of Dallas - Choreographer and Principle company
      dancer Neubert Ballet - Carnegie Hall Studio Theatre, New York -
      Choreographer
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Training: Dance Technique and Choreography
    </Typography>
    <BodyText variant="body1" component="p">
      Glenda Brown Choreography Project - UT Austin, Texas 2002 40th Annual
      Choreographers Conference - Regional Dance America Baroque Ballet - New
      York Baroque Ballet Company with Catherine Truocy Harvard Summer Dance
      Workshops - Boston (Choreography Scholarship) Dance Lab - New York
      (Modern) with Alwin Nikoliasis/Murray Louis Krassovska School of Russian
      Classical Ballet with Mme. Nathalie Krassovska (Ballet Russes de Monte
      Carlo) Neubert Ballet at Carnegie Hall (Choreography Scholarship) with
      Christine Neubert, Stefan Hoff, Nina Popova New York Conservatory of Dance
      with Peter Nelson, Istvan Robosky
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Teaching Positions:
    </Typography>
    <BodyText variant="body1" component="p">
      Instructor - Galveston Ballet - Galveston, Texas <br />
      Instructor - City Ballet - Dallas, Texas
      <br />
      Dance Rehearsal Director - The Dallas Opera Cunning Little Vixen 1999 -
      2000
      <br />
      Director - Mersservey Dancers, Arts Magnet Schools - Kansas City, Missouri
      <br />
      Director - Krassovska Ballet Junior Company - Dallas, Texas
      <br />
      Director - Emerson Dance Company - Boston, Massachusetts
      <br />
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Dallas Opera Performances:
    </Typography>
    <BodyText variant="body1" component="p">
      Mama Vixen - Cunning Little Vixen -Frank Corsaro, Director Flying Valkure
      -Die Walkure -Roberto Oswald - Director Flying Rhinemaiden -Das Rhinegold
      -Roberto Oswald - Director Principal Dancer -Ariodante -John Copley of
      London, Director, Kenneth von Heidecke, Choreographer Waltz and Minuet
      Dancer - A Masked Ball -M. Hampe, Director, Kenneth von Heidecke,
      Choreographer Chinese Dancer -Turandot -Bliss, Director, Kenneth von
      Heidecke, Choreographer
    </BodyText>
    <Typography variant="h6" component="p" gutterBottom>
      Musicals:
    </Typography>
    <BodyText variant="body1" component="p">
      Lead Dancer -Texas! -Neil Hess, Choreographer
    </BodyText>
  </Layout>
)
