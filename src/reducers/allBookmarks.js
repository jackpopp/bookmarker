import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case "ADD" :
      return [
        ...state,
        {
          id: action.id || uuid.v4(),
          title: action.title,
          uri: action.uri
        }
      ]
    default:
      return state;
  }
}