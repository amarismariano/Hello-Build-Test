import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <h1 className="text-amber-600 font-black text-5xl capitalize">
        Regain access to your <span className="text-slate-700">account!</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email here"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Send Email"
          className="bg-amber-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-amber-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/register"
        >
          You don't have an account? Sign up!
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Do you already have an account? Log in!
        </Link>
      </nav>
    </>
  );
};

export default ForgotPassword;
