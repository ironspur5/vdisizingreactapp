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
        customDisk: ""
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

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                <Form.Input

                            name="numPowerUsers"
                            type="number"
                            label="# Users"
                            placeholder="# Users"
                            value={this.state.numPowerUsers}
                            onChange={e => this.change(e)}
                />
                <Form.Input data-tooltip="Heavy Resource Consumption" data-position="top left"
                    label="User Type"
                    value="Power"
                    placeholder="Last name"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    label="# CPUs/User"
                    value="2"
                    type="number"
                    placeholder="CPUs/User"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    type="number"
                    value="8"
                    label="RAM/User (GB)"
                    placeholder="RAM/User"
                    onChange={e => this.change(e)}
                />
                <Form.Input
                    type="number"
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
                        placeholder="# Users"
                        value={this.state.numKnowledgeUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Typical Resource Consumption" data-position="top left"
                                value="Knowledge"
                                placeholder="Last name"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="1"
                        placeholder="CPUs/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="4"
                        placeholder="RAM/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="100"
                        placeholder="Disk/User"
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        name="numTaskUsers"
                        type="number"
                        placeholder="# Users"
                        value={this.state.numTaskUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Light Resource Consumption" data-position="top left"
                                value="Task"
                                placeholder="Last name"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="1"
                        placeholder="CPUs/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="2"
                        placeholder="RAM/User"
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        type="number"
                        value="100"
                        placeholder="Disk/User"
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        name="numCustomUsers"
                        type="number"
                        placeholder="# Users"
                        value={this.state.numCustomUsers}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                value="Custom"
                                placeholder="Last name"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customCPUs"
                        type="number"
                        placeholder="CPUs/User"
                        value={this.state.customCPUs}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM"
                        type="number"
                        placeholder="RAM/User"
                        value={this.state.customRAM}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk"
                        type="number"
                        placeholder="Disk/User"
                        value={this.state.customDisk}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>



                <Button onClick={e => this.onSubmit(e)}>Get Estimate</Button>

            </Form>
        );
    }
}