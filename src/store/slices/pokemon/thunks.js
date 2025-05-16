// Importa la instancia configurada de Axios (pokemonApi) desde la ruta especificada
import { pokemonApi } from "../../../api/pokemonApi";

// Importa las acciones (action creators) del slice de Redux
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

// Define y exporta la función getPokemons que recibe un parámetro page con valor por defecto 0
export const getPokemons = (page = 0) => {
  // Retorna una función asíncrona que recibe dispatch y getState de Redux Thunk
  return async (dispatch, getState) => {
    // Dispara la acción startLoadingPokemons para indicar que comenzó la carga
    dispatch(startLoadingPokemons());

    // Realiza la petición HTTP usando Axios (pokemonApi ya tiene la baseURL configurada)
    // La URL consulta pokemons con límite de 10 y offset calculado en base a la página
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    // Dispara la acción setPokemons con los pokemons obtenidos y la nueva página
    // data.results contiene el array de pokemons
    // page + 1 actualiza el número de página para la próxima carga
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
