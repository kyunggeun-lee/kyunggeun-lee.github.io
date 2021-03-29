import React, { Component } from 'react';
import { Header, Divider, Container } from "semantic-ui-react";
import Superman from '../resources/superman.jpg';

class Profile extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">
          Kyunggeun Lee
        </Header>
        <img src={Superman} />
      </Container>
    );
  }
}

export default Profile;
