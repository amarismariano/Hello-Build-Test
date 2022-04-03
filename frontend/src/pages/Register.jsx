import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/clientAxios";

const Register = () => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPw, setRepeatPw] = useState("");
  const [alert, setAlert] = useState({});

  //Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if ([name, email, password, repeatPw].includes("")) {
      setAlert({
        msg: "All Fields Are Mandatory",
        error: true,
      });
      return;
    }
    // Password Validations
    if (password !== repeatPw) {
      setAlert({
        msg: "Passwords are not the same",
        error: true,
      });
      return;
    }
    // Lenght of password for security
    if (password.length < 6) {
      setAlert({
        msg: "The password is very short, write at least 6 characters",
        error: true,
      });
      return;
    }

    setAlert({});

    // Creating the user and saving it in the DB
    try {
      const { data } = await clientAxios.post(`/users`, {
        name,
        email,
        password,
      });
      setAlert({
        msg: data.msg,
        error: false,
      });

      //Restore the original State
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPw("");
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <>
      <h1 className="text-amber-600 font-black text-5xl capitalize">
        Create your account and search your favorites{" "}
        <span className="text-slate-700">Repositories!</span>
      </h1>

      {msg && <Alert alert={alert} />}

      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg p-10"
      >
        <div className="my-5">
          <label
            htmlFor="name"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Sign up Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repeat Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repeat Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repeatPw}
            onChange={(e) => setRepeatPw(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Sign In"
          className="bg-amber-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-amber-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Do you already have an account? Log in!
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/forgot-password"
        >
          Did you forget your password? Click here!
        </Link>
      </nav>
    </>
  );
};

export default Register;
