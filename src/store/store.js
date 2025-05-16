// Importa la función configureStore de Redux Toolkit
// Esta función simplifica la creación del store de Redux
import { configureStore } from "@reduxjs/toolkit";

// Importa los slices (porciones del estado) que hemos creado
import { counterSlice } from "./slices/counter"; // Slice para contador
import { pokemonSlice } from "./slices/pokemon"; // Slice para pokémons
import { todosApi } from "./apis/todosApi";

// Crea y exporta el store de Redux
export const store = configureStore({
  // Objeto reducer que combina todos los reducers de la aplicación
  reducer: {
    // Asigna cada slice a una clave en el estado global
    counter: counterSlice.reducer, // El estado del contador estará en state.counter
    pokemon: pokemonSlice.reducer, // El estado de pokémons estará en state.pokemon
    [todosApi.reducerPath]: todosApi.reducer,
    // Se pueden añadir más reducers/slices aquí según sea necesario
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
  // Nota: configureStore automáticamente incluye:
  // - El middleware de Redux Thunk para acciones asíncronas
  // - La integración con Redux DevTools Extension
  // - La configuración básica para desarrollo/producción
});
