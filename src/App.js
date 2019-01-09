import React, { Component } from 'react';
import Url from './Url'
import AddUrl from './AddUrl'



class App extends Component {
  state = {
    urls: []
  }
  addUrl = (url) => {
    let urls = [...this.state.urls,{userId : url.userId, shortUrl: url.shortUrl}];
    this.setState({
      urls
    });
  }

  componentDidMount() {
   fetch('http://localhost:8080/tinyurl')
   .then(response => response.json())
   .then(urls  => this.setState({ urls }));
  }
  
  deleteUrl = (shortUrl, userId) => {
    var n = shortUrl.lastIndexOf("/");
    var res = shortUrl.substring(n+1);
    return fetch('http://localhost:8080/tinyurl/'+ userId + '/' + res, {
      method: 'delete'
    }).then(response =>
      {
        if(response.status === 202){
      let urls = this.state.urls.filter(url => {
        return (url.shortUrl !== shortUrl || url.userId !== userId)
      });
      this.setState({
        urls
      });
    } else{
      alert("Failed to delete resources");
    }
    }
    );
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
