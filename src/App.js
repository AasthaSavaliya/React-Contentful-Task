import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'

class App extends React.Component {
  state={
    articles: []
  }

  componentDidMount(){
    client.getEntries()
      .then((response) => {
        this.setState({
          articles: response.items
        })
    })
    .catch(console.error)
  }
  render(){
    return (
      <div className="App">
        <div class="container">
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles}/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}


export default App;
