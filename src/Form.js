import React, { Component } from 'react'
import {
    Button,
    Select,
    Header,
    Image,
    Dropdown,
    Form
} from 'semantic-ui-react'

export default class FormExampleFieldControl extends Component  {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
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
                    <Form.Input data-tooltip="VM = Dedicated, Session = Shared Instance" data-position="top left"
                                name="firstName"
                                label="First Name"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="lastName"
                        label="First Name"
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="username"
                        label="First Name"
                        value="power"
                        onChange={e => this.change(e)}
                        readOnly="power"
                    />
                    <Form.Input
                        name="email"
                        label="First Name"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <Form.Input
                        name="password"
                        label="First Name"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                    />
                </Form.Group>

                <Button onClick={e => this.onSubmit(e)}>Get Estimate</Button>

            </Form>
        );
    }
}