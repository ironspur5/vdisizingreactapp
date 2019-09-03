import React, {Component} from "react";
import "./App.css";
import FormExampleFieldControl from "./Form";
import data from "./config.json";

import {
    Header,
    Image
} from 'semantic-ui-react'

class App extends Component {
    state = {};

    onSubmit = (fields, cpu, ram, disk, BMHostsOverall, costPerMonthBM, costPerMonthSW_Windows, costPerMonthSW_SGD,
                costPerMonthManagementVM, totalPerMonth, totalPerUserPerMonth) => {

        const BMHostoCPUVMsavailable = Number(data.BMHostoCPUVMsavailable);
        const BMHostCPUtotal = Number(data.BMHostCPUtotal);
        const BMHostRAMavailable = Number(data.BMHostRAMavailable);
        const BMHostCostHrDenseIO = Number(data.BMHostCostHrDenseIO);
        const OCIVMCostOCPUHour = Number(data.OCIVMCostOCPUHour);
        const WindowsServerOSHr = Number(data.WindowsServerOSHr);
        const SGDUserYr = Number(data.SGDUserYr);
        const OCIHoursinamonth = Number(data.OCIHoursinamonth);
        const SGD_CPU = Number(data.SGD_CPU);

        this.setState({fields});

        cpu = (
            (fields.numPowerUsers * data.PowerCPUs) +
            (fields.numKnowledgeUsers * data.KnowledgeCPUs) +
            (fields.numTaskUsers * data.TaskCPUs) +
            (Number(fields.numCustomUsers) * Number(fields.customCPUs)) +
            (Number(fields.numCustomUsers2) * Number(fields.customCPUs2)) +
            (Number(fields.numCustomUsers3) * Number(fields.customCPUs3)) +
            (Number(fields.numCustomUsers4) * Number(fields.customCPUs4)));

        ram = (
            (fields.numPowerUsers * data.PowerRAM) +
            (fields.numKnowledgeUsers * data.KnowledgeRAM) +
            (fields.numTaskUsers * data.TaskRAM) +
            (Number(fields.numCustomUsers) * fields.customRAM) +
            (Number(fields.numCustomUsers2) * fields.customRAM2) +
            (Number(fields.numCustomUsers3) * fields.customRAM3) +
            (Number(fields.numCustomUsers4) * fields.customRAM4));

        disk = (
            (fields.numPowerUsers * data.PowerDisk) +
            (fields.numKnowledgeUsers * data.KnowledgeDisk) +
            (Number(fields.numTaskUsers) * data.TaskDisk) +
            (Number(fields.numCustomUsers) * fields.customDisk) +
            (Number(fields.numCustomUsers2) * fields.customDisk2) +
            (Number(fields.numCustomUsers3) * fields.customDisk3) +
            (Number(fields.numCustomUsers4) * fields.customDisk4));

        var bmHostsByCPU = (cpu / BMHostoCPUVMsavailable);
        var bmHostsbyRAM = (ram / BMHostRAMavailable);
        var totalUsers = (Number(fields.numPowerUsers) + Number(fields.numKnowledgeUsers) + Number(fields.numTaskUsers)
            + Number(fields.numCustomUsers)
            + Number(fields.numCustomUsers2)
            + Number(fields.numCustomUsers3)
            + Number(fields.numCustomUsers4));

        BMHostsOverall = Math.max(bmHostsByCPU, bmHostsbyRAM);
        costPerMonthBM = (BMHostsOverall * BMHostCostHrDenseIO * OCIHoursinamonth * BMHostCPUtotal);
        costPerMonthSW_Windows = (BMHostsOverall * OCIHoursinamonth * WindowsServerOSHr * BMHostCPUtotal);
        costPerMonthSW_SGD = (SGDUserYr / 12);
        costPerMonthManagementVM = (SGD_CPU * OCIHoursinamonth * OCIVMCostOCPUHour);
        totalPerMonth = (costPerMonthBM + costPerMonthSW_Windows + costPerMonthSW_SGD + costPerMonthManagementVM);
        totalPerUserPerMonth = (totalPerMonth / totalUsers);

        this.setState({
            cpu, ram, disk, BMHostsOverall, costPerMonthBM, costPerMonthSW_Windows, costPerMonthSW_SGD,
            costPerMonthManagementVM, totalPerMonth, totalPerUserPerMonth
        });

        BMHostsOverall = Math.ceil(BMHostsOverall);
        cpu = (cpu).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        ram = (ram).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        disk = (disk).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        costPerMonthBM = (costPerMonthBM).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        costPerMonthSW_Windows = (costPerMonthSW_Windows).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        costPerMonthSW_SGD = (costPerMonthSW_SGD).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        costPerMonthManagementVM = (costPerMonthManagementVM).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        totalPerMonth = (totalPerMonth).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        totalPerUserPerMonth = (totalPerUserPerMonth).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        this.setState({
            cpu, ram, disk, BMHostsOverall, costPerMonthBM, costPerMonthSW_Windows, costPerMonthSW_SGD,
            costPerMonthManagementVM, totalPerMonth, totalPerUserPerMonth
        });

    };

    render() {
        return (
            <div className="App">

                <Header>
                </Header>
                <div className="App2">
                    <Header as='h2'>
                        <Image
                            style={{width: '250px', height: 'auto'}}
                            //src='https://cloud.oracle.com/res/images/header/oracle-cloud-logo.png'
                            //src='https://www.stickpng.com/assets/images/584817d6cef1014c0b5e4999.png'
                            src={require('./OracleLogov2.png')}
                        />
                    </Header>
                </div>
                <Header>
                </Header>

                <div className="ui inverted segment" style={{backgroundColor:'#1178ab'}}>
                    <Header as='h2'>Visual Desktop Interface (VDI) Pricing Tool</Header>
                </div>

                <FormExampleFieldControl onSubmit={fields => this.onSubmit(fields)}/>
                <div className="ui segment" style={{borderColor: '#1178ab'}}>
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
                            <th>Bare Metal $/month</th>
                            <th>Windows License $/month</th>
                            <th>SGD License $/month</th>
                            <th>Management VM $/month</th>
                            <th>Total $/month</th>
                            <th>Total $/month/user</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Bare Metal Hosts">{this.state.BMHostsOverall}</td>
                            <td data-label="Bare Metal $/month">{this.state.costPerMonthBM}</td>
                            <td data-label="Windows License $/month">{this.state.costPerMonthSW_Windows}</td>
                            <td data-label="SGD License $/month">{this.state.costPerMonthSW_SGD}</td>
                            <td data-label="Management VM $/month">{this.state.costPerMonthManagementVM}</td>
                            <td data-label="Total $/month">{this.state.totalPerMonth}</td>
                            <td data-label="Total $/month/user">{this.state.totalPerUserPerMonth}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
