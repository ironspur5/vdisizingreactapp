import React, {Component} from 'react'
import {
    Button,
    Form
} from 'semantic-ui-react'


export default class FormExampleFieldControl extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            shown: true,

            numPowerUsers: 0,
            numKnowledgeUsers: 0,
            numTaskUsers: 0,

            numCustomUsers: 0,
            customCPUs: 0,
            customRAM: 0,
            customDisk: 0,

            numCustomUsers2: 0,
            customCPUs2: 0,
            customRAM2: 0,
            customDisk2: 0,

            numCustomUsers3: 0,
            customCPUs3: 0,
            customRAM3: 0,
            customDisk3: 0,

            numCustomUsers4: 0,
            customCPUs4: 0,
            customRAM4: 0,
            customDisk4: 0
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
        const hidden = {
            //display: this.state.shown ? "none" : "block",
            visibility: this.state.shown ? "hidden" : "visible",
            height: this.state.shown ? "0px" : "40px",
            marginBottom: this.state.shown ? "0px" : "12px",
            marginTop: this.state.shown ? "0px" : "12px"
        };
        return (
            <Form className="ui segment" style={{borderColor: '#1178ab'}}>
                <Form.Group widths='equal'>
                    <Form.Input
                        name="numPowerUsers"
                        type="number"
                        min="0"
                        label="# Users"
                        placeholder="# Users"
                        value={this.setState.numPowerUsers}
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
                        value={this.setState.numKnowledgeUsers}
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
                        value={this.setState.numTaskUsers}
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
                        value={this.setState.numCustomUsers}
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
                        placeholder="0"
                        value={this.setState.customCPUs}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.setState.customRAM}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.setState.customDisk}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>


                <Form.Group widths='equal' style={hidden}>
                    <Form.Input
                        name="numCustomUsers2"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.setState.numCustomUsers2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customCPUs2"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={this.setState.customCPUs2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM2"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.setState.customRAM2}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk2"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.setState.customDisk2}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group widths='equal' style={hidden}>
                    <Form.Input
                        name="numCustomUsers3"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.setState.numCustomUsers3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customCPUs3"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={this.setState.customCPUs3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM3"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.setState.customRAM3}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk3"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.setState.customDisk3}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Form.Group style={hidden} widths='equal'>
                    <Form.Input
                        name="numCustomUsers4"
                        type="number"
                        min="0"
                        placeholder="# Users"
                        value={this.setState.numCustomUsers4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input data-tooltip="Custom Resource Consumption" data-position="top left"
                                placeholder="Custom"
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customCPUs4"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={this.setState.customCPUs4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customRAM4"
                        type="number"
                        min="0"
                        placeholder="RAM/User"
                        value={this.setState.customRAM4}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="customDisk4"
                        type="number"
                        min="0"
                        placeholder="Disk/User"
                        value={this.setState.customDisk4}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <button className="circular ui button" data-tooltip="Show/hide more inputs"
                        data-position="top left" onClick={this.toggle.bind(this)}>+/-
                </button>

                <div className="ui divider"></div>

                <Button style={{backgroundColor: '#cad9de'}} onClick={e => this.onSubmit(e)}>Get Estimate</Button>

            </Form>
        );
    }
}