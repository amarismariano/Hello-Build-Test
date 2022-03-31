const Login = () => {
  return (
    <>
      <h1 className="text-amber-600 font-black text-5xl capitalize">
        Log in And Search For Your Favorites{" "}
        <span className="text-slate-700">Repositories!</span>
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

        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your email here"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className="bg-amber-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-amber-800 transition-colors"
        />
      </form>
    </>
  );
};

export default Login;
