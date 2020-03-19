const ADD_LOCATION = 'ADD_LOCATION';
const REMOVE_LOCATION = 'REMOVE_LOCATION';

export const addLocation = (
  id, latitude, longitude, timezone, temperature, appTemperature, status, icon
) => ({
  type: ADD_LOCATION,
  payload: {
    id, latitude, longitude, timezone, temperature, appTemperature, status, icon
  }
});

export const removeLocation = (
  id
) => ({
  type: REMOVE_LOCATION,
  payload: {
    id
  }
});