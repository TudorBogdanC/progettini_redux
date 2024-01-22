{/* Sto creando uno slice, ovvero sto utilizzando uno dei tool di Redux Toolkit in modo da semplificare
la creazione di un reducer. Questo slice non è altro che una parte ('fetta') dello stato del mio componente
 con al suo interno la funzione del reducer e le eventuali azioni 
ad esso associate.

 Inizialmente si va a dichiarare lo stato iniziale della constante dove andranno a finire i dati relativi al meteo
 scaricati dall'API. Viene assegnato un nome a questo stato iniziale e in seguito vengono dichiarati i reducers con
 le azioni specifiche ad aggiornare il payload via l'azione di dispatch che sarà in seguito enunciata.

*/}

import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    forecast: null,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
    setForecastData: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setWeatherData, setForecastData } = weatherSlice.actions;
export default weatherSlice.reducer;

