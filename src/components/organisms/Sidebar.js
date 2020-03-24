import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "gatsby"
import { Link as MatLink } from "@material-ui/core"
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    paddingTop: theme.spacing(18),
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

export const Sidebar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />

        <List>
          {[
            "Home",
            "Biography",
            "Projects",
            "Choreography",
            "History",
            "Gallery",
            "Reviews",
            "Video",
            "Contact",
            "Links",
          ].map((text, index) => (
            <ListItem button key={text}>
              <Link
                to={text === "Home" ? "/" : text.toLowerCase()}
                style={{ textDecoration: "none" }}
              >
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
