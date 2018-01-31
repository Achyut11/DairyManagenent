import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

const style = {
  bar: {
    backgroundColor: "orangered"

  }
}

const NavigationBar = () => (
  <AppBar
    title="Dairy Application"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={style.bar}
    zDepth={3}
  />
)

export default NavigationBar
