import React, { Component } from "react";

class BeyCard extends Component {

  handleFav = () => (this.props.handleFavorite(this.props.bey));

  render() {
    return (
      <div className="ui card" onClick={this.handleFav}>
        <div className="content">
          <div className="header">{this.props.bey.name}{" "}
         </div>

        </div>
        <div className="image">
          <img alt="beygif" src={this.props.bey.img} />

          </div>
      </div>
    );
  }
}

export default BeyCard;
