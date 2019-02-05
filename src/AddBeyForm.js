import React from "react";

class AddBeyForm extends React.Component {

  state= {
    name: "",
    img: "",
    favorite: false,
    showAddForm: false
  }

  handleFormClick = (e) => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    document.getElementById("bey-form").reset()
      this.props.addBey(this.state)
  }



  render(){
    return(
      <div>
      <button onClick={this.handleFormClick} className="ui button primary">Add Bey</button>
      {this.state.showAddForm ?
      <form id="bey-form" onSubmit={this.handleSubmit}>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/><br/>
        Gif:
        <input type="text" name="img" value={this.state.img} onChange={this.handleInput}/><br/>
        Favorite?:
        <input type="checkbox" name="favorite" value={this.state.favorite} onChange={this.handleInput}/><br/>
        <input className="ui button primary" type="submit" />
        <br/>
      </form> : "" }
      </div>
  )}
}

export default AddBeyForm
