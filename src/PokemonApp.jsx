// Importa useEffect de React para manejar efectos secundarios
import { useEffect } from "react";

// Importa hooks de react-redux para interactuar con Redux
import { useDispatch, useSelector } from "react-redux";

// Importa la acción getPokemons que obtiene los pokémons de la API
import { getPokemons } from "./store/slices/pokemon";

// Define el componente PokemonApp
export const PokemonApp = () => {
  // Extrae datos del estado de Redux usando useSelector
  // - isLoading: indica si está cargando datos
  // - pokemons: array de pokémons (con valor por defecto [] si es undefined)
  // - page: número de página actual
  const {
    isLoading,
    pokemons = [], // Valor por defecto para evitar errores
    page,
  } = useSelector((state) => state.pokemon);

  // Obtiene la función dispatch para enviar acciones a Redux
  const dispatch = useDispatch();

  // Efecto que se ejecuta al montar el componente (dependencias vacías [])
  useEffect(() => {
    // Dispara la acción para obtener los primeros pokémons (página 0)
    dispatch(getPokemons(0));
  }, []); // El array vacío asegura que solo se ejecute una vez

  // Renderiza la interfaz
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      {/* Muestra el estado de carga */}
      <span>Loading: {isLoading ? "True" : "False"}</span>

      {/* Lista de pokémons */}
      <ul>
        {pokemons.map(({ name }) => (
          // Cada pokémon se muestra como un item de lista
          // key es necesaria para ayudar a React a identificar cada elemento
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* Botón para cargar más pokémons */}
      <button
        disabled={isLoading} // Se deshabilita durante la carga
        onClick={() => {
          // Al hacer click, obtiene más pokémons usando la página actual
          dispatch(getPokemons(page));
        }}
      >
        Next {/* Texto del botón */}
      </button>
    </>
  );
};
