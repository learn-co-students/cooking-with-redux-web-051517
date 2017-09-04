import React, { Component } from 'react';
import { Link, Route } from 'react-router'
import { RecipesInput } from './components/recipes/RecipesInput'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/recipes/new">Create Recipe </Link>
      </div>
    );
  }
}

export default App;
