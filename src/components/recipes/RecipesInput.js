import React, { Component } from 'react';
import { ConnectedRecipes } from './Recipes'
import { addRecipe } from '../../actions/recipes'
import { AddIngredients } from '../ingredients/AddIngredients'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class RecipesInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let recipe = Object.assign({}, this.state, { ingredientIds: this.props.selectedIngredients })
    this.props.addRecipe(recipe)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type='text'
              onChange={this.handleChange}
              placeholder='Recipe Name'
            />
          </p>
          <AddIngredients />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedIngredients: state.recipeForm.ingredientIds }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch)
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
