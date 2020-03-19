const initialState = (localStorage.getItem('data') !== null)
  ? JSON.parse(localStorage.getItem('data'))
  : []

export const elementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      const elements = [
        ...state,
        {
          id: action.payload.id,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          timezone: action.payload.timezone,
          temperature: action.payload.temperature,
          appTemperature: action.payload.appTemperature,
          status: action.payload.status,
          icon: action.payload.icon
        }
      ];

      localStorage.setItem('data', JSON.stringify(elements));
      
      return elements;
    
    case 'REMOVE_LOCATION':
      (state.length <= 1) 
        ? state = []
        : state.splice(action.payload.id, 1)

      (state.length > 0)
        ? localStorage.setItem('data', JSON.stringify(state))
        : localStorage.removeItem('data')

      return [...state];
  }

  return state;
}