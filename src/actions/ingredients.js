export const createIngredient = (ingredient) => {
  return {
    type: 'CREATE_INGREDIENT',
    payload: ingredient
  }
}

export const recipeFormAddIngredient = (ingredientId) => {
  return { type: 'RECIPE_FORM_ADD_INGREDIENT', payload: ingredientId }
}
