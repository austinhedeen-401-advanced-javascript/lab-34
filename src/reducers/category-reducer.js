export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map((value) => (value.id === payload.id ? payload : value));
    case 'CATEGORY_DELETE':
      return state.filter((value) => value.id !== payload.id);
    default:
      return state;
  }
};
