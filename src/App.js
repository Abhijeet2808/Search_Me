import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  userApi = "https://jsonplaceholder.typicode.com/users";
  imgApi = "";

  //LifeCycle Method

  componentDidMount() {
    fetch(this.userApi)
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          users: users,
        });
      });
  }
  render() {
    return <div>Search Me</div>;
  }
}
export default App;
