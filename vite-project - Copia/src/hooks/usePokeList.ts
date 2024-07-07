import { useEffect, useState } from "react";
import { getPokeList } from "../api/PokeApi";

const usePokeList = () => {
  const [pokemon, setPokemon] = useState<PokemonListApiResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getPokeList()
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },);
  return { pokemon, isLoading, error };
};

export default usePokeList;