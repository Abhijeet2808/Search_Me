import "./App.css";
import React, { Component } from "react";
//User define components
import Search from "./components/Search/Search.component.jsx";
// import Card from "./components/Card/Card.component.jsx";
import CardList from "./components/CardList/CardList.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchField: "",
    };
  }
  userApi = "https://jsonplaceholder.typicode.com/users";

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
  //on change listner
  onSearchFieldChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const { users, searchField } = this.state;

    //filtering users
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    //console.log(filteredUsers);
    return (
      <div>
        <h1 id="header">Search Me</h1>
        <Search
          searchField={searchField}
          onSearchFieldChange={this.onSearchFieldChange}
        />
        {this.state.users.length === 0 ? (
          <h1> Loading... </h1>
        ) : (
          <CardList users={filteredUsers} />
        )}
      </div>
    );
  }
}
export default App;
