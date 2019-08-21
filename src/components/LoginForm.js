import React, {Component} from 'react';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
