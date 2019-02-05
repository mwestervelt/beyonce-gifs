import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import AddBeyForm from './AddBeyForm'


class App extends Component {

state= {
  beyImages: [],
  favorites: [],
  searchTerm: "",
}

componentDidMount() {
  const beyURL = "http://localhost:3000/beyImages"
  fetch(beyURL)
    .then(response => response.json())
    .then(beyData => {
      this.setState({
        beyImages: beyData
      })
    })
}

addBey = (beyObj) => {
  const beyURL = "http://localhost:3000/beyImages"
  fetch(beyURL, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(beyObj)
  })
  .then(response => response.json())
  .then(bey => {
    const updatedBeyArray = [...this.state.beyImages, beyObj]
    this.setState({
      beyImages: updatedBeyArray
    })
  })
}

addWizard =(wizardObj) => {
  fetch("http://localhost:3001/characters/", {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(wizardObj)
  })
  .then(res => res.json())
  .then(wizard => {
    const newArray = [...this.state.characters, wizard]
    this.setState({
      characters: newArray
    })
  })
}

handleFavorite = (beyObj) => {
  const newArray = [...this.state.favorites, beyObj]
  this.setState({
    favorites: newArray
  })
}

removeFromFavorites = (clickedBey) => {
  clickedBey.favorite = !clickedBey.favorite;
  let newFavs = this.state.favorites.filter(bey => bey.id !== clickedBey.id);
  this.setState({
    beyImages: [...this.state.beyImages],
    favorites: newFavs
  })
}

filteredBeys = () => {
  return this.state.beyImages.filter(bey => {
    return bey.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })
}

handleChange = (event) => {
   this.setState({
     [event.target.name] : event.target.value
   })
 }

  render() {
    return (

      <div>
        <nav><br/>
        <div className="ui search">
          <div className="ui icon input">
          <input
            value={this.state.searchTerm}
            onChange={this.handleChange}
            className="prompt"
            type="text"
            name="searchTerm"
            placeholder="Find Beys" />
          <i className="search icon"></i>
          </div> <br/><br/>
        <AddBeyForm addBey={this.addBey}/>

      </div><br/></nav>
      <BeyContainer className="ui cards"
        beyImages={this.filteredBeys()} handleFavorite={this.handleFavorite}/>
      <br/><br/><hr/><br/><br/>
      <Favorites className="ui cards"
        beyImages={this.state.favorites} handleFavorite={this.removeFromFavorites}/>
      </div>
    )
  }
}

export default App;
