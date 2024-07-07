import { Link } from "react-router-dom";
import usePokeList from "../hooks/usePokeList";

const HomePage = () => {
    const { pokemon, isLoading } = usePokeList();
    if (isLoading) return <h1 className="text-center">Loading...</h1 >;
    if (pokemon?.results) return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="my-4">Pokemon List</h1>
            <div className="container">
                <div className="row">
                    {pokemon.results.map((poke) => (
                        <div className="col-6 mb-4" key={poke.name}>
                            <div className="list-group-item text-center">
                                <Link to={'/' + poke.name}>{poke.name}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage; 