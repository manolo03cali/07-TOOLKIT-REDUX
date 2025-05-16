// Importa la función createSlice de Redux Toolkit que permite crear un "slice" del store
import { createSlice } from "@reduxjs/toolkit";

// Crea y exporta un slice llamado "pokemons" usando createSlice
export const pokemonSlice = createSlice({
  // Nombre del slice (se usará como prefijo para las acciones)
  name: "pokemons",

  // Estado inicial del slice con tres propiedades:
  initialState: {
    page: 0, // Página actual de pokémons (para paginación)
    pokemons: [], // Array donde se almacenarán los pokémons
    isLoading: false, // Bandera para saber si está cargando datos
  },

  // Objeto de reducers (funciones que modifican el estado)
  reducers: {
    // Reducer para indicar que comenzó la carga de pokémons
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true; // Establece isLoading a true
    },

    // Reducer para guardar los pokémons obtenidos
    setPokemons: (state, action) => {
      state.isLoading = false; // Termina la carga
      // Actualiza la página con el valor del payload
      state.page = action.payload.page;
      // Guarda el array de pokémons del payload en el estado
      state.pokemons = action.payload.pokemons;
    },
  },
});

// Exporta las acciones (action creators) generadas automáticamente
// Estas funciones se usan para despachar las acciones correspondientes
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

// Exporta por defecto el reducer generado para usarlo en el store
export default pokemonSlice.reducer;
