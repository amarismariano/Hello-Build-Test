import axios from "axios";
import { useState, createContext } from "react";

const UsersContext = createContext();

const UsersProviders = ({ children }) => {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  const [likedRepos, setLikedRepos] = useState([]);

  const getUsers = async () => {
    try {
      const url = `https://api.github.com/search/users?q=${input}&type:user`;
      const { data } = await axios(url);
      setUser(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        input,
        likedRepos,
        getUsers,
        setUser,
        setInput,
        setLikedRepos,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProviders };

export default UsersContext;
