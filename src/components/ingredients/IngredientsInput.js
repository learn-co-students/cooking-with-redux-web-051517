import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createIngredient } from '../../actions/ingredients'

export class IngredientsInput extends Component {

  state = { name: '', calories: '' }

  handleName = (event) => this.setState({ name: event.target.value })
  handleCalories = (event) => this.setState({ calories: event.target.value })

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <p>
          <input type="text" onChange={this.handleName} placeholder="Ingredient name"/>
        </p>
        <p>
          <input type="text" onChange={this.handleCalories} placeholder="calories"/>
        </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch)
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
