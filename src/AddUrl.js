import React, { Component } from 'react'

class AddUrl extends Component {
  state = {
    userId: null,
    shortUrl: null,
    originalUrl: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => { 
    e.preventDefault();
    var data = {"originalUrl" : this.state.originalUrl, "userId" : this.state.userId};
    console.log(data);
    fetch('http://localhost:8080/tinyurl/', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Expose-Headers" : "Location"
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then (response => {
    console.log(response.tinyUrl)
    this.setState({
      shortUrl : 'http://'+response.tinyUrl
    });
    this.props.addUrl(this.state);
  }
    );

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="originalUrl">OriginalUrl:</label>
          <input type="text" id="originalUrl" onChange={this.handleChange} />
          <label htmlFor="userId">UserId:</label>
          <input type="text" id="userId" onChange={this.handleChange} />
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default AddUrl