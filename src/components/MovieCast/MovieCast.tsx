import { useEffect, useState } from "react";
import { useMoviesContext } from "../../contexts/MoviesContext";
import { ActorList, Actor, ActorImage, ActorNameAndRole } from "./styles";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Actorr from "../../types/Actor";
export default function MovieCast() {
  const { getMovieCast, isLoading } = useMoviesContext();
  const [actors, setActors] = useState<Actorr[]>([]);
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    getMovieCast(Number(movieId)).then((actors) => {
      setActors(actors);
    });
  }, []);

  return (
    <ActorList>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {actors.map((a) => (
            <Actor key={actors.indexOf(a)}>
              <ActorImage
                src={
                  a.profile_path === null
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_hJ9E6jOOsQ4j5wjH3Y4BKZaVTURf0BOug&s"
                    : `https://image.tmdb.org/t/p/w500${a?.profile_path}`
                }
              />
              <ActorNameAndRole>{a.original_name}</ActorNameAndRole>
            </Actor>
          ))}
        </>
      )}
    </ActorList>
  );
}
