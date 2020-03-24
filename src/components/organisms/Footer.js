import React from "react"
import {
  Container,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core"
import styled from "styled-components"
import Phone from "@material-ui/icons/Phone"
import Fax from "@material-ui/icons/SettingsPhone"
import Email from "@material-ui/icons/Email"
// import { SiteBrand } from "../Navigation"
// import { FooterBgImg } from "../atoms"
// import { graphql, useStaticQuery } from "gatsby"

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const StyledBottomFooter = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-left: 240;
`

const FooterLeft = styled.div`
  flex-basis: 28%;
  padding: 0 8px 16px 8px;
`

const FooterMid = styled.div`
  flex-basis: 28%;
  padding: 16px 8px;
  & ul > li {
    padding-left: 0;
  }
`

const FooterRight = styled.div`
  padding: 16px 8px;
  flex-basis: 28%;
`

const StyledBrandHeading = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`

const StyledListItemText = styled(ListItemText)`
  & span {
    font-size: 14px;
  }
`
const StyledIcon = styled(ListItemIcon)`
  min-width: 32px;
  color: white;
`
const Paypal = styled(Typography)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  & span {
    color: #039ade;
    margin-right: 8px;
  }
`

export const Footer = () => {
  return (
    <>
      <Divider />
      {/* <StyledContainer
        maxWidth="xl"
        component="footer"
        style={{ paddingBottom: "32px" }}
      >
        <FooterLeft>
          <StyledBrandHeading>
            <Typography variant="body1" as="h3">
              Engineering Inc.
            </Typography>
          </StyledBrandHeading>

          <Typography variant="body2">
            We have over 40 years of experience and are ready to help get your
            next project done.
          </Typography>
        </FooterLeft>
        <FooterMid id="contact">
          <Typography variant="h6">Contact Info</Typography>
          <List>
            <ListItem>
              <StyledIcon color="primary">
                <Phone size={16} />
              </StyledIcon>
              <StyledListItemText primary="(310) 831-4343" secondary={null} />
            </ListItem>
            <ListItem>
              <StyledIcon color="primary">
                <Fax size={16} />
              </StyledIcon>
              <StyledListItemText
                primary="1 - (877) GOULD90"
                secondary={null}
              />
            </ListItem>
            <ListItem>
              <StyledIcon color="primary">
                <Email size={16} />
              </StyledIcon>
              <a
                href="mailto:info@gouldengineeringinc.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                <StyledListItemText
                  primary="info@gouldengineeringinc.com"
                  secondary={null}
                />
              </a>
            </ListItem>
          </List>
        </FooterMid>
        <FooterRight>
          <Typography variant="h6" as="h6" gutterBottom>
            Online Payments
          </Typography>
          <Typography variant="body2">
            If you prefer to forego the use of checks or traditional electronic
            funds transfer, we offer quick and easy online payments via PayPal.
            Let us know with an email.
          </Typography>
          <Paypal variant="body2">
            <Icon className="fab fa-paypal" /> Paypal Verified
          </Paypal>
        </FooterRight>
      </StyledContainer> */}
      <div style={{ backgroundColor: "rebeccapurple" }}>
        <StyledContainer maxWidth="xl">
          <StyledBottomFooter>
            <Typography variant="caption">
              &copy; 2019 annaward-ballet.com
            </Typography>
            <Typography variant="caption">
              <StyledIcon color="primary">
                <Email size={16} style={{ marginRight: "16px" }} />
                <a
                  href="mailto:annakayward@gmail.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <StyledListItemText
                    primary="  annakayward@gmail.com"
                    secondary={null}
                  />
                </a>
              </StyledIcon>
            </Typography>

            <Typography variant="caption">
              &copy; Perfect Paradox WebDesign
            </Typography>
          </StyledBottomFooter>
        </StyledContainer>
      </div>
    </>
  )
}
