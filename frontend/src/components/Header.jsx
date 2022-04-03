import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b ">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-amber-600 font-black">Hello Build</h2>

        <div className="flex items-center gap-4">
          <Link to="repositories" className="font-bold uppercase">
            Your Repositories
          </Link>

          <button
            type="button"
            className="text-white text-sm bg-amber-600 p-3 rounded-md uppercase font-bold"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;