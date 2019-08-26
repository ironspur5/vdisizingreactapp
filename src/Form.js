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

        numCustomUsers2: "",
        customCPUs2: "",
        customRAM2: "",
        customDisk2: "",

        numCustomUsers3: "",
        customCPUs3: "",
        customRAM3: "",
        customDisk3: "",

        numCustomUsers4: "",
        customCPUs4: "",
        customRAM4: "",
        customDisk4: "",
    };

    constructor(props) {
        super(props);
        this.state = {
            shown: true,
        };
    }


    toggle() {
        this.setState({
            shown: !this.state.shown,

        });
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };


    render() {
        const shown = {
            display: this.state.shown ? "block" : "none"
        };

        const hidden = {
            display: this.state.shown ? "none" : "block"
        }
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

                <Form.Group widths='equal'>
                    <Form.Input
                        style={ hidden }
                        name="numCustomUsers2"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numCustomUsers2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                style={ hidden }
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customCPUs"
                        type="number"
                        min="0"
                        placeholder="CPUs/User"
                        value={this.state.customCPUs2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customRAM"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.state.customRAM2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customDisk"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.state.customDisk2}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        style={ hidden }
                        name="numCustomUsers3"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numCustomUsers3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                style={ hidden }
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customCPUs"
                        type="number"
                        min="0"
                        placeholder="CPUs/User"
                        value={this.state.customCPUs3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customRAM"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.state.customRAM3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customDisk"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.state.customDisk3}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        style={ hidden }
                        name="numCustomUsers4"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.state.numCustomUsers4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                style={ hidden }
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customCPUs"
                        type="number"
                        min="0"
                        placeholder="CPUs/User"
                        value={this.state.customCPUs4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customRAM"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.state.customRAM4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        style={ hidden }
                        name="customDisk"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.state.customDisk4}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>


                <button style={shown} className="circular ui button" data-tooltip="Click to add 3 additional inputs" data-position="top left" onClick={this.toggle.bind(this)}>+</button>
                <button style={hidden} className="circular ui button" data-tooltip="Click to delete additional inputs" data-position="top left" onClick={this.toggle.bind(this)}>-</button>



                <div className="ui divider"></div>

                <Button style={{backgroundColor: '#cad9de'}} onClick={e => this.onSubmit(e)}>Get Estimate</Button>

            </Form>
        );
    }
}