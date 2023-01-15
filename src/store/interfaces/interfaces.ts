export interface Abilities {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}
[];

export interface Form {
  name: string;
  url: string;
}
[];

export interface GameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}
[];

export interface HeldItems {
  item: {
    name: string;
    url: string;
  };
  version_details: [
    {
      rarity: 0;
      version: {
        name: '';
        url: '';
      };
    }
  ];
}
[];

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<VersionGroupDetail>;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  other?: {
    dream_world: {
      back_default?: string | null;
      back_female?: string | null;
      back_shiny?: string | null;
      back_shiny_female?: string | null;
      front_default?: string | null;
      front_female?: string | null;
      front_shiny?: string | null;
      front_shiny_female?: string | null;
    };
    home: {
      back_default?: string | null;
      back_female?: string | null;
      back_shiny?: string | null;
      back_shiny_female?: string | null;
      front_default?: string | null;
      front_female?: string | null;
      front_shiny?: string | null;
      front_shiny_female?: string | null;
    };
    official_artwork: {
      back_default?: string | null;
      back_female?: string | null;
      back_shiny?: string | null;
      back_shiny_female?: string | null;
      front_default?: string | null;
      front_female?: string | null;
      front_shiny?: string | null;
      front_shiny_female?: string | null;
    };
  };
  versions?: {};
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
[];

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PastTypes {
  generation: {
    name: string;
    url: string;
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}
