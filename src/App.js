import React, { Component } from 'react';
import Url from './Url'
import AddUrl from './AddUrl'



class App extends Component {
  state = {
    urls: []
  }
  addUrl = (url) => {
    url.shortUrl = Math.random();
    let urls = [...this.state.urls,{userId : url.userId, shortUrl: url.shortUrl}];
    this.setState({
      urls
    });
  }

  componentDidMount() {
   fetch('http://localhost:8080/tinyurl')
   .then(response => response.json())
   .then(urls  => this.setState({ urls }));
   console.log(this.state);
  }
  deleteUrl = (shortUrl, userId) => {
    console.log(shortUrl, userId);
    let urls = this.state.urls.filter(url => {
      return (url.shortUrl !== shortUrl || url.userId !== userId)
    });
    console.log(urls);
    this.setState({
      urls
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Tiny-Url App</h1>
        <Url urls={this.state.urls} deleteUrl={this.deleteUrl} />
        <AddUrl addUrl = {this.addUrl} />
        
      </div>
    );
  }
}

export default App;
