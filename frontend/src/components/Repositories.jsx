import useUsers from "../hooks/useUsers";
import { useState } from "react";

const Repositories = ({ repos }) => {
  const { setLikedRepos, likedRepos } = useUsers();

  const [clicked, setClicked] = useState(false);

  const handleClick = ({ name, description, id }) => {
    const findRepo = likedRepos.find((repo) => {
      return repo.id === id;
    });

    if (findRepo) return alert("Ya Agregaste este Repositorio");

    setLikedRepos((prevState) => [...prevState, { name, description, id }]);
    setClicked(true);
  };

  return (
    <div className="mt-2 p-2 bg-gray-50 border flex justify-between ">
      <div key={repos.id}>
        <h1 className="font-bold text-xl capitalize">
          Repository Name: {repos.name}
        </h1>
        <p>Description: {repos.description}</p>
        <p>
          <span className="font-bold">Technologies: </span>
          <i>{repos.language}</i>
        </p>
      </div>
      <button
        onClick={() => handleClick(repos)}
        className="text-sm px-5 py-3 w-full md:w-auto sm:w-1/2 rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
      >
        {!clicked ? "Agregar a tu lista" : "Agregado a la lista"}
      </button>
    </div>
  );
};

export default Repositories;
