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
    case "GET" :
      return state;
    default:
      return state;
  }
}