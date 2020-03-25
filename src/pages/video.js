import React from "react"
import Layout from "../components/layout"
import { Typography, CardMedia, Card } from "@material-ui/core"

export default () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom>
      Videos
    </Typography>

    <Typography variant="caption" component="p" gutterBottom>
      <a
        href="https://vimeo.com/258520032"
        style={{ color: "white", textDecoration: "none" }}
      >
        Marshall’s performing arts
      </a>
    </Typography>
    <iframe
      src="https://player.vimeo.com/video/258520032"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
    <br />
    <iframe
      src="https://player.vimeo.com/video/256532021"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>

    <br />
    <Typography variant="caption" component="p" gutterBottom>
      <a
        href="https://vimeo.com/254031180"
        style={{ color: "white", textDecoration: "none" }}
      >
        12 year old Student Performance
      </a>
    </Typography>
    <iframe
      src="https://player.vimeo.com/video/254031180"
      width="640"
      height="1138"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>

    <iframe
      width="933"
      height="700"
      src="https://www.youtube.com/embed/QjE2oTXbz2Q"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <iframe
      width="933"
      height="700"
      src="https://www.youtube.com/embed/3-CyvbTYmyY"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Layout>
)
