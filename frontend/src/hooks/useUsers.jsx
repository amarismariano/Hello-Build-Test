import { useContext } from "react";
import UsersContext from "../context/UsersProviders";

const useUsers = () => {
  return useContext(UsersContext);
};

export default useUsers;
