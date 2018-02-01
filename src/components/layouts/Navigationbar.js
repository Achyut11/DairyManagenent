import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  bar: {
    backgroundColor: "black"
  },
  navButton: {
    height: 40,
    marginTop: 10
  },
  titleStyle: {
    textAlign: 'center',
    color: 'white'
  }
}

const NavigationBar = () => (
  <AppBar
    title="Ramesh Dairy Private Ltd."
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={style.bar}
    zDepth={3}
    titleStyle={style.titleStyle}
  >
    <RaisedButton
    label="About"
    labelColor="black"
    style={style.navButton}
    backgroundColor="orangered"
  />
  </AppBar>
)

export default NavigationBar
