import React, { Component } from 'react'
import {
    Button,
    Form
} from 'semantic-ui-react'

export default class FormExampleFieldControl extends Component  {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",

        numPowerUsers: "",
        numKnowledgeUsers: "",
        numTaskUsers: "",
        numCustomUsers: "",

        customCPUs: "",
        customRAM: "",
        customDisk: "",

        customAdditional: []
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    addRow = e => {

    };

    render() {
        return (
            <Form className="ui segment" style={{borderColor:'#1178ab'}}>
                <Form.Group widths='equal' >
                <Form.Input
                            name="numPowerUsers"
                            type="number"
                            min="0"
                            label="# Users"
                            placeholder="# Users"
                            value={this.state.numPowerUsers}
                            onChange={e => this.change(e)}
                />
                <Form.Input data-tooltip="Heavy Resource Consumption" data-position="top left"
                    label="User Type"
                    readOnly
                    value="Power"
                    placeholder="Last name"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    label="# CPUs/User"
                    readOnly
                    value="2"
                    placeholder="CPUs/User"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    readOnly
                    value="8"
                    label="RAM/User (GB)"
                    placeholder="RAM/User"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    readOnly
                    value="150"
                    label="Disk/User (GB)"
                    placeholder="Disk/User"
                    onChange={e => this.change(e)}
                />
            </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        name="numKnowledgeUsers"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numKnowledgeUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Typical Resource Consumption" data-position="top left"
                                value="Knowledge"
                                readOnly
                                placeholder="Last name"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input

                        value="1"
                        readOnly
                        placeholder="CPUs/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        value="4"
                        readOnly
                        placeholder="RAM/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        value="100"
                        readOnly
                        placeholder="Disk/User"
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        name="numTaskUsers"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numTaskUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Light Resource Consumption" data-position="top left"
                                value="Task"
                                readOnly
                                placeholder="Last name"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        value="1"
                        readOnly
                        placeholder="CPUs/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        value="2"
                        readOnly
                        placeholder="RAM/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        value="100"
                        readOnly
                        placeholder="Disk/User"
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        name="numCustomUsers"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numCustomUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"

                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customCPUs"
                        type="number"
                        min="0"
                        placeholder="CPUs/User"
                        value={this.state.customCPUs}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.state.customRAM}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.state.customDisk}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>


                <button style={{backgroundColor: '#cad9de'}} className="circular ui button" data-tooltip="Add another input" data-position="top left" onClick={e => this.addRow(e)}>+</button>


                <div className="ui divider"></div>

                <Button style={{backgroundColor: '#cad9de'}} onClick={e => this.onSubmit(e)}>Get Estimate</Button>

            </Form>
        );
    }
}