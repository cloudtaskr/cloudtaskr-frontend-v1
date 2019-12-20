import React, { Component } from "react";
import { Container } from "react-bootstrap";

// Custom Components
import BackgroundWithOverlay from "../../Components/BackgroundWithOverlay/BackgroundWithOverlay";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Menu from "../../Components/Menu/Menu";

export default class Login extends Component {
  checkIfUser = () => {
    if (this.props.userObj) {
      this.props.history.push("/task");
    }
  };
  render() {
    this.checkIfUser();
    return (
      <>
        <Menu
          id="landingMenuSticky"
          {...this.props}
          logOut={this.props.logOut}
          setUser={this.props.setUser}
          fetchData={this.props.fetchData}
          setFlashMessage={this.props.setFlashMessage}
        />
        
          <BackgroundWithOverlay
            imgUrl="books-business-computer-connection-459654.jpg"
            alpha=".2"
          />

          <Container className="sign-up-container">
            <h1>Login</h1>
            <LoginForm {...this.props} formType="form" />
          </Container>
       
      </>
    );
  }
}