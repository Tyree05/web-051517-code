import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import ConnectedRecipesInput  from './components/recipes/RecipesInput'
import { ConnectedAddIngredients } from './components/ingredients/AddIngredients'
import ConnectedUsers from './components/users/Users'
export class App extends Component {
  render() {
    return (
      <div className="App">
        Some stuff
        <Link to="/recipes/new"> Make a recipe</Link>
        <Route path="/users" component={ConnectedUsers} />
        <Route path="/ingredients" component={ConnectedAddIngredients} />
        <Route path="/recipes/new" component={ConnectedRecipesInput} />
      </div>
    );
  }
}

export default App;
