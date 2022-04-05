import React from "react";
import useUsers from "../hooks/useUsers";

const Repositories = () => {
  const { likedRepos, setLikedRepos } = useUsers();

  // Deleting the repos
  const handleDelete = (id) => {
    setLikedRepos((prevState) => {
      return prevState.filter((repo) => repo.id !== id);
    });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-10">
        Here you can see your favorite{" "}
        <span className="text-amber-500">Repositories!</span> :D
      </h1>
      {likedRepos.length === 0 ? (
        <h1 className="text-center font-bold text-2xl uppercase ">
          You don't have repositories yet, add some and come back
        </h1>
      ) : (
        likedRepos.map((repo) => (
          <div
            key={repo.id}
            className="mt-2 p-2 bg-gray-50 border flex justify-between"
          >
            <div>
              <h1 className="font-bold capitalize">Name: {repo.name}</h1>
              <p>
                <span className="font-bold capitalize">Description: </span>
                {repo.description ? repo.description : "No description founded"}
              </p>
              <p>
                <span className="font-bold capitalize">Technologies: </span>
                <i>{repo.language}</i>
              </p>
              <p>
                <span className="font-bold capitalize">Owner: </span>{" "}
                {repo.owner.login}
              </p>
            </div>

            <button
              onClick={() => handleDelete(repo.id)}
              className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default Repositories;
