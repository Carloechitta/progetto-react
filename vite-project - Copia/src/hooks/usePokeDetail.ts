import { useEffect, useState } from "react";
import { getPokeDetail } from "../api/PokeApi";
import { useParams } from "react-router-dom";

const usePokeDetail = () => {
    const {nome} = useParams()

    let pokeName: string = "";
    if (nome) {
        pokeName = nome;
    }

    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getPokeDetail(pokeName)
        .then((data) => {
            setPokemon(data);
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    });
    return { pokemon, isLoading, error };
}

export default usePokeDetail; 