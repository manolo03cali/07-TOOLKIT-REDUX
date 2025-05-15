import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getPokemons(0));
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>texto</li>
        <li>texto</li>
        <li>texto</li>
        <li>texto</li>
      </ul>
    </>
  );
};
