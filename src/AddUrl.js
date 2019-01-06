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
    //console.log(this.state);
    this.props.addUrl(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="originalUrl">OriginalUrl:</label>
          <input type="text" id="originalUrl" onChange={this.handleChange} />
          <label htmlFor="userId">UserId:</label>
          <input type="text" id="userId" onChange={this.handleChange} />
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default AddUrl