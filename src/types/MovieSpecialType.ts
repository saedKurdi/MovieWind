import { Company } from "./Company";
import { Genre } from "./Genre";

export type MovieSpecialType = {
  id: number;
  genres: Genre[];
  origin_country: string[];
  original_language: string;
  overview: string;
  poster_path: string;
  production_companies: Company[];
  release_date: string;
  runtime: number;
  status: string;
  original_title: string;
  vote_average: number;
  vote_count: number;
};
