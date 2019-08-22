import React, { Component } from "react";
import "./App.css";
import FormExampleFieldControl from "./Form";

import {
  Header,
  Image,
} from 'semantic-ui-react'

class App extends Component {
  state = {
    fields: {},

    cpu: "",
      ram: "",
      disk: "",

      BMHostsOverall: "",
      costPerMonthBM: "",
      costPerMonthSW_Windows: "",
      costPerMonthSW_SGD: "",
      costPerMonthManagementVM: "",
      totalPerMonth: "",
      totalPerUserPerMonth: ""
  };


  onSubmit = (fields,cpu, ram, disk, BMHostsOverall, costPerMonthBM, costPerMonthSW_Windows, costPerMonthSW_SGD,
              costPerMonthManagementVM, totalPerMonth, totalPerUserPerMonth) => {

     const BMHostoCPUVMsavailable = 182;
      const BMHostoCPUSessionsavailable = 400;
      const BMHostCPUtotal = 52;
      const BMHostRAMavailable = 756;
      const BMHostCostHrDenseIO = 0.1275;
      const OCIVMCostOCPUHour = 0.0638;
      const WindowsServerOSHr = 0.0204;
      const SGDUserYr = 150;
      const OCIHoursinamonth = 744;

      const SGD_CPU = 2;
      const SGD_RAM = 7;
      const SGD_Storage = 25;

    this.setState({fields});

    cpu = (fields.numPowerUsers*2) + (fields.numKnowledgeUsers*1) + (fields.numTaskUsers*1) +
        (fields.numCustomUsers*fields.customCPUs);

      ram = (fields.numPowerUsers*8) + (fields.numKnowledgeUsers*4) + (fields.numTaskUsers*2) +
          (fields.numCustomUsers*fields.customRAM);

      disk = (fields.numPowerUsers*150) + (fields.numKnowledgeUsers*100) + (fields.numTaskUsers*100) +
          (fields.numCustomUsers*fields.customDisk);

      BMHostsOverall = 5;

    this.setState({cpu, ram, disk, BMHostsOverall, costPerMonthBM, costPerMonthSW_Windows, costPerMonthSW_SGD,
        costPerMonthManagementVM, totalPerMonth, totalPerUserPerMonth});

  };

  render() {
    return (
        <div className="App">

          <Header>
          </Header>

          <div className='App2'>
              <Header>
                <Image
                style={{width: '175px', height: 'auto'}}
                src='https://cloud.oracle.com/res/images/header/oracle-cloud-logo.png'
                /> Cloud </Header>
          </div>

            <div className="ui blue inverted segment">
                <Header as='h2'>Visual Desktop Interface (VDI) Pricing Tool</Header>
            </div>

          <Header>
          </Header>


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
              <td data-label="RAM">{this.state.ram}</td>
              <td data-label="Disk">{this.state.disk}</td>
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
              <td data-label="Bare Metal Hosts">{this.state.BMHostsOverall}</td>
              <td data-label="Cost/Mo Bare Metal">{this.state.costPerMonthBM}</td>
              <td data-label="Cost/Mo SW Windows">{this.state.costPerMonthSW_Windows}</td>
              <td data-label="Cost/Mo SW SGD">{this.state.costPerMonthSW_SGD}</td>
              <td data-label="Cost/Mo Management VM">{this.state.costPerMonthManagementVM}</td>
              <td data-label="Total Cost/Mo">{this.state.totalPerMonth}</td>
              <td data-label="Total Cost/User/Mo">{this.state.totalPerUserPerMonth}</td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;
