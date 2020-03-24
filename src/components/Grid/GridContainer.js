import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

const StyledGridParent = styled("div")`
  overflow-x: hidden;
  flex-grow: 1;
`
export const GridContainer = props => {
  const { children, className, ...rest } = props
  return (
    <StyledGridParent>
      <Grid container {...rest} className={className}>
        {children}
      </Grid>
    </StyledGridParent>
  )
}

GridContainer.defaultProps = {
  className: "",
}

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
