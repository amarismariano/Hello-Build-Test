import useUsers from "../hooks/useUsers";
import User from "../components/User";

const HomePage = () => {
  const { user } = useUsers();
  return (
    <>
      {user.map((users) => (
        <h1 key={users.id}>
          <User users={users} />
        </h1>
      ))}
    </>
  );
};

export default HomePage;
