import { useState } from "react";
import useUsers from "../hooks/useUsers";

const Repositories = ({ repos }) => {
  const { setLikedRepos, likedRepos } = useUsers();

  const handleClick = ({ name, description, owner, id }) => {
    const findRepo = likedRepos.find((repo) => {
      return repo.id === id;
    });

    if (findRepo) return alert("Ya Agregaste este Repositorio");

    setLikedRepos((prevState) => [
      ...prevState,
      { name, description, owner, id },
    ]);
  };

  return (
    <div className="mt-2 p-2 bg-gray-50 border  ">
      <h1 className="font-bold text-xl capitalize">{repos.name}</h1>
      <p>{repos.description}</p>
      <p>
        <span className="font-bold">Technologies: </span>
        <i>{repos.language}</i>
      </p>
      <button
        onClick={() => handleClick(repos)}
        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
      >
        Agregar a tu lista
      </button>
    </div>
  );
};

export default Repositories;
