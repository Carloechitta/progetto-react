import { useEffect, useState } from "react";
import usePokeDetail from "../hooks/usePokeDetail";

const DetailPage = () => {
    const { pokemon, isLoading } = usePokeDetail();
    const [isRotated, setIsRotated] = useState<string | null>(null)

    useEffect(() => {
        if (pokemon?.sprites.front_shiny) {
            setIsRotated(pokemon.sprites.front_shiny)
        }
    }, [pokemon])

    const handleRotateClick = () => {
        if (pokemon) {
            if (isRotated === pokemon?.sprites.front_shiny) {
                setIsRotated(pokemon?.sprites.back_shiny)
            } else {
                setIsRotated(pokemon?.sprites.front_shiny)
            }
        }
    }

    if (isLoading) return <h1 className="text-center">Loading...</h1>;
    if (pokemon?.name)
        return (
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h1 className="mb-5">{pokemon.name.toUpperCase()} DETAIL</h1>
                <div className="card" style={{ width: "18rem" }}>
                    {isRotated && (<img src={isRotated} alt={pokemon.name} />)}
                    <div className="card-body">
                        <h5 className="card-title text-center">{pokemon.name.toUpperCase()}</h5>
                        <p className="card-text">
                            {pokemon.abilities.map((ability) => (
                                <li className="text-center" style={{ listStyle: "none" }} key={ability.ability.name}>{ability.ability.name}
                                </li>
                            ))}
                        </p>
                        <div className="d-flex w-100 justify-content-center">
                            <a className="btn btn-primary" onClick={handleRotateClick}>Rotate</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default DetailPage;