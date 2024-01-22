
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weatherSlice'

{/* configuro lo store redux con il weatherReducer, 
nello specifico assegnerò al reducer il nome di weather e poi lo esporto */} 

const store = configureStore ({
  reducer: {
    weather: weatherReducer,          
  },
});

export default store;