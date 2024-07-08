import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>HOME</h1>
      <button
        onClick={() => {
          navigate("/movies", {
            replace: true,
          });
        }}
      >
        To Movies{" "}
      </button>
    </>
  );
}
