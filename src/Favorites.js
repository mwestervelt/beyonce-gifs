import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {

mappedBeys = () => {
  return this.props.beyImages.map(bey => <BeyCard key={bey.id} bey={bey} handleFavorite={this.props.handleFavorite}/>)
}

  render() {
    return (<div>
      <h1>FaveBeys</h1><br/><br/>
      <div className = "ui centered cards">
        {this.mappedBeys()}
      </div>
      </div>
    );
  }
}
