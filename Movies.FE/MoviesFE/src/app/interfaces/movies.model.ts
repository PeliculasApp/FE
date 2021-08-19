export interface Movie {
  id: number;
  name: string;
  description: string;
  background: string;
  genres: Genre[];
  actors: Actor[];
}

export interface Actor {
  id: number;
  name: string;
  background: string;
}

export interface Genre {
  id: number;
  name: string;
}