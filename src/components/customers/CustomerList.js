import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const style = {
  customerListPaper: {
    height: '40px',
    width: '70%',
    margin: '5%',
    marginLeft: '300px'
  }
}

class CustomerList extends Component {
  render(){
    return(
      <Paper style={style.customerListPaper}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Customer Id</TableHeaderColumn>
              <TableHeaderColumn>Customer Name</TableHeaderColumn>
              <TableHeaderColumn>Employment</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Ram </TableRowColumn>
              <TableRowColumn>Married</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Shyam</TableRowColumn>
              <TableRowColumn>Employeed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default CustomerList
