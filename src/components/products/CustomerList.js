import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CustomerList  extends Component {
  constructor(props){
    super(props)
    this.state = {
      defaultCustomer: null,
      defaultCustomerName: ''
    }
  }

  handleChange = (event,value) => {
    debugger
    event.preventDefault()
    this.setState({
      defaultCustomer: value,
      defaultCustomerName: event.target.innerText
    })
    this.props.setCustomerName(event.target.innerText)
  }

  render(){
    debugger
    return(
      <SelectField value={this.state.defaultCustomer} hintText="Customer List"	onChange={this.handleChange}>
        <MenuItem value={0} label="Ram" primaryText="Ram" name="Ram"/>
        <MenuItem value={1} label="Shyam" primaryText="Shyam" name="Shyam"/>
        <MenuItem value={2} label="Hari" primaryText="Hari" name="Hari"/>
        <MenuItem value={3} label="Gita" primaryText="Gita" name="Gita"/>
      </SelectField>
    )
  }
}

export default CustomerList
