import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import CustomerList from './CustomerListForCreate'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  form: {
    marginLeft: '30%',
    width: '30%',
  },
  paperForm: {
    marginTop: '2%',
    paddingBottom: '2%',
    padding: '17%',
    paddingTop: '5%',
    height: '50%',
  },
  formHeader: {
    color: 'orangered',
    fontStyle: 'Sans',
    marginLeft: '70px',
  },
  actionButtons: {
    marginLeft: 20,
    marginRight: 5,
  }
}

class CreateProducts extends Component {
  constructor(props){
    super(props)
    this.state = {
      customerName: this.setCustomerName(),
      litre: 0,
      fat: 0,
      price: 0,
      date: new Date('2018','01','14')
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const {value, name} = event.target
    this.setState({
      [name]: value
    })
  }

  findTotal = (products) => {
    return(
      products.litre*products.price*products.fat
    )
  }

  setCustomerName = (customerName) => {
      this.setState({
        customerName: customerName
      })
  }

  formatDate = (date) => {
    let nepaliYear = date.getFullYear()+57
    date = new Date(`${nepaliYear}`,'01','14')
  }

  render(){
    const date = new Date('2018','01','14')
    return(
      <div>
        <div style={style.form}>
          <Paper style={style.paperForm}>
            <h3 style={style.formHeader}>आज ko Maal </h3>
            <CustomerList setCustomerName={this.setCustomerName}/>
            <DatePicker
              hintText="आज मिति"
              locale="ne_NP"
              defaultDate={this.formatDate(this.state.date)}
              />
            <TextField
              hintText="1.0"
              type="number"
              floatingLabelText="लीटर"
              onChange={this.handleChange}
              name="litre"
            />
            <br />
            <TextField
              hintText="4.5"
              type="number"
              floatingLabelText="बोसो"
              onChange={this.handleChange}
              name="fat"
              max={10}
              min={0}
            />
            <br />
            <TextField
              hintText="50 |-"
              type="number"
              onChange={this.handleChange}
              floatingLabelText="बोसो मूल्य"
              name="price"
              min={0}
              max={100}
            />
            <br />
            <h4 style={style.formHeader}>Total of {this.state.customerName}: {this.findTotal(this.state)}</h4>
            <RaisedButton style={style.actionButtons}>Submit</RaisedButton>
            <RaisedButton style={style.actionButtons}>Reset</RaisedButton>
          </Paper>
      </div>
    </div>
    )
  }
}

export default CreateProducts
