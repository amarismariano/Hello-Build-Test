import useUsers from "../hooks/useUsers";
import User from "../components/User";

const HomePage = () => {
  const { user } = useUsers();
  return (
    <>
      {user.length === 0 ? (
        <h1 className="text-4xl font-bold mb-10">
          Comienza buscando usuarios en el panel del lado izquierdo!
        </h1>
      ) : (
        user.map((users) => (
          <div key={users.id}>
            <User key={users.id} users={users} />
          </div>
        ))
      )}
    </>
  );
};

export default HomePage;
