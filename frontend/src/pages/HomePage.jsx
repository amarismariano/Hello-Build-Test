import useUsers from "../hooks/useUsers";
import User from "../components/User";

const HomePage = () => {
  const { user } = useUsers();
  return (
    <>
      {user.length === 0 ? (
        <h1 className="text-center text-4xl font-bold mb-10">
          To get started, find your github user in the left panel!
        </h1>
      ) : (
        user.map((users, index) => (
          <div key={users.id}>
            <User key={index} users={users} />
          </div>
        ))
      )}
    </>
  );
};

export default HomePage;
