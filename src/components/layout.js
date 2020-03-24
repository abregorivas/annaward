import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import annaTheme from "../theme"
import GlobalStyle from "../GlobalStyle"

import { Footer, Banner, Sidebar } from "../components/organisms"

import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 240,
    marginTop: 132,
    backgroundColor: "rebeccapurple",
    color: "white",
    height: "100%",
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={annaTheme}></ThemeProvider>

      <Banner />
      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
