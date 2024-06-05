import { combineReducers } from 'redux';

// Importa el nuevo reducer para el gráfico de barras
const barChartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BAR_DATA':
      return action.payload;
    default:
      return state;
  }
};

// El reducer existente para manejar la lista de usuarios
const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// Combina ambos reducers
const rootReducer = combineReducers({
  usersData: usersReducer,
  barChartData: barChartReducer, // Nombre del nuevo reducer y su estado asociado
});

export default rootReducer;