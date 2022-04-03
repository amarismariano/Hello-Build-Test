import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

const Sidebar = () => {
  const { auth } = useAuth();
  const { input, setInput, getUsers } = useUsers();

  const handleClick = () => {
    getUsers();
  };

  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
      <p className="text-xl font-bold">Hey! {auth.name}</p>

      <p className="text-md capitalize">Start searching:</p>
      <input
        className=" w-full p-3  font-bold block mt-5  text-center rounded-lg "
        placeholder="Search for a User"
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-amber-500 text-white center mt-5 flex gap-2 items-center justify-center hover:bg-amber-600 transition-colors "
        onClick={handleClick}
      >
        Search!
      </button>
    </aside>
  );
};

export default Sidebar;
