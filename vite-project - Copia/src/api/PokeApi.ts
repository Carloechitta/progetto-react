const BASEURL = "https://pokeapi.co/api/v2/";

export const getPokeList = async (): Promise<PokemonListApiResponse> => {
  try {
    const res = await fetch(BASEURL + "pokemon");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    throw new Error("Unexpected API Error");
  }
};

export const getPokeDetail = async (nome: string): Promise<Pokemon> => {
    try {
        const res = await fetch(BASEURL + "pokemon/" + nome); 
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      } catch (error) {
        throw new Error("Unexpected API Error");
    }
}