import React, { Component } from 'react';
import { recipeFormAddIngredient } from '../../actions/ingredients'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class AddIngredient extends Component {

  handleOnClick = () => this.props.recipeFormAddIngredient(this.props.id)

  render(){
    return(
      <div>
        <button onClick={this.handleOnClick}>{this.props.name}</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ recipeFormAddIngredient: recipeFormAddIngredient }, dispatch)
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)
