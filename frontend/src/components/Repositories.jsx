import useUsers from "../hooks/useUsers";
import { useState } from "react";

const Repositories = ({ repos }) => {
  // Context values
  const { setLikedRepos, likedRepos } = useUsers();

  // States
  const [clicked, setClicked] = useState(false);

  // Handlers
  const handleClick = ({ name, description, id, language, owner }) => {
    const findRepo = likedRepos.find((repo) => {
      return repo.id === id;
    });

    // Validations
    if (findRepo) return alert("Ya Agregaste este Repositorio");

    setLikedRepos((prevState) => [
      ...prevState,
      { name, description, id, language, owner },
    ]);
    setClicked(true);
  };

  return (
    <div
      key={repos.id}
      className="mt-2 p-2 bg-gray-50 border flex justify-between "
    >
      <div>
        <h1 className="font-bold text-xl capitalize">
          Repository Name: {repos.name}
        </h1>
        <p>
          <span className="font-bold">Description: </span>{" "}
          {repos.description ? repos.description : "No description founded"}
        </p>
        <p>
          <span className="font-bold">Technologies: </span>
          <i>{repos.language}</i>
        </p>
      </div>
      <button
        onClick={() => handleClick(repos)}
        className="text-sm px-5 py-3 w-full md:w-auto sm:w-1/2 rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
      >
        {!clicked ? "Add to the list" : "Added!"}
      </button>
    </div>
  );
};

export default Repositories;
