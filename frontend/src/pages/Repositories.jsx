import React from "react";
import useUsers from "../hooks/useUsers";

const Repositories = () => {
  const { likedRepos, setLikedRepos } = useUsers();
  console.log(likedRepos);

  const handleDelete = (id) => {
    setLikedRepos((prevState) => {
      console.log(prevState);
      return prevState.filter((repo) => repo.id !== id);
    });
  };

  return (
    <>
      {likedRepos.length === 0 ? (
        <h1 className="font-bold text-2xl uppercase ">
          No tienes repositorios agregados, comienza agregando unos
        </h1>
      ) : (
        likedRepos.map((repo) => (
          <div className="mt-2 p-2 bg-gray-50 border">
            <h1 className="font-bold capitalize">{repo.name}</h1>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            <button
              onClick={() => handleDelete(repo.id)}
              className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default Repositories;