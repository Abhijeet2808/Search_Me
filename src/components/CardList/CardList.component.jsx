import React, { Component } from "react";
import Card from "../Card/Card.component";
import "./CardList.styles.css";

class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div id="card-list-container">
        {users.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default CardList;
