import { combineReducers } from 'redux'
import recipes from './recipes'
import ingredients from './ingredients'
import recipeForm from './recipeForm'
import users from './users'


export default combineReducers({recipes: recipes, ingredients: ingredients, recipeForm: recipeForm, users: users})

// function reducer(){

// function reducer(state, action){
//   return {ingrdients: ingredients(state.ingredients, action), recipes: recipes}
// }
// function reducer(state, action){
//   {recipes: recipesReducer, ingredients: ingredientsReducer}
// function reducer(state = {recipes: []}, action){
//   switch (expression) {
//     case expression:
//
//       break;
//     default:
//
//   }
// }

// onSubmit={store.dispatch({type: 'ADD_RECIPE', payload: {name: this.state.name, calories: this.state.calories}})}
