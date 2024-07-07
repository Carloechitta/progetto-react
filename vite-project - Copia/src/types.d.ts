type PokemonListApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
  };
  
  type Pokemon = {
    abilities: [
      {
        ability: {
          name: string;
          url: string;
        };
        is_hidden: boolean;
        slot: number;
      }
    ];
    base_experience: number;
    cries: {
      latest: string;
      legacy: string;
    };
    forms: [
      {
        name: string;
        url: string;
      }
    ];
    game_indices: [
      {
        game_index: number;
        version: {
          name: string;
          url: string;
        };
      }
    ];
    height: number;
    held_items: [
      {
        item: {
          name: string;
          url: string;
        };
        version_details: [
          {
            rarity: number;
            version: {
              name: string;
              url: string;
            };
          }
        ];
      }
    ];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [
      {
        move: {
          name: string;
          url: string;
        };
        version_group_details: [
          {
            level_learned_at: number;
            move_learn_method: {
              name: string;
              url: string;
            };
            version_group: {
              name: string;
              url: string;
            };
          }
        ];
      }
    ];
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: {
      name: string;
      url: string;
    };
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  };
  
  interface SpriteVariants {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  }
  
  interface OtherSprites {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
    showdown: SpriteVariants;
  }
  
  interface GenerationSprites {
    back_default: string;
    back_gray?: string;
    back_transparent?: string;
    front_default: string;
    front_gray?: string;
    front_transparent?: string;
  }
  
  interface CrystalSprites extends GenerationSprites {
    back_shiny: string;
    back_shiny_transparent: string;
    front_shiny: string;
    front_shiny_transparent: string;
  }
  
  interface AnimatedSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  }
  
  interface GenerationISprites {
    "red-blue": GenerationSprites;
    yellow: GenerationSprites;
  }
  
  interface GenerationIISprites {
    crystal: CrystalSprites;
    gold: GenerationSprites;
    silver: GenerationSprites;
  }
  
  interface GenerationIIISprites {
    emerald: {
      front_default: string;
      front_shiny: string;
    };
    "firered-leafgreen": GenerationSprites;
    "ruby-sapphire": GenerationSprites;
  }
  
  interface GenerationIVSprites {
    "diamond-pearl": SpriteVariants;
    "heartgold-soulsilver": SpriteVariants;
    platinum: SpriteVariants;
  }
  
  interface GenerationVSprites {
    "black-white": {
      animated: AnimatedSprites;
    } & SpriteVariants;
  }
  
  interface GenerationVISprites {
    "omegaruby-alphasapphire": {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    "x-y": {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  }
  
  interface GenerationVIISprites {
    icons: {
      front_default: string;
      front_female: string | null;
    };
    "ultra-sun-ultra-moon": {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  }
  
  interface GenerationVIIISprites {
    icons: {
      front_default: string;
      front_female: string | null;
    };
  }
  
  interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: OtherSprites;
    versions: {
      "generation-i": GenerationISprites;
      "generation-ii": GenerationIISprites;
      "generation-iii": GenerationIIISprites;
      "generation-iv": GenerationIVSprites;
      "generation-v": GenerationVSprites;
      "generation-vi": GenerationVISprites;
      "generation-vii": GenerationVIISprites;
      "generation-viii": GenerationVIIISprites;
    };
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }