import uuidV4  from 'uuid/v4';

export default function recipes(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      let ingredient = Object.assign({}, action.payload, { id: uuidV4() })
      return state.concat(ingredient)

    default:
      return state;
  }
}
