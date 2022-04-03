import axios from "axios";
import { useEffect, useState } from "react";
import Repositories from "./Repositories";

const User = ({ users }) => {
  const [repo, setRepo] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const repoList = !seeMore ? repo.slice(0, 5) : repo;

  const getRepositories = async () => {
    try {
      const url = `https://api.github.com/users/${users.login}/repos`;
      const { data } = await axios(url);
      setRepo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg pt-10 border-4  ">
      <img width={250} height={250} src={users?.avatar_url} />
      <h1 className="font-bold text-2xl capitalize m-2">User: {users.login}</h1>
      <h1 className="font-bold text-2xl capitalize m-2">Repositories: </h1>
      {repoList.map((repos) => (
        <ol className="rounded">
          <li key={repos.id}>
            <Repositories key={repos.id} repos={repos} />
          </li>
        </ol>
      ))}
      {!seeMore ? (
        <button
          className="text-sm m-2 px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-500 text-white center mt-3 flex gap-2 items-center hover:bg-amber-600 transition-colors justify-center"
          onClick={() => setSeeMore(true)}
        >
          See More
        </button>
      ) : (
        <button
          className="text-sm m-2 px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-400 text-white center mt-3 flex gap-2 items-center hover:bg-amber-500 transition-colors justify-center"
          onClick={() => setSeeMore(false)}
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default User;
