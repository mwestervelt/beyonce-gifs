import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

mappedBeys = () => {
  return this.props.beyImages.map(bey => <BeyCard key={bey.id} bey={bey} handleFavorite={this.props.handleFavorite} />)
}

  render() {
    // console.log(this.props.beyImages);
    return (<div>
      <h1>BeyIndex</h1><br/><br/>
      
      <div className = "ui centered cards">
        {this.mappedBeys()}
      </div>
      </div>
    );
  }
}

export default BeyContainer;
