import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  // initialize state of this component
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          {/* this is our custom component rather than a standard TextInput. */}
          <Input
            placeholder="user@gmail.com"
            // label is rendered inside the input area
            label="Email"
            value={this.state.email}
            /* onChangeText callback (`email` is the key and value). */
            /* when we call setState, the component immediately re-renders. */
            /* when this happens, the value is now: this.state.email */
            onChangeText={email => this.setState({ email })}
            /* TextInput needs to have a defined size to render at all */
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            // `password` here is an arbitrary name
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
