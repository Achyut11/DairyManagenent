import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import {Link} from 'react-router-dom'
import ActionHome from 'material-ui/svg-icons/action/home'

const style = {
  sidebarMain: {
    margin: '2%',
    width: '200px',
    height: '10%',
    float: 'left',
  },
  paper: {
    overflowY: 'hidden'
  },
  listItemLink: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '15px'
  }
}

class Sidebar extends Component {
  render(){
    return(
      <div style={style.sidebarMain}>
        <Paper style={style.paper} zDepth={3}>
          <List>
            <Link to="/" style={style.listItemLink}>
              <ListItem leftIcon={<ActionHome />}>
                Home
              </ListItem>
            </Link>
            <Divider />
            <Link to="/create/" style={style.listItemLink}>
              <ListItem leftIcon={<ContentInbox />}>
                aja ko maal
              </ListItem>
            </Link>
            <Link to="/customerlist/" style={style.listItemLink}>
              <ListItem leftIcon={<ContentInbox />}>
                Customer List
              </ListItem>
            </Link>
            <Divider />
            <Divider />
            <ListItem primaryText="Aja ko hisab" leftIcon={<ContentSend />}/>
          </List>
        </Paper>
      </div>
    )
  }
}

export default Sidebar
