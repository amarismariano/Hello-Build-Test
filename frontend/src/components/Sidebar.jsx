import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";
import Alert from "./Alert";

const Sidebar = () => {
  const { auth } = useAuth();
  const { input, setInput, getUsers } = useUsers();
  const [alert, setAlert] = useState({});

  const handleClick = () => {
    if (input === "") {
      setAlert({
        msg: "All Fields are mandatory",
        error: true,
      });
      return;
    }

    getUsers();
    setAlert({});
  };

  const { msg } = alert;

  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 border">
      <p className="text-xl font-bold">
        Hey! <span className="text-amber-600 uppercase">{auth.name}</span>
      </p>

      <p className="text-md capitalize font-bold">Start searching:</p>
      {msg && <Alert alert={alert} />}
      <input
        className=" w-full p-3  font-bold block mt-5  text-center rounded-lg "
        placeholder="Search for a User"
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        className="text-sm px-5 py-3 w-full md:w-full sm:w-auto rounded-lg uppercase font-bold bg-amber-500 text-white center mt-5 flex gap-2 items-center justify-center hover:bg-amber-600 transition-colors "
        onClick={handleClick}
      >
        Search!
      </button>
    </aside>
  );
};

export default Sidebar;
