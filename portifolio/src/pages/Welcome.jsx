import React from "react";
import Header from "../components/Header";

class Welcome extends React.Component {
  render() {
      return (
        <div>
            <Header />
      <div>
            <h1>Bem Vindo</h1>
        </div>
      </div>
    );
  }
}

export default Welcome;