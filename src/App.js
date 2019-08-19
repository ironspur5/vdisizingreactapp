import React, { Component } from "react";
import "./App.css";
import FormExampleFieldControl from "./Form";

import {
  Button,
  Select,
  Header,
  Image,
  Dropdown
} from 'semantic-ui-react'

class App extends Component {
  state = {
    fields: {},
    cpu: ""
  };


  onSubmit = (fields,cpu) => {
    this.setState({fields});
    cpu = fields.firstName*2
    //worked! now can
    this.setState({cpu});
  };

  render() {
    return (
        <div className="App">

          <Header>
          </Header>

          <Header as='h2'>
            <Image
                style={{width: '175px', height: 'auto'}}
                src='https://cloud.oracle.com/res/images/header/oracle-cloud-logo.png'
            /> Cloud
          </Header>

          <Header>
          </Header>

          <div className="ui blue inverted segment">
            <Header as='h2'>Visual Desktop Interface (VDI) Pricing Tool</Header>
          </div>


          <FormExampleFieldControl onSubmit={fields => this.onSubmit(fields)} />

          <Header>Total Requirements</Header>

          <table className="ui celled table">
            <thead>
            <tr>
              <th>oCPUs</th>
              <th>RAM (GB)</th>
              <th>Disk (GB)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td data-label="oCPUs">{this.state.cpu}</td>
              <td data-label="RAM">{JSON.stringify(this.state.fields.firstName, null, 2)}</td>
              <td data-label="Disk">{JSON.stringify(this.state.fields.firstName, null, 2)}</td>
            </tr>
            </tbody>
          </table>

          <Header> </Header>

          <Header>Total Costs</Header>


          <table className="ui celled table">
            <thead>
            <tr>
              <th>Bare Metal Hosts</th>
              <th>Cost/Mo Bare Metal</th>
              <th>Cost/Mo SW Windows</th>
              <th>Cost/Mo SW SGD</th>
              <th>Cost/Mo Management VM</th>
              <th>Total Cost/Mo</th>
              <th>Total Cost/User/Mo</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td data-label="Bare Metal Hosts">{JSON.stringify((this.state.fields.firstName), null, 2)}</td>
              <td data-label="Cost/Mo Bare Metal">{JSON.stringify(this.state.fields.lastName, null, 2)}</td>
              <td data-label="Cost/Mo SW Windows">{JSON.stringify(this.state.fields.username, null, 2)}</td>
              <td data-label="Cost/Mo SW SGD">{JSON.stringify(this.state.fields.email, null, 2)}</td>
              <td data-label="Cost/Mo Management VM">{JSON.stringify(this.state.fields.password, null, 2)}</td>
              <td data-label="Total Cost/Mo">{JSON.stringify(this.state.fields.password, null, 2)}</td>
              <td data-label="Total Cost/User/Mo">{JSON.stringify(this.state.fields.password, null, 2)}</td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;
